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
    var mediums = [document.getElementsByName('Neutral'), document.getElementsByName('Formal'), document.getElementsByName('Confident'), document.getElementsByName('Joyful'), document.getElementsByName('Optimistic'), document.getElementsByName('Friendly'), document.getElementsByName('Urgent'), document.getElementsByName('Analytical'), document.getElementsByName('Respectful'), document.getElementsByName('Knowledgeable')]
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
                    checkCount += 1;
                }
            }
        }
        if (checkCount != mediums.length) {
            if(confirm("You haven't answered all of the questions. Would you like to continue anyway?")) {
                for (var i = 0; i < mediums.length; i++) {
                    for (var j = 0, length = mediums[i].length; j < length; j++) {
                        if (mediums[i][j].checked) {
                            promises.push(
                                fetch('/q4_submit', {
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
                    .then(result => {})
                    .catch(error => {
                        console.log(error)
                    })
                window.location = '/' + id + '/questionnaire5';
            } else {
                return
            }
        } else {
            for (var i = 0; i < mediums.length; i++) {
                for (var j = 0, length = mediums[i].length; j < length; j++) {
                    if (mediums[i][j].checked) {
                        promises.push(
                            fetch('/q4_submit', {
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
                .then(result => {})
                .catch(error => {
                    console.log(error)
                })
            window.location = '/' + id + '/questionnaire5';
        }
    })
}