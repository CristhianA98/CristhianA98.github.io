import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useFetchSearch } from '../../hooks/useFetchInfo';

export const Navbar = () => {

    const [nombre, setNombre] = useState("");
    const { data } = useFetchSearch(nombre);


    const handleChange = (nombre) => {
        setNombre(nombre);
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid animate__animated animate__fadeIn">
                <Link to="/" className="navbar-brand fst-italic fs-3"><i className="fa fa-home mx-5"></i></Link>
                <form className="d-flex container justify-content-end">
                    <input className="form-control me-3 col-md-10" onChange={e => handleChange(e.target.value)} value={nombre} type="search" placeholder="Ingrese el nombre de un personaje" aria-label="Search" />
                    {nombre.length > 0 && data && data.map((suggestion)=>
                    <div key={suggestion.id} className='col-md-10 animate__animated animate__fadeIn mt-1'><Link onClick={e=>setNombre("")} to={"personaje/" + suggestion.id} className='text-light fw-lighter'><i className="fa fa-search mx-2"></i> {suggestion.name}</Link></div>
                    )}
                </form>
            </div>
        </nav>
    );
}
