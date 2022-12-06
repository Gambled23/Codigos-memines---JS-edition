const express = require("express");
const app = express();
const path = require('path');
const router = express.Router();

//Como el post manda un json, debemos decirle a JS que va a leer json
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Hacer que node nos rediriga entre paginas de la navbar
router.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname + '/templates/index.html'))
})
router.get('/contacto', (req, res) =>{
    res.sendFile(path.join(__dirname + '/templates/contacto.html'))
})
router.get('/perfil', (req, res) =>{
    //res.sendFile(path.join(__dirname + '/templates/perfil.html'))
    res.sendFile(path.join(__dirname + '/templates/document.pdf')) //Se puede mostrar cualquier documento
})

router.post('/', (req, res) =>{
    // console.log(req.body); req.body es lo que se manda
    res.send(`El usuario ${req.body.first_name} ha sido registrado`)
})

app.use('/', router);
app.listen(process.env.port || 8080); //Process es una variable de entorno

console.log('Activo en el puerto 8080')