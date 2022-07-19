let cadenaUno = 'Mi nombre es '
let pabloCadena = 'Pablo'
let cadenaCompleta = cadenaUno + pabloCadena + ' mucho gusto'
console.log(cadenaCompleta)

//Si la cadena es muy larga, podemos usar el \ para decir que continua en la siguiente linea
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log('\n' + paragraph)

//*Otra forma de imprimir variables
let varUno = 23
let varDos = 11

console.log(`\nLa suma de ${varUno} y ${varDos} es ${varUno + varDos}`) // injecting the data dynamically

let a = 2
let b = 3
console.log(`${a} is greater than ${b}: ${a > b}`)