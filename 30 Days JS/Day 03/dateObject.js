const now = new Date //*Primero debemos crear un objeto de Date, en este caso se llama now
/*Los meses van del 0-11 (0 enero, 11 diciembre)
Los días con getDay van del 1-7 (1 lunes, 7 domingo)
getDate nos da el NUMERO del dia*/
console.log(`Hoy es ${now.getDate()} de ${now.getMonth()} del ${now.getFullYear()}`) 
console.log(`Son las ${now.getHours()}:${now.getMinutes()} actualmente`)

