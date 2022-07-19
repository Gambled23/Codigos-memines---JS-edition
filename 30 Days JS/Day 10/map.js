//*En los mapas, cada elemento está relacionado con otro

const map = new Map()
console.log(map)

//Creando mapa desde un array
countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]
const mapa = new Map(countries)
console.log(mapa)

//Agregando elementos a un mapa
mapa.set('Jalisco','Guadalajara')
console.log(mapa)

//Obtener datos de un mapa
console.log(mapa.get('Jalisco'))

//Ver si existe un elemento en un mapa
console.log('El mapa contiene Finland: ' + mapa.has('Finland'))
mapa.delete('Finland')
console.log('El mapa contiene Finland: ' + mapa.has('Finland'))