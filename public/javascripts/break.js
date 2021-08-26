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
    button.addEventListener('click', function (event) {
        var str = window.location.pathname;
        var id = str.substring(
            str.indexOf("/") + 1,
            str.lastIndexOf("/")
        );
        fetch('/break_complete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    uid: id
                })
            })
            .then(response => response.json())
            .then(result => {
                if (result.synergy_first == '1') {
                    window.location = '/' + id + '/t0'
                } else {
                    window.location = '/' + id + '/t1'
                }
            })
    })
}

window.setTimeout(nextPage, 60000);
window.setInterval(timerUpdate, 1000);

function nextPage() {
    var str = window.location.pathname;
    var id = str.substring(
        str.indexOf("/") + 1,
        str.lastIndexOf("/")
    );
    fetch('/break_complete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            uid: id
        })
    })
    .then(response => response.json())
    .then(result => {
        if (result.synergy_first == '1') {
            window.location = '/' + id + '/t0'
        } else {
            window.location = '/' + id + '/t1'
        }
    }) 
}

var seconds = 60

function timerUpdate() {
    document.getElementById('minutes').textContent = 0;
    seconds -= 1;
    if(seconds < 0) {
        document.getElementById('seconds').textContent = '00';
    }
    else if(seconds < 10) {
        document.getElementById('seconds').textContent = '0' + seconds;
    } else {
        document.getElementById('seconds').textContent = seconds;
    }
}