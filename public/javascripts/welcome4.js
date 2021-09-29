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

    var next = document.getElementById('start-tutorial');
    var understand = document.getElementById('understand');
    if (next != null) {
        next.addEventListener('click', function (event) {
            if (!understand.checked) {
                alert("Please check the box to show you understand the instructions.");
                return
            }
            var str = window.location.pathname;
            var id = str.substring(
                str.indexOf("/") + 1,
                str.lastIndexOf("/")
            );
            // window.location = '/' + id + '/questionnaire1'
            fetch('/start', {
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
                    window.location = '/' + id + '/' + result.email;
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        })
    }
}