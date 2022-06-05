//*For each
const numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.forEach(num => console.log(num))

//*Map modifica los elementos mientras los va recorriendo
const numbers2 = [1, 2, 3, 4, 5]
const numbersSquare = numbers2.map((num) => num * num)
console.log(numbersSquare)

//*Filter filtra items que pasen cierto criterio y regresa un nuevo arreglo
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]
const countriesContainingLand = countries.filter((country) => //Guarda en countriesContainingLand los paises con land
    country.includes('land')
)
console.log(countriesContainingLand)

//*Reduce
const numbers3 = [1, 2, 3, 4, 5, 6]
const sum = numbers3.reduce((acc, cur) => acc + cur, 0)
console.log(sum)

//*Every revisa si todos los elementos son similares en un aspecto, regresa booleano
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?
//Podemos usar some para que no sean todos, si no solo algunos
console.log('Los elementos son strings?: ' + areAllStr)

//*Find regresa el 1er elemento que encuentre segun los criterios
const ages = [24, 22, 19, 32, 35, 18]
const age = ages.find((age) => age < 20) //Regresa el primer elemento menor a 20
//Podemos usar findIndex y regresa la posicion en la q se encuentra el elemento
console.log(age)

//*Sort
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort())
//Solo sortea strings, para sortear numeros se hace lo siguiente
const numbers4 = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(numbers4.sort()) //[100, 3.14, 37, 9.81]
numbers4.sort(function (a, b) {
    return a - b
})
console.log(numbers4) // [3.14, 9.81, 37, 100]

numbers4.sort(function (a, b) {
    return b - a
})
console.log(numbers4) //[100, 37, 9.81, 3.14]
