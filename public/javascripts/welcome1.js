window.onload = function () {
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