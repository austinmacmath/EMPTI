console.log('Client-side code running!');

window.onload = function() {
    var button = document.getElementById('send');
    button.addEventListener('click', function(event) {
        var str = window.location.pathname;
        var id = str.substring(
            str.indexOf("/") + 1, 
            str.lastIndexOf("/")
        );
        var email = str.substring(
            str.lastIndexOf("/") + 1
        );
        var response = document.getElementById('email').value;
        fetch('/send', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({message: response, uid: id, email_id: email})
        })
        .then(function(response) {
            if(response.ok) {
                console.log('Send!');
                return;
            }
            throw new Error('Send request failed.');
        })
        .catch(function(error) {
            console.log(error);
        });
        window.location='/' + id + '/' + (Math.floor(Math.random() * 10) + 1);
    });

    var email = document.getElementById('email');
    email.addEventListener('keydown', function(event) {
        if(event.key == 'Tab') {
            event.preventDefault();
            fetch('/tab', {method: 'POST'})
            .then(function(response) {
                if(response.ok) {
                    console.log('Tab!');
                    return;
                }
                throw new Error('Tab request failed.');
            })
            .catch(function(error) {
                console.log(error);
            });
        }
    });
}
