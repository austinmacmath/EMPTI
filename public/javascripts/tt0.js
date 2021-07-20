// prevent backpaging
if (window.history && history.pushState) {
    addEventListener('load', function() {
        history.pushState(null, null, null); // creates new history entry with same URL
        addEventListener('popstate', function() {
            alert("Please do not return to the previous page.");
            history.pushState(null, null, null);
        });    
    });
}

window.onload = function() {
    var tutorialSend0 = document.getElementById('tt0');
    if(tutorialSend0 != null) {
        tutorialSend0.addEventListener('click', function(event) {
            var str = window.location.pathname;
            var id = str.substring(
                str.indexOf("/") + 1, 
                str.lastIndexOf("/")
            );
            fetch('/t0_complete', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({uid: id})
            })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result.email_id);
                window.location='/' + id + '/' + result.email_id;
            })
            .catch(error => {
                console.error('Error:', error);
            });
        })
    }
}