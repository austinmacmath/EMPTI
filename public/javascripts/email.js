console.log('Client-side code running!');
var clicked = false;
var words = "";
var predWordCount = 0;
var predText = "";
var predTextSaved = "";
var lastPressTab = false;
var predTextDisplayTime;
var predTextDisplayed = false;
var timeToTab;

window.onload = function() {
    // Click send button
    var button = document.getElementById('send');
    if(!clicked) {
        button.addEventListener('click', function(event) {
            var wordCount = document.getElementById('wordcount').innerHTML;
            console.log("wordcount: ", wordCount);
            if(wordCount < 200) {
                console.log("word count < 200");
                document.getElementById("wc_error").innerHTML = " Word count must be greater than 200."
            } else {
                clicked = true;
                button.disabled = true;
                var str = window.location.pathname;
                var id = str.substring(
                    str.indexOf("/") + 1, 
                    str.lastIndexOf("/")
                    );
                var email = str.substring(
                    str.lastIndexOf("/") + 1
                    );
                var response = document.getElementById('email').value;
                fetch('/send', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({message: response, uid: id, email_id: email})
                })
                .then(response => response.json())
                .then(result => {
                    console.log('Send!');
                    console.log(result.email_id)
                    if(result.email_id == -1) {
                        window.location='/goodbye';
                    } else {
                        window.location='/' + id + '/' + result.email_id;
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            }
        });
    }

    // Press tab key
    var email = document.getElementById('email');
    email.addEventListener('keydown', function(event) {
        if(event.key == 'Tab') {
            event.preventDefault();
            if(predText != "") {
                var date3 = new Date();
                timeToTab = date3.getTime();
                console.log('Tab Time: ', timeToTab);
                document.getElementById('email').value = document.getElementById("predictions").innerText;
                words = "";
                predText = "";
                predWordCount = 0;
                lastPressTab = true;
                // fetch('/tab', {method: 'POST'})
                //     .then(function(response) {
                //         // console.log(response)
                //         if(response.ok) {
                //             // console.log("Tab response ok.")
                //         }
                //     })
                //     .catch(function(error) {
                //         console.log(error);
                //     });
            }
        }
    });

    // Get word count
    document
        .querySelector("#email")
        .addEventListener("keyup", function countWord() {
            let res = [];
            let str = this.value.replace(/[\t\n\r\.\?\!]/gm, " ").split(" ");
            str.map((s) => {
            let trimStr = s.trim();
            if (trimStr.length > 0) {
                res.push(trimStr);
            }
        });
        document.querySelector("#wordcount").innerText = res.length;
    });
   
    var worker = new Worker('/javascripts/browser-worker1.js');
    // Write predictive text to predictions div
    worker.onmessage = function(e) {
        // console.log(e.data);
        if(e.data.right !== undefined) {
            predText = e.data.right.substring(1, e.data.right.length - 6);
            predTextSaved = predText;
            document.getElementById('predictions').innerHTML = document.getElementById("email").value + '<span style="color:Gray">' + e.data.right.substring(1, e.data.right.length - 6) + '</span>';
            var date = new Date();
            predTextDisplayTime = date.getTime();
            predTextDisplayed = true;
        } else {
            predText = "";
        }
        console.log("Predictive Text Time: ", predTextDisplayTime);
        console.log("Predictive Text: ", predText);
    }
    // Send words to predictive text algorithm in web worker
    if(window.Worker) {
        document.querySelector('#email').onkeyup = function(e) {
            // console.log("predTextDisplayed: ", predTextDisplayed);
            var response = document.getElementById("email").value; 
            var begin = Math.max(response.lastIndexOf(' ', response.length-2), response.lastIndexOf('\n', response.length-2));
            var lastWord = response.substring(begin+1, response.length-1);
            var regex = /^[a-z0-9]+$/i;
            // If ending punctuation is typed, reset words 
            if(e.keyCode == 190 || e.keyCode == 191 || e.keyCode == 49) {
                words = "";
                predWordCount = 0;
            }
            // If enter or space is clicked, append the last word to words
            if((e.keyCode == 32 || e.keyCode == 13) && regex.test(lastWord)) {
                words += lastWord + " ";
                predWordCount += 1;
                if(predWordCount >= 3) {
                    console.log(words);
                    worker.postMessage(words.trim());
                }
            }
            // If tab is not pressed, copy textarea content to predictions div
            if(e.keyCode != 9) {
                var date2 = new Date();
                document.getElementById("predictions").innerHTML = response;
                var str = window.location.pathname;
                var id = str.substring(
                    str.indexOf("/") + 1, 
                    str.lastIndexOf("/")
                    );
                var email = str.substring(
                    str.lastIndexOf("/") + 1
                    );
                // If the last key pressed is tab and delete is typed after, its a false alarm
                if(lastPressTab && e.keyCode == 8) {
                    var timeToFalseAlarm = date2.getTime();
                    console.log("FALSE ALARM TIME: ", timeToFalseAlarm);
                    fetch('/tab', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({uid: id, email_id: email, predictive_text: predTextSaved, tab_time: timeToTab, hit_time: 0, miss_time: 0, false_alarm_time: timeToFalseAlarm})
                    })
                    .then(response => {
                        console.log('False Alarm Sent');
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
                } else if(lastPressTab && e.keyCode != 8) {
                    var timeToHit = date2.getTime();
                    console.log("HIT TIME: ", timeToHit);
                    fetch('/tab', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({uid: id, email_id: email, predictive_text: predTextSaved, tab_time: timeToTab, hit_time: timeToHit, miss_time: 0, false_alarm_time: 0})
                    })
                    .then(response => {
                        console.log('Hit Sent');
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
                } else if(predTextDisplayed) {
                    var timeToMiss = date2.getTime();
                    console.log("MISS TIME: ", timeToMiss);
                    fetch('/tab', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({uid: id, email_id: email, predictive_text: predTextSaved, tab_time: 0, hit_time: 0, miss_time: timeToMiss, false_alarm_time: 0})
                    })
                    .then(response => {
                        console.log('Miss Sent');
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
                }
                lastPressTab = false;
            }
            predTextDisplayed = false;
        }
    }

    // Scroll predictive text div and textarea at the same time
    var s1 = document.getElementById('email');
    var s2 = document.getElementById('predictions');
    function select_scroll_1(e) { 
        s2.scrollTop = s1.scrollTop; 
    }
    s1.addEventListener('scroll', select_scroll_1, false);
}
