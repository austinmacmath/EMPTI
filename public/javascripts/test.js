window.onload = function() {
    var s1 = document.getElementById('textarea');
    var s2 = document.getElementById('predictions');
    
    function select_scroll_1(e) { 
        s2.scrollTop = s1.scrollTop; 
        console.log(s1.scrollTop);
        console.log(s2.scrollTop);
    }
    
    s1.addEventListener('scroll', select_scroll_1, false);
}
