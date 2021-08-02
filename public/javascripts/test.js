window.onload = function() {
    var _typingIndicator = document.querySelector('.typing'),
        _input = document.querySelector('#message-input'),
        idleTime = 400,
        idleTimer = null,
        inputValue,
        indicatorState = {
            active : 'is-typing-active',
            init : 'is-typing-init'
        };
    
    function showIndicator(){
        console.log("showIndicator")
        _typingIndicator.classList.add(indicatorState.init);
    }
    
    function activateIndicator(el){
        _typingIndicator.classList.add(indicatorState.active);
        inputValue = el.value;
        detectIdle(el);
    }
    
    function removeIndicator(){
        console.log("removeIndicator")
        _typingIndicator.classList.remove(indicatorState.init, indicatorState.active);
    }
    
    function detectIdle(el){
        if (idleTimer) {
            clearInterval(idleTimer);
        }
        
        idleTimer = setTimeout(function(){
            if (getInputCurrentValue(el) === inputValue) {
                _typingIndicator.classList.remove(indicatorState.active);
            }
        }, idleTime);
    }
    
    function getInputCurrentValue(el){
        var currentValue = el.value;
        return currentValue;
    }
    
    function initTypingIndicator() {
        console.log("initTypingIndicator")
        _input.onfocus = function(){
            showIndicator();
        };
    
        _input.onkeyup = function() {
            activateIndicator(this);
        };
    
        _input.onblur = function(){
            removeIndicator();
        };
    }
    
    initTypingIndicator();
}
