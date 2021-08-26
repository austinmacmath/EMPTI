window.onload = function () {
    var next = document.getElementById('next');
    if (next != null) {
        next.addEventListener('click', function (event) {
            var str = window.location.pathname;
            var id = str.substring(
                str.indexOf("/") + 1,
                str.lastIndexOf("/")
            );
            window.location = '/' + id + '/welcome1'
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
