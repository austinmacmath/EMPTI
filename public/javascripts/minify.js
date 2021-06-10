var minifyStream = require('minify-stream')

fs.createReadStream('browser-worker1.js').pipe(minifyStream()).pipe(fs.createWriteStream('browser-worker-min.js'));