window.onload = function() {
    // var button = document.getElementById('start');
    // button.addEventListener('click', function(event) {
    //     var str = window.location.pathname;
    //     var id = str.substring(
    //         str.indexOf("/") + 1 
    //         // str.lastIndexOf("/")
    //     );
    //     fetch('/start', {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({uid: id})
    //     })
    //     .then(response => response.json())
    //     .then(result => {
    //         console.log('Success:', result.email);
    //         window.location='/' + id + '/' + result.email;
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //     });
    // })

    var tutorialButton = document.getElementById('start-tutorial');
    tutorialButton.addEventListener('click', function(event) {
        var str = window.location.pathname;
        var id = str.substring(
            str.indexOf("/") + 1 
        ); 
        window.location='/' + id + '/t0';
    })
}