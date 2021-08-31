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
        '<td class="header"><strong>' + algorithm + '</strong> reflected who I am. </td><td> <input type="radio" name="reflect" value="1"></td><td> <input type="radio" name="reflect" value="2"></td><td> <input type="radio" name="reflect" value="3"></td><td> <input type="radio" name="reflect" value="4"></td><td> <input type="radio" name="reflect" value="5"></td><td> <input type="radio" name="reflect" value="6"></td><td> <input type="radio" name="reflect" value="7"></td><td></td>',
        '<td class="header">I could identify with <strong>' + algorithm + '</strong>. </td><td> <input type="radio" name="identify" value="1"></td><td> <input type="radio" name="identify" value="2"></td><td> <input type="radio" name="identify" value="3"></td><td> <input type="radio" name="identify" value="4"></td><td> <input type="radio" name="identify" value="5"></td><td> <input type="radio" name="identify" value="6"></td><td> <input type="radio" name="identify" value="7"></td><td></td>',
        '<td class="header">I felt a personal connection to <strong>' + algorithm + '</strong>. </td><td> <input type="radio" name="connect" value="1"></td><td> <input type="radio" name="connect" value="2"></td><td> <input type="radio" name="connect" value="3"></td><td> <input type="radio" name="connect" value="4"></td><td> <input type="radio" name="connect" value="5"></td><td> <input type="radio" name="connect" value="6"></td><td> <input type="radio" name="connect" value="7"></td><td></td>',
        '<td class="header">I could use <strong>' + algorithm + '</strong> to communicate who I am to other people. </td><td> <input type="radio" name="communicate" value="1"></td><td> <input type="radio" name="communicate" value="2"></td><td> <input type="radio" name="communicate" value="3"></td><td> <input type="radio" name="communicate" value="4"></td><td> <input type="radio" name="communicate" value="5"></td><td> <input type="radio" name="communicate" value="6"></td><td> <input type="radio" name="communicate" value="7"></td><td></td>',
        '<td class="header">I think <strong>' + algorithm + '</strong> helped me become the type of person I wanted to be. </td><td> <input type="radio" name="become" value="1"></td><td> <input type="radio" name="become" value="2"></td><td> <input type="radio" name="become" value="3"></td><td> <input type="radio" name="become" value="4"></td><td> <input type="radio" name="become" value="5"></td><td> <input type="radio" name="become" value="6"></td><td> <input type="radio" name="become" value="7"></td><td></td>',
        '<td class="header">I considered <strong>' + algorithm + '</strong> to be "me" (it reflected who I consider myself to be or the way that I wanted to present myself to others).</td><td> <input type="radio" name="me" value="1"></td><td> <input type="radio" name="me" value="2"></td><td> <input type="radio" name="me" value="3"></td><td> <input type="radio" name="me" value="4"></td><td> <input type="radio" name="me" value="5"></td><td> <input type="radio" name="me" value="6"></td><td> <input type="radio" name="me" value="7"></td><td></td>',
        '<td class="header"><strong>' + algorithm + '</strong> suited me well. </td><td> <input type="radio" name="suit" value="1"></td><td> <input type="radio" name="suit" value="2"></td><td> <input type="radio" name="suit" value="3"></td><td> <input type="radio" name="suit" value="4"></td><td> <input type="radio" name="suit" value="5"></td><td> <input type="radio" name="suit" value="6"></td><td> <input type="radio" name="suit" value="7"></td><td></td>'
    ]
    rows = shuffle(rows)
    for (var i = 0; i < 7; i++) {
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
        document.getElementsByName('reflect'),
        document.getElementsByName('identify'),
        document.getElementsByName('connect'),
        document.getElementsByName('communicate'),
        document.getElementsByName('become'),
        document.getElementsByName('me'),
        document.getElementsByName('suit'),
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
                                fetch('/s1-3_submit', {
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
                window.location = '/' + id + '/s1-4'; 
            } else {
                return
            }
        } else {
            for (var i = 0; i < mediums.length; i++) {
                for (var j = 0, length = mediums[i].length; j < length; j++) {
                    if (mediums[i][j].checked) {
                        promises.push(
                            fetch('/s1-3_submit', {
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
            window.location = '/' + id + '/s1-4';
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