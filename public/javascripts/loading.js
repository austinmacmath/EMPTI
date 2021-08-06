async function enable() {
    var start_tutorial = document.getElementById('start-tutorial');
    var loader = document.getElementById('loader');
    await new Promise(r => setTimeout(r, 5000));
    loader.style.borderColor = 'white';
    start_tutorial.disabled = false;
}

window.onload = function () {
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
                console.log('Success:', result.email);
                window.location = '/' + id + '/' + result.email;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    })
}