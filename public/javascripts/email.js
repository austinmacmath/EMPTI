console.log('Client-side code running!');
var clicked = false;

function insertTextAtCursor(el, text) {
    var val = el.value, endIndex, range, doc = el.ownerDocument;
    if (typeof el.selectionStart == "number" && typeof el.selectionEnd == "number") {
        endIndex = el.selectionEnd;
        el.value = val.slice(0, endIndex) + text + val.slice(endIndex);
        el.selectionStart = endIndex;
        el.selectionEnd = endIndex + text.length;
    } else if (doc.selection != "undefined" && doc.selection.createRange) {
        el.focus();
        range = doc.selection.createRange();
        range.collapse(false);
        range.text = text;
        range.select();
    }
}

window.onload = function() {
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

    var email = document.getElementById('email');
    email.addEventListener('keydown', function(event) {
        if(event.key == 'Tab') {
            event.preventDefault();
            fetch('/tab', {method: 'POST'})
                .then(function(response) {
                    console.log(response)
                    if(response.ok) {
                        console.log('Tab!');
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
    
    var worker = new Worker('/javascripts/bundle.js')
    worker.onmessage = function(e) {
        console.log(e.data);
    }
    if(window.Worker) {
        // document.getElementById("email").placeholder = "TEST TEXT!";
        document.querySelector('#email').onkeyup = function(e) {
            var response = document.getElementById("email").value; 
            var begin = Math.max(response.lastIndexOf(' ', response.length-2), response.lastIndexOf('\n', response.length-2));
            var lastWord = response.substring(begin+1, response.length-1);
            var regex = /^[a-z0-9]+$/i;
            if((e.keyCode == 32 || e.keyCode == 13) && regex.test(lastWord)) {
                worker.postMessage(lastWord);
                // insertTextAtCursor(document.getElementById("email"), "TEST TEXT");
            }
        }
    }

    var s1 = document.getElementById('email');
    var s2 = document.getElementById('predictions');
    function select_scroll_1(e) { 
        s2.scrollTop = s1.scrollTop; 
        console.log(s1.scrollTop);
        console.log(s2.scrollTop);
    }
    s1.addEventListener('scroll', select_scroll_1, false);
}
