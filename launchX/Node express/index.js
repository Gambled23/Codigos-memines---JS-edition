let express = require("express");
let app = express();



//Create
app.post('/', function(req, res){
    res.send(`Te llamas ${req.body.name}`)
})

//Read
app.get('/', function(req, res){
    res.send('hola mundo');
})

//Update
app.put('/', function(req, res){
    res.send('Has actualizado el registro No' + req.body.id)
})

//Delete
app.delete('/users', function(req, res){
    res.send(`Has eliminado el registro No ${req.query.user}`)
})

let server = app.listen(8080, function(){ //Escucha el puerto 8080, y cuando lo escuches haz esto
    let host = server.address().address; //Obtiene la direccion
    let port = server.address().port; //Obtiene el puerto
    console.log(`Aplicacion escuchando en http://${host}:${port}`)
})