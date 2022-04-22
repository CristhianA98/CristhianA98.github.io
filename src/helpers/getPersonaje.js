
export const getPersonaje = async (id = 1) => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    const resp = await fetch(url);
    const result = await resp.json();

    return {
        id: result.id,
        name: result.name,
        image: result.image,
        gender: result.gender,
        status: result.status,
        origin: result.origin.name,
        location: result.location.name,
        species: result.species
    }
}

