var Predictionary = require('predictionary');
window.onload = function() {
    // import Predictionary from 'predictionary'
    let predictionary = Predictionary.instance();
    predictionary.addWords(['apple', 'apricot', 'banana']);
    let suggestions = predictionary.predict('ap');
    document.getElementById('sample-text').innerText = suggestions;
}
