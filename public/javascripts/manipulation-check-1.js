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

window.onload = function () {
    var button = document.getElementById('next')
    var radios = document.getElementsByName('algorithm') 
    var correctResponse;
    button.addEventListener('click', function (event) {
        var str = window.location.pathname;
        var id = str.substring(
            str.indexOf("/") + 1,
            str.lastIndexOf("/")
        );
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                fetch('/m1_submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        uid: id,
                        answer: radios[i].value
                    })
                })
                .then(response => response.json())
                .then(result => {
                    correctResponse = result.correct
                    fetch('/tutorial_complete', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            uid: id
                        })
                    })
                    .then(response => response.json())
                    .then(result => {
                        if(correctResponse) {
                            console.log("correctResponse")
                            window.location = '/' + id + '/' + result.email_id;
                        } else {
                            console.log("incorrectResponse")
                            alert("Please try again.");
                            if(result.t0_complete) {
                                window.location = '/' + id + '/tt0'
                            } else {
                                window.location = '/' + id + '/tt1'
                            }
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
                })
                // break
            }
        }
        // window.location = '/' + id + '/s1';
    })
}