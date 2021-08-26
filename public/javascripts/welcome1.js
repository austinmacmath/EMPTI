var url = window.location.href
var firstTime = localStorage.getItem(url);
if(!firstTime) {
    var progressCount = parseInt(localStorage.getItem("progressCount")) + 1
    localStorage.setItem("progressCount", progressCount.toString())
    localStorage.setItem(url, progressCount.toString());
}
console.log("Progress Count: " + localStorage.getItem("progressCount"))

window.onload = function () {
    var progressCount = parseInt(localStorage.getItem(url))
    document.getElementById('completed').style.width = (progressCount * 20).toString() + "px"
    
    var next = document.getElementById('next');
    if (next != null) {
        next.addEventListener('click', function (event) {
            var str = window.location.pathname;
            var id = str.substring(
                str.indexOf("/") + 1,
                str.lastIndexOf("/")
            );
            window.location = '/' + id + '/welcome2'
        })
    }
}