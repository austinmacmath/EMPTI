async function enable() {
    var start_tutorial = document.getElementById('start-tutorial');
    var loader = document.getElementById('loader');
    await new Promise(r => setTimeout(r, 5000));
    loader.style.borderColor = 'white';
    start_tutorial.disabled = false;
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
    
    enable()
    var tutorialButton = document.getElementById('start-tutorial');
    tutorialButton.addEventListener('click', function (event) {
        var str = window.location.pathname;
        var id = str.substring(
            str.indexOf("/") + 1,
            str.lastIndexOf("/")
        );
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