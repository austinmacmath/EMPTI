const tf = require("@tensorflow/tfjs");

async function predict() {
    const model = await tf.loadLayersModel('http://localhost:3000/models/model.json');
    // const model = await tf.loadLayersModel('file://models/model.json');
    const prediction = model.predict([tf.tensor(["thank you"]), tf.tensor(["for"])]);
    return prediction;
    // console.log(prediction);
    
    // console.log("hello from worker.js");
}

predict()
.then(response => {
    console.log(response);
})
.catch(error => {
    console.log(error);
});

onmessage = function(e) {
    postMessage('FROM WORKER: ' + e.data);
};