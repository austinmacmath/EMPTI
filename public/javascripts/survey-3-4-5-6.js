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
    var clarification = document.getElementById("clarification")
    button.addEventListener('click', function (event) {
        if(clarification.value == "") {
            if(confirm("You haven't answered all of the questions. Would you like to continue anyway?")) {
                var str = window.location.pathname;
                var id = str.substring(
                    str.indexOf("/") + 1,
                    str.lastIndexOf("/")
                );
                fetch('/s3-4-5-6_submit', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            uid: id,
                            devices: clarification.value
                        })
                    })
                    .then(result => {
                        window.location = '/' + id + '/s3-4-5'; 
                    })
                    .catch(error => {
                        console.log(error)
                    })
            } else {
                return
            }
        } else {
            var str = window.location.pathname;
            var id = str.substring(
                str.indexOf("/") + 1,
                str.lastIndexOf("/")
            );
            fetch('/s3-4-5-6_submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        uid: id,
                        devices: clarification.value
                    })
                })
                .then(result => {
                    window.location = '/' + id + '/s3-4-5';
                })
                .catch(error => {
                    console.log(error)
                })
        }
    })
}