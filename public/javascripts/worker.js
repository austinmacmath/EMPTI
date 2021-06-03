onmessage = function(e) {
    postMessage('FROM WORKER: ' + e.data);
};