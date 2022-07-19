class Persona{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
        this.edad = 0
    }
    obtenerNombreCompleto(){
        const fullName = this.firstName + '' + this.lastName
        return fullName
    }
}
class Ninio extends Persona{
    decirAlgo(){
        console.log('Soy un ninio')
    }
}

const ninio1 = new Ninio('Pablo', 'Roblito')
console.log(ninio1.decirAlgo())