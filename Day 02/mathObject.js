let PI = Math.PI
console.log(PI)
console.log(Math.round(PI)) //Redondear automaticamente
console.log(Math.floor(PI)) //Redondear hacia abajo
console.log(Math.ceil(PI)) //Redondear hacia arriba
console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, regresa el valor minimo
console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, regresa el valor maximo

let numeroRandom = Math.random() //Genera un numero entre 0 y 0.99999....
numeroRandom = Math.round(numeroRandom * 11)
console.log('\nNumero random entero entre 0 y 10: ' + numeroRandom)