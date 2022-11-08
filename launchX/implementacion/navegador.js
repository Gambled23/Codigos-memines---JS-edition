//Encontrar elementos HTML
const titulo = document.getElementById('titulo');
const parrafo = document.getElementsByTagName('p');
console.log(parrafo) //El parrafo es un arreglo
const links = document.getElementsByClassName('links');

//Cambiar valores HTML
titulo.innerHTML = 'titulo cambiado con js';

//Forma más "directa"
document.getElementById('parrafo2').innerHTML = 'el pablo'
//Actualizar un href
links[0].innerHTML = 'Click para ir a google';
links[0].href = "https://www.google.com/";
//Cambiar estilos
titulo.style.color = "red"
titulo.style.background = "black"

let variableXD = 69;
//Eventos
function cambiarTexto(obj)
{
    obj.innerHTML = 'Texto clickeado ' + variableXD
}

function mOver(obj)
{
    obj.innerHTML = 'Mouse over me'
}

function mOut(obj)
{
    obj.innerHTML = 'Mouse out me'
}

function mDown(obj)
{
    obj.style.background = 'aqua'
    obj.innerHTML = 'sueltame'
}

function mUp(obj)
{
    obj.style.background = 'red'
    obj.innerHTML = 'presioname'
}

//AddEvent
const boton = document.getElementById('boton')
boton.addEventListener('click', alerta);

function alerta() {
    alert('EXCESO DE SEXO')
}