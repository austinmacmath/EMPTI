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
    
    var button = document.getElementById('next')
    var mediums = [document.getElementsByName('Diary/journal'), document.getElementsByName('Academic or school paper'), document.getElementsByName('Letters or emails to relatives'), document.getElementsByName('Notes or text messages'), document.getElementsByName('Novel or stories'), document.getElementsByName('Emails for work purposes'), document.getElementsByName('Content for social media'), document.getElementsByName('Comments or reviews for books, products, etc.')]
    var promises = []
    button.addEventListener('click', function (event) {
        var str = window.location.pathname;
        var id = str.substring(
            str.indexOf("/") + 1,
            str.lastIndexOf("/")
        );
        var checkCount = 0;
        for (var i = 0; i < mediums.length; i++) {
            for (var j = 0, length = mediums[i].length; j < length; j++) { 
                if (mediums[i][j].checked) {
                    checkCount += 1;
                }
            }
        }
        if (checkCount != mediums.length) {
            alert("You haven't answered all of the questions. Please continue answering the questions or click the NEXT button to submit a partial answer and continue."); 
            return
        }
        for (var i = 0; i < mediums.length; i++) {
            for (var j = 0, length = mediums[i].length; j < length; j++) {
                if (mediums[i][j].checked) {
                    promises.push(
                        fetch('/q1_submit', {
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
            .then(result => {})
            .catch(error => {
                console.log(error)
            })
        window.location = '/' + id + '/questionnaire2';
    })
}