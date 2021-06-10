console.log('Client-side code running!');
var clicked = false;
var words = "";
var predWordCount = 0;

window.onload = function() {
    var button = document.getElementById('send');
    if(!clicked) {
        button.addEventListener('click', function(event) {
            var wordCount = document.getElementById('wordcount').innerHTML;
            if(wordCount < 200) {
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

    var email = document.getElementById('email');
    email.addEventListener('keydown', function(event) {
        if(event.key == 'Tab') {
            event.preventDefault();
            document.getElementById('email').value = document.getElementById("predictions").innerText;
            words = "";
            predWordCount = 0;
            fetch('/tab', {method: 'POST'})
                .then(function(response) {
                    console.log(response)
                    if(response.ok) {
                        // console.log('Tab!');
                    }
                    // throw new Error('Tab request failed.');
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    });

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
    worker.onmessage = function(e) {
        console.log(e.data);
        if(e.data.right !== undefined) {
            document.getElementById('predictions').innerHTML = document.getElementById("email").value + '<span style="color:Gray">' + e.data.right.substring(1, e.data.right.length - 6) + '</span>';
        }
    }
    if(window.Worker) {
        // document.getElementById("email").placeholder = "TEST TEXT!";
        document.querySelector('#email').onkeyup = function(e) {
            var response = document.getElementById("email").value; 
            var begin = Math.max(response.lastIndexOf(' ', response.length-2), response.lastIndexOf('\n', response.length-2));
            var lastWord = response.substring(begin+1, response.length-1);
            var regex = /^[a-z0-9]+$/i;
            if(e.keyCode == 190 || e.keyCode == 191 || e.keyCode == 49) {
                words = "";
                predWordCount = 0;
            }
            if((e.keyCode == 32 || e.keyCode == 13) && regex.test(lastWord)) {
                words += lastWord + " ";
                predWordCount += 1;
                if(predWordCount >= 3) {
                    console.log(words);
                    worker.postMessage(words.trim());
                }
            }
            if(e.keyCode != 9) {
                document.getElementById("predictions").innerHTML = response;
            }
        }
    }

    var s1 = document.getElementById('email');
    var s2 = document.getElementById('predictions');
    function select_scroll_1(e) { 
        s2.scrollTop = s1.scrollTop; 
    }
    s1.addEventListener('scroll', select_scroll_1, false);
}