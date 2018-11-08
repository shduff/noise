  /* Load the HTTP library */
  var http = require("http");
  var fs = require('fs');

  /* Create an HTTP server to handle responses */

  http.createServer(function(request, response) {
  	fs.readFile('index.html',function (err, data){
    	response.writeHead(200, {"Content-Type": "text/html",'Content-Length':data.length});
    	response.write(data);
    	response.end();
    });
  }).listen(8888);