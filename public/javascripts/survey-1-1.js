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
        '<td>Incompetent</td><td> <input type="radio" name="competent" value="1"></td><td> <input type="radio" name="competent" value="2"></td><td> <input type="radio" name="competent" value="3"></td><td> <input type="radio" name="competent" value="4"></td><td> <input type="radio" name="competent" value="5"></td><td> <input type="radio" name="competent" value="6"></td><td> <input type="radio" name="competent" value="7"></td><td>Competent</td>',
        '<td>Nonexpert </td><td> <input type="radio" name="expert" value="1"></td><td> <input type="radio" name="expert" value="2"></td><td> <input type="radio" name="expert" value="3"></td><td> <input type="radio" name="expert" value="4"></td><td> <input type="radio" name="expert" value="5"></td><td> <input type="radio" name="expert" value="6"></td><td> <input type="radio" name="expert" value="7"></td><td>Expert</td>',
        '<td>Untrustworthy </td><td> <input type="radio" name="trustworthy" value="1"></td><td> <input type="radio" name="trustworthy" value="2"></td><td> <input type="radio" name="trustworthy" value="3"></td><td> <input type="radio" name="trustworthy" value="4"></td><td> <input type="radio" name="trustworthy" value="5"></td><td> <input type="radio" name="trustworthy" value="6"></td><td> <input type="radio" name="trustworthy" value="7"></td><td>Trustworthy</td>',
        '<td>Nontransparent </td><td> <input type="radio" name="transparent" value="1"></td><td> <input type="radio" name="transparent" value="2"></td><td> <input type="radio" name="transparent" value="3"></td><td> <input type="radio" name="transparent" value="4"></td><td> <input type="radio" name="transparent" value="5"></td><td> <input type="radio" name="transparent" value="6"></td><td> <input type="radio" name="transparent" value="7"></td><td>Transparent </td>',
        '<td>Unfair </td><td> <input type="radio" name="fair" value="1"></td><td> <input type="radio" name="fair" value="2"></td><td> <input type="radio" name="fair" value="3"></td><td> <input type="radio" name="fair" value="4"></td><td> <input type="radio" name="fair" value="5"></td><td> <input type="radio" name="fair" value="6"></td><td> <input type="radio" name="fair" value="7"></td><td>Fair</td>',
        '<td>Malevolent </td><td> <input type="radio" name="benevolent" value="1"></td><td> <input type="radio" name="benevolent" value="2"></td><td> <input type="radio" name="benevolent" value="3"></td><td> <input type="radio" name="benevolent" value="4"></td><td> <input type="radio" name="benevolent" value="5"></td><td> <input type="radio" name="benevolent" value="6"></td><td> <input type="radio" name="benevolent" value="7"></td><td>Benevolent</td>',
        '<td>Noncredible </td><td> <input type="radio" name="credible" value="1"></td><td> <input type="radio" name="credible" value="2"></td><td> <input type="radio" name="credible" value="3"></td><td> <input type="radio" name="credible" value="4"></td><td> <input type="radio" name="credible" value="5"></td><td> <input type="radio" name="credible" value="6"></td><td> <input type="radio" name="credible" value="7"></td><td>Credible</td>',
        '<td>Unbiased</td><td> <input type="radio" name="biased" value="7"></td><td> <input type="radio" name="biased" value="6"></td><td> <input type="radio" name="biased" value="5"></td><td> <input type="radio" name="biased" value="4"></td><td> <input type="radio" name="biased" value="3"></td><td> <input type="radio" name="biased" value="2"></td><td> <input type="radio" name="biased" value="1"></td><td>Biased</td>'
    ]
    rows = shuffle(rows)
    for (var i = 0; i < 8; i++) {
        var row = table.insertRow(0)
        row.innerHTML = rows[i]
    }

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
        document.getElementsByName('competent'),
        document.getElementsByName('expert'),
        document.getElementsByName('trustworthy'),
        document.getElementsByName('transparent'),
        document.getElementsByName('fair'),
        document.getElementsByName('benevolent'),
        document.getElementsByName('credible'),
        document.getElementsByName('biased')
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
                                fetch('/s1-1_submit', {
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
                window.location = '/' + id + '/s1-2'; 
            } else {
                return
            }
        } else {
            for (var i = 0; i < mediums.length; i++) {
                for (var j = 0, length = mediums[i].length; j < length; j++) {
                    if (mediums[i][j].checked) {
                        promises.push(
                            fetch('/s1-1_submit', {
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
            window.location = '/' + id + '/s1-2';
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