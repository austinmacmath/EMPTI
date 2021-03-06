window.onload = function () {
    var next = document.getElementById('next');
    if (next != null) {
        next.addEventListener('click', function (event) {
            fetch('/new_uid', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                window.location = '/' + result.uid + '/welcome_1'
            })
            .catch(error => {
                console.log(error)
            })
        })
    }
}

var url = window.location.href
var firstTime = localStorage.getItem(url);
localStorage.setItem("progressCount", "0")
if(!firstTime) {
    localStorage.setItem(url, "1");
}

console.log("Progress Count: " + localStorage.getItem("progressCount"))
