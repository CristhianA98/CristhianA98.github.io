import { useEffect, useState } from "react";
import { getAll } from "../helpers/getAll";
import { getPersonaje } from "../helpers/getPersonaje";
import { searchPersonaje } from "../helpers/SearchPersonaje";

export const useFetchInfo = (page = 1) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getAll(page).then(
            inf => {
                setstate({
                    data: inf,
                    loading: false
                })
            }
        )
    }, [page]);

    return state;
}

export const useFetchInfoPersonaje = (id = 1) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getPersonaje(id).then(
            inf => {
                setstate({
                    data: inf,
                    loading: false
                })
            }
        )
    }, [id]);

    return state;
}

export const useFetchSearch = (nombre = "") => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        searchPersonaje(nombre).then(
            inf => {
                setstate({
                    data: inf,
                    loading: false
                })
            }
        )
    }, [nombre]);

    return state;
}