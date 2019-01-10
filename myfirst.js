var http = require("http"); //include module named "http"

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end("Hello World!");
}).listen(3000);
