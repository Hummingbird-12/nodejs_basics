var http = require("http"); //include module named "http"

// create a server object
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); // display response as HTML (status code, object containing response headers)
    res.write("Hello World!"); // write a response to the client
    res.end(); // end the response
}).listen(3000); // the server object listens on port 3000
