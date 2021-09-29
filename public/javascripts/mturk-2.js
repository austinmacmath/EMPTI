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
    var str = window.location.pathname;
    var id = str.substring(
        str.indexOf("/") + 1,
        str.lastIndexOf("/")
    );
    document.getElementById('CODE').innerText = id
    
    var button = document.getElementById('next')
    button.addEventListener('click', function (event) {
        window.location = '/' + id + '/goodbye';
    })
}