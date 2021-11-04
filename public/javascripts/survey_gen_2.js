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
    var rows = [
        '<td class="header">Compared with humans, algorithms have no intentions. </td><td> <input type="radio" name="intention" value="1"></td><td> <input type="radio" name="intention" value="2"></td><td> <input type="radio" name="intention" value="3"></td><td> <input type="radio" name="intention" value="4"></td><td> <input type="radio" name="intention" value="5"></td><td> <input type="radio" name="intention" value="6"></td><td> <input type="radio" name="intention" value="7"></td><td></td>',
        '<td class="header">Compared with humans, algorithms are more objective. </td><td> <input type="radio" name="objective" value="1"></td><td> <input type="radio" name="objective" value="2"></td><td> <input type="radio" name="objective" value="3"></td><td> <input type="radio" name="objective" value="4"></td><td> <input type="radio" name="objective" value="5"></td><td> <input type="radio" name="objective" value="6"></td><td> <input type="radio" name="objective" value="7"></td><td></td>',
        '<td class="header">Compared with humans, algorithms have no bias.</td><td> <input type="radio" name="bias" value="1"></td><td> <input type="radio" name="bias" value="2"></td><td> <input type="radio" name="bias" value="3"></td><td> <input type="radio" name="bias" value="4"></td><td> <input type="radio" name="bias" value="5"></td><td> <input type="radio" name="bias" value="6"></td><td> <input type="radio" name="bias" value="7"></td><td></td>'
    ]
    rows = shuffle(rows)
    for (var i = 0; i < 3; i++) {
        var row = table.insertRow(0)
        row.innerHTML = rows[i]
    }
    var row = table.insertRow(0)
    row.innerHTML = '<td></td><td>Strongly disagree </td><td>Disagree</td><td>Somewhat disagree</td><td>Neither disagree nor agree</td><td>Somewhat agree</td><td>Agree</td><td>Strongly agree</td>' 

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
        document.getElementsByName('intention'),
        document.getElementsByName('objective'),
        document.getElementsByName('bias')
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
                                fetch('/s3-2_submit', {
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
                        window.location = '/' + id + '/survey_gen_3'; 
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
                            fetch('/s3-2_submit', {
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
                    window.location = '/' + id + '/survey_gen_3';
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