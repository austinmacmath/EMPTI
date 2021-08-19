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
    var perspectives = [
        document.getElementById('Formal language'),
        document.getElementById('Organization and transition'),
        document.getElementById('Spelling and grammar'),
        document.getElementById('Range of vocabulary'),
        document.getElementById('Punctuation and sentence structure'),
        document.getElementById('Styles and tones'),
        document.getElementById('Effect of the target audience'),
        document.getElementById('Clarity and conciseness')
    ]
    var promises = []
    button.addEventListener('click', function (event) {
        var str = window.location.pathname;
        var id = str.substring(
            str.indexOf("/") + 1,
            str.lastIndexOf("/")
        );
        for (var i = 0; i < perspectives.length; i++) {
            // console.log(perspectives[i].id + ": " + perspectives[i].checked);
            if(perspectives[i].checked) {
                promises.push(
                    fetch('/q5_submit', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            uid: id,
                            perspective: perspectives[i].id,
                            checked: perspectives[i].checked
                        })
                    })
                )
            }
        }
        Promise.all(promises)
            .then(result => {
                console.log("q5_submit success")
            })
            .catch(error => {
                console.log(error)
            })
        window.location = '/' + id + '/questionnaire6';
    })
}