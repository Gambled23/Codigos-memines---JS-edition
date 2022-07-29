import fetch from "node-fetch"

fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((res) => {
        return res.json()
    }) //Obtiene la url y lo guarda en un objeto
    .then(data => {
        data.results.forEach(element => {
            console.log(element)
        }) 
    })
    .catch(error => console.log(error))