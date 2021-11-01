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
    var url = window.location.href
    var firstTime = localStorage.getItem(url);
    if(!firstTime) {
        var progressCount = parseInt(localStorage.getItem("progressCount")) + 1
        localStorage.setItem("progressCount", progressCount.toString())
        localStorage.setItem(url, progressCount.toString());
    }
    var progressCount = parseInt(localStorage.getItem(url))
    document.getElementById('completed').style.width = (progressCount * 20).toString() + "px"
    
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
                fetch('/manipulation_check_1_submit', {
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
                                if (correctResponse) {
                                    window.location = '/' + id + '/' + result.email_id;
                                } else {
                                    alert("Please try again.");
                                    if (result.t0_complete) {
                                        window.location = '/' + id + '/tutorial_transition_0'
                                    } else {
                                        window.location = '/' + id + '/tutorial_transition_1'
                                    }
                                }
                            })
                            .catch(error => {
                                console.error('Error:', error);
                            });
                    })
            }
        }
    })
}