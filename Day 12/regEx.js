//*Buscar coincidencia
const str = 'I love JavaScript'
const pattern = /love/
const result = pattern.test(str)
console.log(result)

//*Limpiar un texto
const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txt.replace(/%/g, '') //remplaza los % por un caracter vacio en este caso
console.log(matches) 

//*Brackets
const pattern2 = '[Aa]pple' // this square bracket means either A or a
const txt2 = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches2 = txt2.match(pattern2)

console.log(matches2)  