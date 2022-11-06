//Encontrar elementos HTML
const titulo = document.getElementById('titulo');
const parrafo = document.getElementsByTagName('p');
console.log(parrafo) //El parrafo es un arreglo
const links = document.getElementsByClassName('links');

//Cambiar valores HTML
titulo.innerHTML = 'titulo cambiado con js';

//Forma más "directa"
document.getElementById('parrafo2').innerHTML = 'el pablo'
