//Usando setTimeout
function leerCarta(carta, callback) {
    return setTimeout(function () {
        callback(carta.split("").reverse().join(""));
    }, 2000)
}

function construirJuguete(instruccion, callback) {
    return setTimeout(function () {
        const juguete = instruccion.split("").reverse().join("");
        if(juguete.includes("madera"))
            return callback(`${juguete} de madera fina`);
        else if(juguete.includes('xbox'))
            return callback(`No te puedo mandar tu ${juguete}`);
        else
            return callback (`Aquí tienes tu ${juguete}`);

        callback(juguete);
    }, 5000)
}

function envolverRegalo(juguete, callback){
    return setTimeout(() => {
        callback(`${juguete} envuelto`);
    }, 3000);
}

/*Callback hell, tiempos de espera más grandes
leerCarta('carrito de madera', (instruccion) => {
    construirJuguete(instruccion, (juguete) => {
        envolverRegalo(juguete, console.log);
    })
})*/

//Modularizar las llamadas
//Hacer funciones aparte para las llanadas
function construirC(juguete) {
    envolverRegalo(juguete, console.log);
}

function leerC(instruccion) {
    construirJuguete(instruccion, construirC);
}

leerCarta('carrito de madera', leerC);