// prevent backpaging
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
    
    var tutorialSend0 = document.getElementById('tt0');
    if (tutorialSend0 != null) {
        tutorialSend0.addEventListener('click', function (event) {
            var str = window.location.pathname;
            var id = str.substring(
                str.indexOf("/") + 1,
                str.lastIndexOf("/")
            );
            fetch('/t0_complete', {
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
                    if(result.t0_complete && result.t1_complete) {
                        window.location = '/' + id + '/' + result.email_id;
                    } else {
                        window.location = '/' + id + '/m1';
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        })
    }
}