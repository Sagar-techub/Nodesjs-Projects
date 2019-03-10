var http = require('http');
var fs = require('fs');
http.createServer(function (req,res){
fs.readFile('anyfile.html', function(err, data){
res.WriteHead(200,{'Content-Type':'text/html'});
res.Write(data);
return res.end();
});
}).listen(8000);

