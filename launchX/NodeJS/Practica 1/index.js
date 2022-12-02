let http = require('http'); //Obtener http
const rd = require('./modules/retrievedate');
const url = require('url'); //Obtener URL
//console.log(http);

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('La fecha y hora es: ' + rd.RetrieveDate());
    const query = url.parse(req.url, true).query;
    const text = query.year + ' ' + query.month;

    res.end('Hola mundo'); //El end es neceario para decir cuando acaba
}).listen(8080)