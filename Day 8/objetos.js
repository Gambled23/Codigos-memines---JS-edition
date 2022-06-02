//Para crear un objeto
const objetoUno = {} //Objeto vacio
const persona = {
    //*Atributos
    nombre: 'pablo',
    edad: 18,
    pais: 'Mexico',
    estado: 'De embriaguez',
    casado: false,
    //*metodos
    obtenerNombre: function(){
        return (this.nombre)
    }
}
console.log(persona)
console.log(persona.edad)
nombre = persona.obtenerNombre()
console.log(nombre)
persona.nombre = 'Pablonio' //Cambiando el atributo nombre del objeto persona
console.log(persona.obtenerNombre())

//*METODOS DE UN OBJETO
const personaCopiada = Object.assign({},persona)
console.log(personaCopiada)