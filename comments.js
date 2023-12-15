// Create a web server
// run it with node comments.js
// then go to localhost:3000/comments.html

var http = require('http');
var fs = require('fs');

// create a server object:
http.createServer(function (req, res) {
  // read the file
  fs.readFile('comments.html', function(err, data) {
    // set content type
    res.writeHead(200, {'Content-Type': 'text/html'});
    // write the content of the file to response body
    res.write(data);
    // send the response body
    res.end();
  });
}).listen(3000); //the server object listens on port 3000

console.log('Server running at http://localhost:3000/comments.html');