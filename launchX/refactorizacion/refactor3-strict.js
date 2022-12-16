'use strict'

variableNoDeclarada = 10;
console.log(variableNoDeclarada);
//Si pongo el modo estricto, eso da error, si lo quito no da error

function funcionEstricta() {
    'use strict'
    //el strict solo estará activado dentro de esta funcion
}