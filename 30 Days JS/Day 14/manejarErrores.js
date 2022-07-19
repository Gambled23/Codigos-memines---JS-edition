try {
    // code that may throw an error
} catch (err) {
    // code to be executed if an error occurs
} finally {
    // code to be executed regardless of an error occurs or not
}

try {
    let lastName = 'Yetayeh'
    let fullName = firstName + ' ' + lastName
} catch (err) {
    console.log('Name of the error:  ', err.name)
    console.log('Error message:  ', err.message)
} finally {
    console.log('In any case I will be executed')
}

//*Throw
//El comando throw nos deja crear un error personalizado
throw 'Error2' // generates an exception with a string value
throw 42 // generates an exception with the value 42
throw true // generates an exception with the value true

//*Tipos de errores
    //ReferenceError se da cuando usamos variables que no se han declarado
    //SyntaxError es un error de sintaxis
    //TypeError se da cuando revuelves tipos de datos, por ejemplo, al intentar pasar a 
    //mayusculas un numero entero
    