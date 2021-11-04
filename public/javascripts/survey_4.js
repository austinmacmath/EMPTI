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
    var table = document.getElementById('table')
    var algorithm = document.getElementById('algorithm').innerHTML
    var rows = [
        '<td class="header">I felt that I had a lot of control over my experiences working with <strong>' + algorithm + '</strong>. </td><td> <input type="radio" name="control" value="1"></td><td> <input type="radio" name="control" value="2"></td><td> <input type="radio" name="control" value="3"></td><td> <input type="radio" name="control" value="4"></td><td> <input type="radio" name="control" value="5"></td><td> <input type="radio" name="control" value="6"></td><td> <input type="radio" name="control" value="7"></td><td></td>',
        '<td class="header">While working with <strong>' + algorithm + '</strong>, I had absolutely no control over what I could do with it.</td><td> <input type="radio" name="no control" value="7"></td><td> <input type="radio" name="no control" value="6"></td><td> <input type="radio" name="no control" value="5"></td><td> <input type="radio" name="no control" value="4"></td><td> <input type="radio" name="no control" value="3"></td><td> <input type="radio" name="no control" value="2"></td><td> <input type="radio" name="no control" value="1"></td><td></td>',
        '<td class="header">While working with <strong>' + algorithm + '</strong>, my actions decided the kind of experiences I got.</td><td> <input type="radio" name="experiences" value="1"></td><td> <input type="radio" name="experiences" value="2"></td><td> <input type="radio" name="experiences" value="3"></td><td> <input type="radio" name="experiences" value="4"></td><td> <input type="radio" name="experiences" value="5"></td><td> <input type="radio" name="experiences" value="6"></td><td> <input type="radio" name="experiences" value="7"></td><td></td>',
        '<td class="header"><strong>' + algorithm + '</strong> was effective in gathering users’ feedback.</td><td> <input type="radio" name="feedback" value="1"></td><td> <input type="radio" name="feedback" value="2"></td><td> <input type="radio" name="feedback" value="3"></td><td> <input type="radio" name="feedback" value="4"></td><td> <input type="radio" name="feedback" value="5"></td><td> <input type="radio" name="feedback" value="6"></td><td> <input type="radio" name="feedback" value="7"></td><td></td>',
        '<td class="header"><strong>' + algorithm + '</strong> facilitated two-way communication between the users and itself.</td><td> <input type="radio" name="two-way" value="1"></td><td> <input type="radio" name="two-way" value="2"></td><td> <input type="radio" name="two-way" value="3"></td><td> <input type="radio" name="two-way" value="4"></td><td> <input type="radio" name="two-way" value="5"></td><td> <input type="radio" name="two-way" value="6"></td><td> <input type="radio" name="two-way" value="7"></td><td></td>',
        '<td class="header">It was difficult to offer feedback to <strong>' + algorithm + '</strong>.</td><td> <input type="radio" name="difficult" value="7"></td><td> <input type="radio" name="difficult" value="6"></td><td> <input type="radio" name="difficult" value="5"></td><td> <input type="radio" name="difficult" value="4"></td><td> <input type="radio" name="difficult" value="3"></td><td> <input type="radio" name="difficult" value="2"></td><td> <input type="radio" name="difficult" value="1"></td><td></td>',
        '<td class="header"><strong>' + algorithm + '</strong> made me feel it wanted to listen to its users.</td><td> <input type="radio" name="listen" value="1"></td><td> <input type="radio" name="listen" value="2"></td><td> <input type="radio" name="listen" value="3"></td><td> <input type="radio" name="listen" value="4"></td><td> <input type="radio" name="listen" value="5"></td><td> <input type="radio" name="listen" value="6"></td><td> <input type="radio" name="listen" value="7"></td><td></td>',
        '<td class="header"><strong>' + algorithm + '</strong> did not at all encourage users to talk back.</td><td> <input type="radio" name="encourage" value="7"></td><td> <input type="radio" name="encourage" value="6"></td><td> <input type="radio" name="encourage" value="5"></td><td> <input type="radio" name="encourage" value="4"></td><td> <input type="radio" name="encourage" value="3"></td><td> <input type="radio" name="encourage" value="2"></td><td> <input type="radio" name="encourage" value="1"></td><td></td>',
        '<td class="header"><strong>' + algorithm + '</strong> gave users the opportunity to talk back.</td><td> <input type="radio" name="opportunity" value="1"></td><td> <input type="radio" name="opportunity" value="2"></td><td> <input type="radio" name="opportunity" value="3"></td><td> <input type="radio" name="opportunity" value="4"></td><td> <input type="radio" name="opportunity" value="5"></td><td> <input type="radio" name="opportunity" value="6"></td><td> <input type="radio" name="opportunity" value="7"></td><td></td>',
        '<td class="header"><strong>' + algorithm + '</strong> processed my input very quickly.</td><td> <input type="radio" name="processed" value="1"></td><td> <input type="radio" name="processed" value="2"></td><td> <input type="radio" name="processed" value="3"></td><td> <input type="radio" name="processed" value="4"></td><td> <input type="radio" name="processed" value="5"></td><td> <input type="radio" name="processed" value="6"></td><td> <input type="radio" name="processed" value="7"></td><td></td>',
       '<td class="header">Getting suggestions from <strong>' + algorithm + '</strong> was very fast.</td><td> <input type="radio" name="fast" value="1"></td><td> <input type="radio" name="fast" value="2"></td><td> <input type="radio" name="fast" value="3"></td><td> <input type="radio" name="fast" value="4"></td><td> <input type="radio" name="fast" value="5"></td><td> <input type="radio" name="fast" value="6"></td><td> <input type="radio" name="fast" value="7"></td><td></td>',
        '<td class="header">I was able to obtain the suggestions I wanted without any delay.</td><td> <input type="radio" name="without any delay" value="1"></td><td> <input type="radio" name="without any delay" value="2"></td><td> <input type="radio" name="without any delay" value="3"></td><td> <input type="radio" name="without any delay" value="4"></td><td> <input type="radio" name="without any delay" value="5"></td><td> <input type="radio" name="without any delay" value="6"></td><td> <input type="radio" name="without any delay" value="7"></td><td></td>',
        '<td class="header">When I used <strong>' + algorithm + '</strong>, I felt I was getting instantaneous information.</td><td> <input type="radio" name="instantaneous" value="1"></td><td> <input type="radio" name="instantaneous" value="2"></td><td> <input type="radio" name="instantaneous" value="3"></td><td> <input type="radio" name="instantaneous" value="4"></td><td> <input type="radio" name="instantaneous" value="5"></td><td> <input type="radio" name="instantaneous" value="6"></td><td> <input type="radio" name="instantaneous" value="7"></td><td></td>',
        '<td class="header"><strong>' + algorithm + '</strong> was very slow in responding to my requests.</td><td> <input type="radio" name="slow" value="7"></td><td> <input type="radio" name="slow" value="6"></td><td> <input type="radio" name="slow" value="5"></td><td> <input type="radio" name="slow" value="4"></td><td> <input type="radio" name="slow" value="3"></td><td> <input type="radio" name="slow" value="2"></td><td> <input type="radio" name="slow" value="1"></td><td></td>'
    ]
    rows = shuffle(rows)
    for (var i = 0; i < 14; i++) {
        var row = table.insertRow(0)
        row.innerHTML = rows[i]
    }
    var row = table.insertRow(0)
    row.innerHTML =  '<td></td><td>Not at all</td><td></td><td></td><td>Neutral</td><td></td><td></td><td>Extremely well</td>'

    var url = window.location.href
    var firstTime = localStorage.getItem(url);
    var secondTime = localStorage.getItem(url+"2")
    if(!firstTime) {
        var progressCount = parseInt(localStorage.getItem("progressCount")) + 1
        localStorage.setItem("progressCount", progressCount.toString())
        localStorage.setItem(url, progressCount.toString());
    } else if (!secondTime) {
        var progressCount = parseInt(localStorage.getItem("progressCount")) + 1
        localStorage.setItem("progressCount", progressCount.toString())
        localStorage.setItem(url, progressCount.toString());
        localStorage.setItem(url+"2", progressCount.toString());
    }
    var progressCount = parseInt(localStorage.getItem(url))
    document.getElementById('completed').style.width = (progressCount * 20).toString() + "px"

    var button = document.getElementById('next')
    var mediums = [
        document.getElementsByName('control'),
        document.getElementsByName('no control'),
        document.getElementsByName('experiences'),
        document.getElementsByName('feedback'),
        document.getElementsByName('two-way'),
        document.getElementsByName('difficult'),
        document.getElementsByName('listen'),
        document.getElementsByName('encourage'),
        document.getElementsByName('opportunity'),
        document.getElementsByName('processed'),
        document.getElementsByName('fast'),
        document.getElementsByName('without any delay'),
        document.getElementsByName('instantaneous'),
        document.getElementsByName('slow')
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
                                fetch('/s1-4_submit', {
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
                        window.location = '/' + id + '/survey_5'; 
                    })
                    .catch(error => {
                        console.log(error)
                    })
            } else {
                return
            }
        } else {
            for (var i = 0; i < mediums.length; i++) {
                for (var j = 0, length = mediums[i].length; j < length; j++) {
                    if (mediums[i][j].checked) {
                        promises.push(
                            fetch('/s1-4_submit', {
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
                    window.location = '/' + id + '/survey_5';
                })
                .catch(error => {
                    console.log(error)
                })
        }
    })
}

function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }