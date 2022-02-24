const POKE_API_DOMAIN = 'https://pokeapi.co/api/v2/pokemon';

export async function getFirstPokemon() {
    const response = await fetch(`${POKE_API_DOMAIN}/1`)
    const data = await response.json()

    if(!response.ok) {
        throw new Error(data.message || 'Could not fetch pokemon');
    }

    return data;
}

export async function getSinglePokemon(numPoke) {
    const response = await fetch(`${POKE_API_DOMAIN}/${numPoke}`)
    const data = await response.json()
    console.log(data)

    if(!response.ok) {
        throw new Error(data.message || 'Could not fetch pokemons');
    }

    return data;
}



