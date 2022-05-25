function sumAllNums() {
    console.log(arguments)
    let resultado = 0
    for (let index = 0; index < arguments.length; index++) {
        resultado += arguments[index]
    }
    return resultado
}
let resultado = sumAllNums(1, 2, 3, 4, 9)
console.log(resultado)
/*arguments pasa como un array de todos los argumentos que se le hayan enviado a la funcion*/
