// prevent backpaging
if (window.history && history.pushState) {
    addEventListener('load', function() {
        history.pushState(null, null, null); // creates new history entry with same URL
        addEventListener('popstate', function() {
            alert("Please do not return to the previous page.");
            history.pushState(null, null, null);
        });    
    });
}

var clicked = false;

window.onload = function() {
    let predictionary;
    // Select predictionary version
    var b = document.getElementById('b');
    if(b.innerHTML == "1") {
        predictionary = Predictionary.instance();
    } else if(b.innerHTML == "0") {
        predictionary = Predictionary.instance();
    }

    let DICT_EN = 'DICT_EN'
    let startTime = new Date().getTime();
    
    let input = '';
    let suggestions = [];
    let nrOfSuggestions = 10;
    let learnFromChosen = true;
    
    function parseWords(string, dictionaryKey) {
        predictionary.parseWords(string, {
            elementSeparator: '\n',
            rankSeparator: ' ',
            wordPosition: 2,
            rankPosition: 0,
            addToDictionary: dictionaryKey
        });
    }
    
    function refreshSuggestions() {
        suggestions = predictionary.predict(input, {maxPredictions: nrOfSuggestions});
        if(suggestions.length > 0) {
            suggestions[0] = suggestions[0].toLowerCase();
            console.log(suggestions);
        }
    }
    
    function add(suggestion) {
        input = predictionary.applyPrediction(input, suggestion, {dontLearn: false});
        var response = document.getElementById('email');
        response.value = input.substring(0, input.length - 1);
        refreshSuggestions();
        predictionary.learnFromInput(input);
    }
    
    // Get dictionary
    $.get('/dictionaries/words_en.txt').then(function (result) {
        parseWords(result, DICT_EN);
        console.log('finish EN after: ' + (new Date().getTime() - startTime))
    });
    
    // Train predictionary on original email
    var originalEmail = document.getElementById('message-text').innerHTML.replace(/<(.|\n)*?>/g, ' ');
    console.log(originalEmail);
    predictionary.learnFromText(originalEmail);
    
    // Press tab key
    var email = document.getElementById('email');
    email.addEventListener('keydown', function(event) {
        if(event.key == 'Tab') {
            event.preventDefault();
            if(suggestions.length > 0) {
                add(suggestions[0]);
                var lastSpace = input.lastIndexOf(' ');
                document.getElementById('predictions').innerHTML = input + '<span style="color:Gray">' + suggestions[0].substring(input.length - lastSpace - 1) + '</span>';
            }
        }
    });
    
    // Get word count
    email.addEventListener("keyup", function countWord() {
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
    
    // Predict: focus on displaying predictive text behind textarea correctly
    email.oninput = handleInput;
    function handleInput(event) {
        input = email.value;
        console.log("input: ", input);
        console.log("cursor: ", event.target.selectionStart)
        if(event.key != 'Tab') {
            predictionary.learnFromInput(input);
            refreshSuggestions();
        }
        
        var lastSpace = input.lastIndexOf(' ');
        var suggestion = "";
        if(suggestions.length > 0) {
            suggestion = suggestions[0];
        }
        var lastWord = input.substring(lastSpace + 1);
        if(lastWord != suggestion.substring(0, lastWord.length)) {
            document.getElementById('predictions').innerHTML = input;
            suggestions = [];
        } else {
            document.getElementById('predictions').innerHTML = input + '<span style="color:Gray">' + suggestion.substring(input.length - lastSpace - 1) + '</span>';
        }
    }
    
    // Click send button
    var button = document.getElementById('send');
    if(!clicked && button != null) {
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
                        console.log("goodbye");
                        window.location='/goodbye';
                    } else {
                        console.log("next");
                        window.location='/' + id + '/' + result.email_id;
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            }
        });
    }

    // Click tutorial send 0
    var tutorialSend0 = document.getElementById('send-tutorial-0');
    if(tutorialSend0 != null) {
        tutorialSend0.addEventListener('click', function(event) {
            var str = window.location.pathname;
            var id = str.substring(
                str.indexOf("/") + 1, 
                str.lastIndexOf("/")
            );
            window.location='/' + id + '/t1';
        })
    }

    // Click tutorial send 1
    var tutorialSend1 = document.getElementById('send-tutorial-1');
    if(tutorialSend1 != null) {
        tutorialSend1.addEventListener('click', function(event) {
            var str = window.location.pathname;
            var id = str.substring(
                str.indexOf("/") + 1, 
                str.lastIndexOf("/")
            );
            fetch('/start', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({uid: id})
            })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result.email);
                window.location='/' + id + '/' + result.email;
            })
            .catch(error => {
                console.error('Error:', error);
            });
        })
    }
            
    // Scroll predictive text div and textarea at the same time
    var s1 = document.getElementById('email');
    var s2 = document.getElementById('predictions');
    function select_scroll_1(e) { 
        s2.scrollTop = s1.scrollTop; 
    }
    s1.addEventListener('scroll', select_scroll_1, false);

    // Set time difference
    var hour = new Date().getHours();
    if(hour <= 9) {
        hour += 15;
    } else {
        hour -= 9;
    }
    var time = document.getElementById('time');
    if(hour == 1) {
        time.innerText = "9:15 AM (" + hour + " hour ago)"
    } else {
        time.innerText = "9:15 AM (" + hour + " hours ago)"
    }
}
        