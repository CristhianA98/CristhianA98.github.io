
export const getAll = async (page = 1) => {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    const resp = await fetch(url);
    const { results } = await resp.json();

    const informacion = results.map(inf => {
        return {
            id: inf.id,
            name: inf.name,
            image: inf.image,
            gender: inf.gender,
            status: inf.status,
            origin: inf.origin.name,
            location: inf.location.name
        }
    });

    return informacion;
}


export const getInfo = async() => {
    const url = `https://rickandmortyapi.com/api/character`;
    const resp = await fetch(url);
    const { info } = await resp.json();

    return info;
}