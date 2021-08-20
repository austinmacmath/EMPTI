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
    var mediums = [
        document.getElementsByName('adopt')
    ]
    var promises = []
    button.addEventListener('click', function (event) {
        var str = window.location.pathname;
        var id = str.substring(
            str.indexOf("/") + 1,
            str.lastIndexOf("/")
        );
        for (var i = 0; i < mediums.length; i++) {
            for (var j = 0, length = mediums[i].length; j < length; j++) {
                if (mediums[i][j].checked) {
                    promises.push(
                        fetch('/s1-6_submit', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                uid: id,
                                medium: mediums[i][j].name,
                                frequency: mediums[i][j].value
                            })
                        })
                    )
                    break;
                }
            }
        }
        Promise.all(promises)
            .then(result => {
                return fetch('/tutorial_complete', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        uid: id
                    })
                })
            })
            .then(response => response.json())
            .then(result => {
                if (result.t0_complete && result.t1_complete) {
                    window.location = '/' + id + '/s3'
                } else {
                    window.location = '/' + id + '/break'
                }
            })
            .catch(error => {
                console.log(error)
            })
    })
}