import React, { useEffect, useState } from 'react'
import { useFetchInfo } from '../../hooks/useFetchInfo'
import { InfoItem } from './InfoItem';

import ReactPaginate from 'react-paginate'
import { getInfo } from '../../helpers/getAll';

export const MainScreen = () => {
    const [page, setpage] = useState(1);
    const { data, loading } = useFetchInfo(page);

    const [info, setinfo] = useState(0);
    const { pages } = info;

    useEffect(() => {
        getInfo().then(resp => { setinfo(resp) });
    }, []);

    const handlePageChange = ({ selected }) => {
        window.scrollTo(0, 0);
        setpage(selected + 1);
    }

    return (
        <div className='container pt-3 animate__animated animate__fadeIn'>
            <div className='row text-center py-3'>
                <h1 className='h1'>Rick And Morty App</h1>
                <p>
                    A continuación los diferentes personajes de la divertida caricatura
                </p>
            </div>

            {loading && <div className='text-center'><div className="spinner-grow text-dark" role="status">
                <span className="sr-only">Loading...</span>
            </div></div>}

            <div className='row'>
                {
                    data.map(inf => (
                        <InfoItem key={inf.id} {...inf} />
                    ))
                }

                {
                    !loading &&
                    <ReactPaginate
                        previousLabel={'<<'}
                        nextLabel={'>>'}
                        breakLabel={'...'}
                        pageCount={pages}
                        marginPagesDisplayed={4}
                        pageRangeDisplayed={2}
                        onPageChange={handlePageChange}
                        containerClassName='pagination justify-content-center'
                        pageClassName='page-item'
                        pageLinkClassName='page-link'
                        previousClassName='page-item'
                        previousLinkClassName='page-link'
                        nextClassName='page-item'
                        nextLinkClassName='page-link'
                        activeClassName='active'
                    />
                }
            </div>
        </div>

    )
}
