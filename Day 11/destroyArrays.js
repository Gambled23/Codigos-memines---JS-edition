let arreglo = [1,2,3]
let [numeroUno, numeroDos, numeroTres] = arreglo
console.log(numeroDos)
let [numUno, ,numDos] = arreglo //Si se usa un campo vacio, se salta ese campo del array
console.log(numDos)

//*Spread
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums //el spread (...) sirve para los numeros que quedan
console.log('\n', num1, num2, num3)
console.log(rest)

//*Usando objetos
let objeto = {
    largo: 15,
    ancho:12
}
let {largo, ancho} = objeto
console.log(ancho)

