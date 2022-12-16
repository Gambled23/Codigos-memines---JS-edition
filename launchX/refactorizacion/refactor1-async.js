function mifuncion() {
    return('pablote')
}

//Forma 'dificil'
mifuncion()
    .then (data => {
        console.log(data);
    })
    .catch(err => {
        console.log('ERROR')
    })

//Forma eficiente
//Async/await
try {
    const data = await mifuncion()
    console.log(data)
} catch (error) {
    console.log('Error')
}