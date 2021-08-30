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
        var checkCount = 0;
        for (var i = 0; i < mediums.length; i++) {
            console.log(mediums[i].item(0).nodeName)
            for (var j = 0, length = mediums[i].length; j < length; j++) { 
                if (mediums[i][j].checked) {
                    checkCount += 1;
                }
            }
        }
        if (checkCount < mediums.length - 1 && document.getElementById("age").value == "") {
            if(confirm("You haven't answered all of the questions. Would you like to continue anyway?")) {
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
                    .then(result => {})
                    .catch(error => {
                        console.log(error)
                    })
                window.location = '/goodbye'; 
            } else {
                return
            }
        } else {
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
                .then(result => {})
                .catch(error => {
                    console.log(error)
                })
            window.location = '/goodbye';
        }
    })
}