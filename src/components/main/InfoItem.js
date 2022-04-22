import React from 'react'
import { Link } from 'react-router-dom'

export const InfoItem = ({ id, name, image, status }) => {
    return (
        <div className="col-6 col-md-4 mb-3 mx-auto">
            <div className="h-100 border animate__animated animate__fadeIn">
                <Link className='text-decoration-none contenedor' to={"personaje/" + id}>
                    <img src={image} alt={name} className="card-img card-img-top rounded imagen" title='Click para mayor información'/>
                </Link>
                <div className='card-body'>
                    <h3 className='h3 text-dark fst-italic fw-bold'>{name}</h3>
                </div>
                <p className="text-muted mx-3 mb-0 text-end">{status}</p>
            </div>
        </div>
    )
}
