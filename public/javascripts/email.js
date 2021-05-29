console.log('Client-side code running!');
var clicked = false;

window.onload = function() {
    var button = document.getElementById('send');
    if(!clicked) {
        button.addEventListener('click', function(event) {
            var wordCount = document.getElementById('wordcount').innerHTML;
            console.log("wordcount: ", wordCount);
            if(wordCount < 200) {
                console.log("word count < 200");
            } else {
                clicked = true;
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
                        console.log('clicked: ', clicked);
                        return;
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
}

// function countWord() {
//     var words = document.getElementById('email').value;
//     var count = 0;
//     var split = words.split(' ');
//     for (var i = 0; i < split.length; i++) {
//         if (split[i] != '') {
//             count += 1;
//         }
//     }

//     document.getElementById("wordcount").innerHTML = count;
// }