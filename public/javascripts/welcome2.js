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

    var next = document.getElementById('next');
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
            window.location = '/' + id + '/welcome3'
        })
    }
}