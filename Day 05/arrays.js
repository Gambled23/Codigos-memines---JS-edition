let arregloVacio = [] //Arreglo vacio
let arregloNumeros = [4, 5, 2, 7, 1]
console.log(`Tamaño del arreglo: ${arregloNumeros.length}`)
console.log(`El index de 1 es`, arregloNumeros.indexOf(1))

//Verificar si un elemento existe en un arreglo
let arregloCadenas = ['Platano', 'Manzana', 'Pera', 'Espinaca', 'Pure', 'Papa', 'Zanahoria', 'Pepino', 'Sandia']
let index = arregloCadenas.indexOf('Zanahoria')
if (index == -1) {
    console.log('La fruta no existe en el arreglo')
} else {
    console.log('La fruta SI existe en el arrreglo')
}

//Convertir array a string
let stringConvertida = arregloNumeros.toString()
console.log(stringConvertida)

//popear y pushear
arregloNumeros.pop() //Lo saca del final del arreglo
arregloNumeros.pop()
arregloNumeros.push(12) //Lo agrega al final del arreglo
arregloNumeros.unshift(8) //Lo agrega al inicio del arreglo
console.log(arregloNumeros.toString())

//Revertir arreglo
arregloNumeros.reverse()
console.log(arregloNumeros.toString())

//Ordenar de forma ascendente
arregloNumeros.sort()
console.log(arregloNumeros.toString())

//Arreglo de arreglos
let arregloDeArreglos = [[1,2,3], [4,5,6]]
console.log(arregloDeArreglos[1])
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length)  // 2
console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]