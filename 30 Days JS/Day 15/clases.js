class Persona{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
}

const persona1 = new Persona() //Crear persona vacia
console.log(persona1)

const persona2 = new Persona('Pablo','De robles') //Crear persona con constructor
console.log(persona2)
console.log(persona2.firstName)