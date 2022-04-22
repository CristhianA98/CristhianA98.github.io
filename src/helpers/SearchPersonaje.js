export const searchPersonaje = async (name = "") => {

    const url = `https://rickandmortyapi.com/api/character/?name=${name}`;
    const resp = await fetch(url);
    const { results, error } = await resp.json();

    if(error){
        return false;
    }
    
    const onlyFiveResult = results?.slice(1,6);
    const informacion = onlyFiveResult.map(inf => {
        return {
            id: inf.id,
            name: inf.name
        }
    });

    return informacion;
}

