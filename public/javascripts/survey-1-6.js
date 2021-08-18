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
    button.addEventListener('click', function (event) {
        var str = window.location.pathname;
        var id = str.substring(
            str.indexOf("/") + 1,
            str.lastIndexOf("/")
        );
        fetch('/tutorial_complete', {
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
                window.location = '/' + id + '/s3'
            } else {
                window.location = '/' + id + '/break'
            }
        })
        .catch(function (error) {
            console.log(error)
        })
    })
}