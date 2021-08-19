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
    var button = document.getElementById('next')
    var count = document.getElementById("count")
    button.addEventListener('click', function (event) {
        var str = window.location.pathname;
        var id = str.substring(
            str.indexOf("/") + 1,
            str.lastIndexOf("/")
            );
        fetch('/s3-4_submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uid: id,
                devices: count.value
            })
        })
        .then(result => {
            console.log("s3-4_submit success")
        })
        .catch(error => {
            console.log(error)
        })
        window.location = '/' + id + '/s3-5';
    })
}