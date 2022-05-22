let variableUno = -8
let variableDos = true
let clima = 'soleado'

if (variableUno > 0) {
    console.log(`El numero ${variableUno} es positivo`)
}
else {
    console.log(`El numero ${variableUno} es negativo`)
}

if (variableDos) {
    console.log("La variableDos está definida")
}

switch (clima) {
    case 'nublado':
        console.log('Deberias usar un paraguas')
        break
    case 'soleado':
        console.log('Ponte bloqueador')
        break
}
