var fs = require('fs');
var express = require('express');

var buf = new Buffer(256); 
buf = fs.readFileSync('index.html');
console.log(buf.toString('utf8'));

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buf.toString('utf8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
