import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useFetchInfoPersonaje } from '../../hooks/useFetchInfo';

export const PersonajeInfo = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data, loading } = useFetchInfoPersonaje(id);
    const { gender, image, location, name, origin, status, species } = data;

    if (id < 0 || id > 286) {
        return (
            <div className='container animate__animated animate__fadeIn py-5'>
                <div className='row py-5 justify-content-center'>
                    Id incorrecto, redirigiendo a la página principal.
                </div>

                <div className='text-center'>
                    <div className="spinner-grow text-dark" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    {
                        setTimeout(() => {
                            navigate('/');
                        }, 2000)
                    }
                </div>
            </div>
        )
    }



    return (
        <div className='container animate__animated animate__fadeIn'>
            <div className='row py-3'>
                {loading &&
                    <div className='text-center'>
                        <div className="spinner-grow text-dark" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                }
                <div className="col-lg-5 mt-5 contenedor">
                    <div className="card mb-3">
                        <img className="card-img img-fluid imagen" role='button' src={image} alt="Card image cap" />
                    </div>
                </div>
                <div className="col-lg-7 mt-5">
                    <div className='card'>
                        <div className='card-body'>
                            <h2 className='h2 py-4'>{name}</h2>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <h6 className='fw-bold'>Estado:</h6>
                                </li>
                                <li className="list-inline-item">
                                    <p className="text-muted"><strong>{status}</strong></p>
                                </li>
                            </ul>

                            <h6 className='fw-bold'>Description:</h6>
                            <p>{name} es de origen {origin} en la localidad de {location}</p>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <h6 className='fw-bold'>Género :</h6>
                                </li>
                                <li className="list-inline-item">
                                    <p className="text-muted"><strong>{gender}</strong></p>
                                </li>
                            </ul>

                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <h6 className='fw-bold'>Especie :</h6>
                                </li>
                                <li className="list-inline-item">
                                    <p className="text-muted"><strong>{species}</strong></p>
                                </li>
                            </ul>
                            <Link to='/' className='link-secondary m-2'>Regresar a la Principal...</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
