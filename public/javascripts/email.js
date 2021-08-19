// prevent backpaging
if (window.history && history.pushState) {
    addEventListener('load', function () {
        history.pushState(null, null, null); // creates new history entry with same URL
        addEventListener('popstate', function () {
            alert("Please do not return to the previous page.");
            history.pushState(null, null, null);
        });
    });
}

var clicked = false;

window.onload = function () {
    
    let predictionary;
    var b = document.getElementById('b');
    if (b.innerHTML == "1") {
        predictionary = Predictionary.instance();
        // Get dictionary
        $.get('/dictionaries/words_incorrect.txt').then(function (result) {
            parseWords(result, DICT_EN);
            console.log('finish EN after: ' + (new Date().getTime() - startTime))
        });
    } else if (b.innerHTML == "0") {
        predictionary = Predictionary.instance();
        $.get('/dictionaries/words_correct.txt').then(function (result) {
            parseWords(result, DICT_EN);
            console.log('finish EN after: ' + (new Date().getTime() - startTime))
        });
    }
    
    let DICT_EN = 'DICT_EN'
    let startTime = new Date().getTime();
    
    let input = '';
    let suggestions = [];
    let nrOfSuggestions = 1;
    let learnFromChosen = true;
    
    let predictionDisplayTime;
    let prevSuggestion;
    
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
        suggestions = predictionary.predict(input, {
            maxPredictions: nrOfSuggestions
        });
        if (suggestions.length > 0) {
            suggestions[0] = suggestions[0].toLowerCase();
            var lastSpace = input.lastIndexOf(' ');
            var lastWord = input.substring(lastSpace + 1);
            if (lastWord == suggestions[0].substring(0, lastWord.length)) {
                predictionDisplayTime = new Date().getTime();
                if (suggestions[0] != prevSuggestion) {
                    prevSuggestion = suggestions[0];
                    console.log("SUGGEST: ", suggestions[0], " @ ", predictionDisplayTime);
                }
            }
        }
    }

    function add(suggestion) {
        // encoding for d'
        if (b.innerHTML == "0") { // unbiased
            var tabTime = new Date().getTime();
            console.log("HIT: ", suggestions[0], " @ ", tabTime);
            var lastSpace = input.lastIndexOf(' ');
            var lastWord = input.substring(lastSpace + 1);
            console.log("ROOT: ", lastWord);
        } else { // biased

        }

        input = predictionary.applyPrediction(input, suggestion, {
            dontLearn: false
        });
        var response = document.getElementById('email');
        response.value = input.substring(0, input.length - 1);
        refreshSuggestions();
        predictionary.learnFromInput(input);
    }

    // Train predictionary on original email
    var originalEmail = document.getElementById('message-text').innerHTML.replace(/<(.|\n)*?>/g, ' ');
    predictionary.learnFromText(originalEmail);

    // Press tab key
    var email = document.getElementById('email');
    email.addEventListener('keydown', function (event) {
        if (event.key == 'Tab') {
            event.preventDefault();
            if (suggestions.length > 0) {
                add(suggestions[0]);
                var lastSpace = input.lastIndexOf(' ');
                if (suggestions.length > 0) {
                    document.getElementById('predictions').innerHTML = input + '<span style="color:Gray">' + suggestions[0].substring(input.length - lastSpace - 1) + '</span>';
                }
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
        var lastSpace = input.lastIndexOf(' ');
        var lastWord = input.substring(lastSpace + 1);
        if (event.key != 'Tab') {
            predictionary.learnFromInput(input);
            if (input.length == event.target.selectionStart && suggestions.length > 0) {
                if (lastWord != suggestions[0].substring(0, lastWord.length) && b.innerHTML == "0") {
                    var missTime = new Date().getTime();
                    console.log("MISS: ", lastWord, " @ ", missTime);
                }
            }
            refreshSuggestions();
        }

        var suggestion = "";
        if (suggestions.length > 0) {
            suggestion = suggestions[0];
        }
        if (lastWord != suggestion.substring(0, lastWord.length)) {
            document.getElementById('predictions').innerHTML = input;
            suggestions = [];
        } else {
            document.getElementById('predictions').innerHTML = input + '<span style="color:Gray">' + suggestion.substring(input.length - lastSpace - 1) + '</span>';
        }
    }

    // Click send button
    var button = document.getElementById('send');
    if (!clicked && button != null) {
        button.addEventListener('click', function (event) {
            var wordCount = document.getElementById('wordcount').innerHTML;
            if (wordCount < 100) {
                document.getElementById("wc_error").innerHTML = " Word count must be greater than 100."
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
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            message: response,
                            uid: id,
                            email_id: email
                        })
                    })
                    .then(response => response.json())
                    .then(result => {
                        if (result.email_id == -1) {
                            console.log("goodbye");
                            window.location = '/goodbye';
                        } else if (result.prompt_count == 4) {
                            window.location = '/' + id + '/s1'
                        } else if (result.prompt_count == 8) {
                            window.location = '/' + id + '/m2'
                        } else {
                            console.log("next");
                            window.location = '/' + id + '/' + result.email_id;
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
    if (tutorialSend0 != null) {
        tutorialSend0.addEventListener('click', function (event) {
            var str = window.location.pathname;
            var id = str.substring(
                str.indexOf("/") + 1,
                str.lastIndexOf("/")
            );
            window.location = '/' + id + '/tt0';
        })
    }

    // Click tutorial send 1
    var tutorialSend1 = document.getElementById('send-tutorial-1');
    if (tutorialSend1 != null) {
        tutorialSend1.addEventListener('click', function (event) {
            var str = window.location.pathname;
            var id = str.substring(
                str.indexOf("/") + 1,
                str.lastIndexOf("/")
            );
            window.location = '/' + id + '/tt1';
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
    if (hour <= 9) {
        hour += 15;
    } else {
        hour -= 9;
    }
    var time = document.getElementById('time');
    if (hour == 1) {
        time.innerText = "9:15 AM (" + hour + " hour ago)"
    } else {
        time.innerText = "9:15 AM (" + hour + " hours ago)"
    }

    var _typingIndicator = document.querySelector('.typing'),
        _input = document.querySelector('#email'),
        idleTime = 400,
        idleTimer = null,
        inputValue,
        indicatorState = {
            active: 'is-typing-active',
            init: 'is-typing-init'
        };

    function showIndicator() {
        console.log("showIndicator")
        _typingIndicator.classList.add(indicatorState.init);
    }

    function activateIndicator(el) {
        _typingIndicator.classList.add(indicatorState.active);
        inputValue = el.value;
        detectIdle(el);
    }

    function removeIndicator() {
        console.log("removeIndicator")
        _typingIndicator.classList.remove(indicatorState.init, indicatorState.active);
    }

    function detectIdle(el) {
        if (idleTimer) {
            clearInterval(idleTimer);
        }

        idleTimer = setTimeout(function () {
            if (getInputCurrentValue(el) === inputValue) {
                _typingIndicator.classList.remove(indicatorState.active);
            }
        }, idleTime);
    }

    function getInputCurrentValue(el) {
        var currentValue = el.value;
        return currentValue;
    }

    function initTypingIndicator() {
        console.log("initTypingIndicator")
        _input.onfocus = function () {
            showIndicator();
        };

        _input.onkeyup = function () {
            activateIndicator(this);
        };

        _input.onblur = function () {
            removeIndicator();
        };
    }

    initTypingIndicator();
}