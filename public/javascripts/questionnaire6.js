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
    var skills = [
        document.getElementsByName('I can effectively write under time constraints.'),
        document.getElementsByName('I can write quickly in English as a native speaker.'),
        document.getElementsByName('I can logically support and develop my main point when writing.'),
        document.getElementsByName('I edit for content (ideas) as I am writing.'),
        document.getElementsByName('I edit for organization as I am writing.'),
        document.getElementsByName('I like to change, or make my ideas clearer as I am writing.'),
        document.getElementsByName('I use a dictionary to check things that I am not sure about when I write.'),
        document.getElementsByName('If I can’t think of a word, I can easily find another one that means that same thing.'),
        document.getElementsByName('I can appropriately adjust the tone and style of my writing to fit the needs of particular readers.'),
        document.getElementsByName('I always have a clear outline in my mind before writing.'),
        document.getElementsByName('After writing, I go back to my content and revise for clarity.')
    ]
    var promises = []
    button.addEventListener('click', function (event) {
        var str = window.location.pathname;
        var id = str.substring(
            str.indexOf("/") + 1,
            str.lastIndexOf("/")
        );
        var checkCount = 0;
        for (var i = 0; i < skills.length; i++) {
            for (var j = 0, length = skills[i].length; j < length; j++) { 
                if (skills[i][j].checked) {
                    checkCount += 1;
                }
            }
        }
        if (checkCount != skills.length) {
            if(confirm("You haven't answered all of the questions. Would you like to continue anyway?")) {
                for (var i = 0; i < skills.length; i++) {
                    for (var j = 0, length = skills[i].length; j < length; j++) {
                        if (skills[i][j].checked) {
                            promises.push(
                                fetch('/q6_submit', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        uid: id,
                                        skill: skills[i][j].name,
                                        ability: skills[i][j].value
                                    })
                                })
                            )
                            break;
                        }
                    }
                }
                Promise.all(promises)
                    .then(result => {
                        window.location = '/' + id + '/loading';
                    })
                    .catch(error => {
                        console.log(error)
                    })
            } else {
                return
            }
        } else {
            for (var i = 0; i < skills.length; i++) {
                for (var j = 0, length = skills[i].length; j < length; j++) {
                    if (skills[i][j].checked) {
                        promises.push(
                            fetch('/q6_submit', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    uid: id,
                                    skill: skills[i][j].name,
                                    ability: skills[i][j].value
                                })
                            })
                        )
                        break;
                    }
                }
            }
            Promise.all(promises)
                .then(result => {
                    window.location = '/' + id + '/loading';
                })
                .catch(error => {
                    console.log(error)
                })
        }
    })
}