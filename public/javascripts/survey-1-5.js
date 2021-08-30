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
        '<td class="header">Using <strong>' + algorithm + '</strong> enhanced my effectiveness in composing sentences and responding to emails.</td><td> <input type="radio" name="effectiveness" value="1"></td><td> <input type="radio" name="effectiveness" value="2"></td><td><input type="radio" name="effectiveness" value="3"></td><td> <input type="radio" name="effectiveness" value="4"></td><td> <input type="radio" name="effectiveness" value="5"></td><td> <input type="radio" name="effectiveness" value="6"></td><td> <input type="radio" name="effectiveness" value="7"></td><td> </td>',
        '<td class="header">Using <strong>' + algorithm + '</strong> made it easier for me to compose sentences and respond to emails.</td><td> <input type="radio" name="easier" value="1"></td><td> <input type="radio" name="easier" value="2"></td><td><input type="radio" name="easier" value="3"></td><td> <input type="radio" name="easier" value="4"></td><td> <input type="radio" name="easier" value="5"></td><td> <input type="radio" name="easier" value="6"></td><td> <input type="radio" name="easier" value="7"></td><td> </td>',
        '<td class="header">Using <strong>' + algorithm + '</strong> enabled me to compose sentences and respond to emails more quickly.</td><td> <input type="radio" name="compose" value="1"></td><td> <input type="radio" name="compose" value="2"></td><td><input type="radio" name="compose" value="3"></td><td> <input type="radio" name="compose" value="4"></td><td> <input type="radio" name="compose" value="5"></td><td> <input type="radio" name="compose" value="6"></td><td> <input type="radio" name="compose" value="7"></td><td> </td>',
        '<td class="header">Using <strong>' + algorithm + '</strong> increased my productivity of composing sentences and responding to emails. </td><td> <input type="radio" name="productivity" value="1"></td><td> <input type="radio" name="productivity" value="2"></td><td><input type="radio" name="productivity" value="3"></td><td> <input type="radio" name="productivity" value="4"></td><td> <input type="radio" name="productivity" value="5"></td><td> <input type="radio" name="productivity" value="6"></td><td> <input type="radio" name="productivity" value="7"></td><td> </td>',
        '<td class="header">Using <strong>' + algorithm + '</strong> improved my performance of composing sentences and responding to emails. </td><td> <input type="radio" name="performance" value="1"></td><td> <input type="radio" name="performance" value="2"></td><td><input type="radio" name="performance" value="3"></td><td> <input type="radio" name="performance" value="4"></td><td> <input type="radio" name="performance" value="5"></td><td> <input type="radio" name="performance" value="6"></td><td> <input type="radio" name="performance" value="7"></td><td> </td>',
        '<td class="header">Overall, <strong>' + algorithm + '</strong> was useful for me to compose sentences and respond to emails.</td><td> <input type="radio" name="useful" value="1"></td><td> <input type="radio" name="useful" value="2"></td><td><input type="radio" name="useful" value="3"></td><td> <input type="radio" name="useful" value="4"></td><td> <input type="radio" name="useful" value="5"></td><td> <input type="radio" name="useful" value="6"></td><td> <input type="radio" name="useful" value="7"></td><td> </td>'
    ]
    rows = shuffle(rows)
    for (var i = 0; i < 6; i++) {
        var row = table.insertRow(0)
        row.innerHTML = rows[i]
    }
    var row = table.insertRow(0)
    row.innerHTML =  '<td></td><td>Strongly disagree</td><td>Disagree</td><td>Somewhat agree</td><td>Neither disagree nor agree</td><td>Somewhat agree</td><td>Agree</td><td>Strongly agree</td>'

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
        document.getElementsByName('effectiveness'),
        document.getElementsByName('easier'),
        document.getElementsByName('compose'),
        document.getElementsByName('productivity'),
        document.getElementsByName('performance'),
        document.getElementsByName('useful')
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
                        fetch('/s1-5_submit', {
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
        window.location = '/' + id + '/s1-6';
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