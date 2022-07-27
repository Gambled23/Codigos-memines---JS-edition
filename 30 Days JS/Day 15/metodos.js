class Persona{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
        this.edad = 0
    }
    obtenerNombreCompleto(){
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
}

const persona1 = new Persona('Pablo', 'De Robles')
const persona2 = new Persona()
console.log(persona1.obtenerNombreCompleto())
