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
        '<td class="header">Algorithms are used to recommend suggestions to me on Gmail.</td><td> <input type="radio" name="recommend" value="1"></td><td> <input type="radio" name="recommend" value="2"></td><td> <input type="radio" name="recommend" value="3"></td><td> <input type="radio" name="recommend" value="4"></td><td> <input type="radio" name="recommend" value="5"></td><td> <input type="radio" name="recommend" value="6"></td><td> <input type="radio" name="recommend" value="7"></td><td></td>',
        '<td class="header">Algorithms are used to prioritize certain suggestions above others.</td><td> <input type="radio" name="prioritize" value="1"></td><td> <input type="radio" name="prioritize" value="2"></td><td> <input type="radio" name="prioritize" value="3"></td><td> <input type="radio" name="prioritize" value="4"></td><td> <input type="radio" name="prioritize" value="5"></td><td> <input type="radio" name="prioritize" value="6"></td><td> <input type="radio" name="prioritize" value="7"></td><td></td>',
        '<td class="header">Algorithms are used to tailor certain suggestions to me on Gmail.</td><td> <input type="radio" name="tailor" value="1"></td><td> <input type="radio" name="tailor" value="2"></td><td> <input type="radio" name="tailor" value="3"></td><td> <input type="radio" name="tailor" value="4"></td><td> <input type="radio" name="tailor" value="5"></td><td> <input type="radio" name="tailor" value="6"></td><td> <input type="radio" name="tailor" value="7"></td><td></td>',
        '<td class="header">Algorithms are used to show someone else different suggestions than I get to see on Gmail. </td><td> <input type="radio" name="show" value="1"></td><td> <input type="radio" name="show" value="2"></td><td> <input type="radio" name="show" value="3"></td><td> <input type="radio" name="show" value="4"></td><td> <input type="radio" name="show" value="5"></td><td> <input type="radio" name="show" value="6"></td><td> <input type="radio" name="show" value="7"></td><td></td>',
        '<td class="header">Algorithms are used to show me suggestions on Gmail based on automated decisions. </td><td> <input type="radio" name="suggest" value="1"></td><td> <input type="radio" name="suggest" value="2"></td><td> <input type="radio" name="suggest" value="3"></td><td> <input type="radio" name="suggest" value="4"></td><td> <input type="radio" name="suggest" value="5"></td><td> <input type="radio" name="suggest" value="6"></td><td> <input type="radio" name="suggest" value="7"></td><td></td>',
        '<td class="header">Algorithms do not require human judgments in deciding which suggestions to show me on Gmail.</td><td> <input type="radio" name="human" value="1"></td><td> <input type="radio" name="human" value="2"></td><td> <input type="radio" name="human" value="3"></td><td> <input type="radio" name="human" value="4"></td><td> <input type="radio" name="human" value="5"></td><td> <input type="radio" name="human" value="6"></td><td> <input type="radio" name="human" value="7"></td><td></td>',
        '<td class="header">Algorithms make automated decisions on what suggestions I get to see on Gmail.</td><td> <input type="radio" name="automated" value="1"></td><td> <input type="radio" name="automated" value="2"></td><td> <input type="radio" name="automated" value="3"></td><td> <input type="radio" name="automated" value="4"></td><td> <input type="radio" name="automated" value="5"></td><td> <input type="radio" name="automated" value="6"></td><td> <input type="radio" name="automated" value="7"></td><td></td>',
        '<td class="header">The suggestions that algorithms recommend to me on Gmail depend on my online behavior on that platform.</td><td> <input type="radio" name="platform" value="1"></td><td> <input type="radio" name="platform" value="2"></td><td> <input type="radio" name="platform" value="3"></td><td> <input type="radio" name="platform" value="4"></td><td> <input type="radio" name="platform" value="5"></td><td> <input type="radio" name="platform" value="6"></td><td> <input type="radio" name="platform" value="7"></td><td></td>',
        '<td class="header">The suggestions that algorithms recommend to me on Gmail depend on my online behavioral data.</td><td> <input type="radio" name="data" value="1"></td><td> <input type="radio" name="data" value="2"></td><td> <input type="radio" name="data" value="3"></td><td> <input type="radio" name="data" value="4"></td><td> <input type="radio" name="data" value="5"></td><td> <input type="radio" name="data" value="6"></td><td> <input type="radio" name="data" value="7"></td><td></td>',
        '<td class="header">The suggestions that algorithms recommend to me on Gmail depend on the data that I make available online.</td><td> <input type="radio" name="online" value="1"></td><td> <input type="radio" name="online" value="2"></td><td> <input type="radio" name="online" value="3"></td><td> <input type="radio" name="online" value="4"></td><td> <input type="radio" name="online" value="5"></td><td> <input type="radio" name="online" value="6"></td><td> <input type="radio" name="online" value="7"></td><td></td>',
        '<td class="header">It is not always transparent why algorithms decide to show me certain suggestions on Gmail. </td><td> <input type="radio" name="transparent" value="1"></td><td> <input type="radio" name="transparent" value="2"></td><td> <input type="radio" name="transparent" value="3"></td><td> <input type="radio" name="transparent" value="4"></td><td> <input type="radio" name="transparent" value="5"></td><td> <input type="radio" name="transparent" value="6"></td><td> <input type="radio" name="transparent" value="7"></td><td></td>',
        '<td class="header">The suggestions that algorithms recommend to me on Gmail can be subjected to human biases such as prejudices and stereotypes. </td><td> <input type="radio" name="prejudice" value="1"></td><td> <input type="radio" name="prejudice" value="2"></td><td> <input type="radio" name="prejudice" value="3"></td><td> <input type="radio" name="prejudice" value="4"></td><td> <input type="radio" name="prejudice" value="5"></td><td> <input type="radio" name="prejudice" value="6"></td><td> <input type="radio" name="prejudice" value="7"></td><td></td>',
        '<td class="header">Algorithms use my personal data to recommend certain suggestions on Gmail, and this has consequences for my online privacy. </td><td> <input type="radio" name="consequence" value="1"></td><td> <input type="radio" name="consequence" value="2"></td><td> <input type="radio" name="consequence" value="3"></td><td> <input type="radio" name="consequence" value="4"></td><td> <input type="radio" name="consequence" value="5"></td><td> <input type="radio" name="consequence" value="6"></td><td> <input type="radio" name="consequence" value="7"></td><td></td>'
    ]
    rows = shuffle(rows)
    for (var i = 0; i < 13; i++) {
        var row = table.insertRow(0)
        row.innerHTML = rows[i]
    }
    var row = table.insertRow(0)
    row.innerHTML =  '<td></td><td>Completely unaware</td><td>Unaware</td><td>Somewhat unaware</td><td>Neither unaware nor aware </td><td>Somewhat aware</td><td>Aware </td><td>Completely aware</td>'

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
        document.getElementsByName('recommend'),
        document.getElementsByName('prioritize'),
        document.getElementsByName('tailor'),
        document.getElementsByName('show'),
        document.getElementsByName('suggest'),
        document.getElementsByName('human'),
        document.getElementsByName('automated'),
        document.getElementsByName('platform'),
        document.getElementsByName('data'),
        document.getElementsByName('online'),
        document.getElementsByName('transparent'),
        document.getElementsByName('prejudice'),
        document.getElementsByName('consequence')
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
                        fetch('/s3-1_submit', {
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
        window.location = '/' + id + '/s3-2';
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