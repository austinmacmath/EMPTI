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
    var button = document.getElementById('next')
    var mediums = [
        document.getElementsByName('recommend'),
        document.getElementsByName('prioritize'),
        document.getElementsByName('tailor'),
        document.getElementsByName('show'),
        document.getElementsByName('suggest'),
        document.getElementsByName('human'),
        document.getElementsByName('automated'),
        document.getElementsByName('platform'),
        document.getElementsByName('data'),
        document.getElementsByName('online'),
        document.getElementsByName('transparent'),
        document.getElementsByName('prejudice'),
        document.getElementsByName('consequence')
    ]
    var promises = []
    button.addEventListener('click', function (event) {
        var str = window.location.pathname;
        var id = str.substring(
            str.indexOf("/") + 1,
            str.lastIndexOf("/")
        );
        for (var i = 0; i < mediums.length; i++) {
            for (var j = 0, length = mediums[i].length; j < length; j++) {
                if (mediums[i][j].checked) {
                    console.log(mediums[i][j].name + ": " + mediums[i][j].value);
                    promises.push(
                        fetch('/s3-1_submit', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                uid: id,
                                medium: mediums[i][j].name,
                                frequency: mediums[i][j].value
                            })
                        })
                    )
                    break;
                }
            }
        }
        Promise.all(promises)
            .then(result => {
                console.log("s3-1_submit success")
            })
            .catch(error => {
                console.log(error)
            })
        window.location = '/' + id + '/s3-2';
    })
}