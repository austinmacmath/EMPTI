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
        document.getElementsByName('education'),
        document.getElementsByName('SpanishHispanicLatino'),
        document.getElementsByName('ethnicity'),
        document.getElementsByName('gender'),
        document.getElementsByName('income'),
        document.getElementsByName('check'),
        document.getElementsByName('political')
    ]
    var promises = []
    button.addEventListener('click', function (event) {
        var str = window.location.pathname;
        var id = str.substring(
            str.indexOf("/") + 1,
            str.lastIndexOf("/")
        );
        promises.push(
            fetch('/s3-5_submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    uid: id,
                    medium: "age",
                    frequency: document.getElementById("age").value
                })
            })
        )
        for (var i = 0; i < mediums.length; i++) {
            for (var j = 0, length = mediums[i].length; j < length; j++) {
                if (mediums[i][j].checked) {
                    var value
                    if (mediums[i][j].id == "Other1") {
                        value = document.getElementById("Other1Text").value
                    } else if (mediums[i][j].id == "Other2") {
                        value = document.getElementById("Other2Text").value
                    } else {
                        value = mediums[i][j].value
                    }
                    promises.push(
                        fetch('/s3-5_submit', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                uid: id,
                                medium: mediums[i][j].name,
                                frequency: value
                            })
                        })
                    )
                }
            }
        }
        Promise.all(promises)
            .then(result => {
                console.log("s3-5_submit success")
            })
            .catch(error => {
                console.log(error)
            })
        window.location = '/goodbye';
    })
}