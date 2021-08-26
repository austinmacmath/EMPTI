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
            if (perspectives[i].checked) {
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
            .then(result => {})
            .catch(error => {
                console.log(error)
            })
        window.location = '/' + id + '/questionnaire6';
    })
}