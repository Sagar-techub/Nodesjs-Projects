var http = require('http');
#It creates a server connection request
http.createServer(function (req, res) {
  // add a HTTP header:
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Follow ME On Github');
  res.end();
}).listen(8080);

