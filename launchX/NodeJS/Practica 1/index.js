const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    fs.readFile('./html/demo.html', function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data) //La data es el archivo html
        return res.end();
    });
}).listen(8080);