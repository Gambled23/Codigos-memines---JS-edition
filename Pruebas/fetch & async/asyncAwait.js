import fetch from "node-fetch"

//El mismo codigo de fetchAPI.js pero con awaut

const obtenerPokemones = async () => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/') //esperamos la respuesta de fetch
        const data = await res.json()
        console.log(data.results)
    }
    catch (error) {
        console.log(error)
    }
}

obtenerPokemones()

