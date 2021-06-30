window.onload = function() {
    var tutorialButton = document.getElementById('start-tutorial');
    tutorialButton.addEventListener('click', function(event) {
        var str = window.location.pathname;
        var id = str.substring(
            str.indexOf("/") + 1 
        ); 
        window.location='/' + id + '/t0';
    })
}