console.log('Client-side code running!');

window.onload = function() {
    var button = document.getElementById('send');
    button.addEventListener('click', function(event) {
        fetch('/send', {method: 'POST'})
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
                })
        }
    })
}
