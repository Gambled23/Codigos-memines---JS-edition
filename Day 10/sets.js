//*Los set son arreglos, pero no pueden tener elementos repetidos, no usan regex así que no importan
//*mayusculas o minusculas, solo detectan un elemento repetido si es exactamente igual

//Crear set vacio
const companias = new Set()
console.log(companias)

//Crear set desde array
const lenguajes = [
    'JavaScript',
    'Java',
    'Python',
    'C',
    'C++',
    'Java'
]
const setDeLenguajes = new Set(lenguajes)
console.log(setDeLenguajes)

//Agregar y eliminar elementos a set
companias.add('Google')
companias.add('Microsoft')
companias.add('google')
companias.add('Google')
console.log(companias)
companias.delete('Google')
companias.delete('Microsoft')
console.log(companias)
companias.add('Google')
companias.add('Apple')
companias.add('Facebook')
companias.add('Twitter')

//Revisar si existe un elemento
console.log('El set tiene la compania Microsoft: ' + companias.has('Microsoft'))
console.log('El set tiene la compania Apple: ' + companias.has('Apple'))

//Limpiar el set
companias.clear()
console.log('El set ha sido linmpiado')
console.log(companias)

