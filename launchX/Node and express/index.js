http = require('http');

console.log('1- salu2') //Proceso en el hilo principal
http.get('http://httpstat.us/200', (res) =>{
    console.log(`2- La api devolvió: ${res.statusCode}`); 
    //Lo imprime al final, porque el get está esperando una respuesta
});
console.log('3- adios')
/*
setTimeout(function(){
    console.log('Gracias por esperarme')
}, 2000)
*/