import React, { useState, useEffect } from 'react';

import MovieService from 'app/services/movies.service';

import LoaderContent from 'app/components/LoaderContent/LoaderContent';
import Error from 'app/components/Error/Error';
import EmptyData from 'app/components/EmptyData/EmptyData';
import TableMovies from 'app/components/TableMovies/TableMovies';
import ModalUpsertMovie from 'app/modals/ModalUpsertMovie';

const PageHome = (props) => {

    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const [currentMovie, setCurrentMovie] = useState(null);

    const [isOpenModalMovie, setIsOpenModalMovie] = useState(false);


    useEffect(() => {
        // const abortController = new AbortController();

        const getDataSource = async () => {

            setLoading(true);
            setIsError(false);

            try {
                const data = await MovieService.findAll();
                setDataSource(data);
            } catch (err) { setIsError(true) }

            setLoading(false);
        };

        getDataSource();

        return () => {
            // abortController.abort();
        }

    }, []);


    // handleOk modal
    const handleOk = (mode, movie) => {
        let _data = [];
        switch (mode) {
            case 'create':
                _data = [...dataSource]
                _data.push(movie);
                break;
            case 'update':
                _data = dataSource.map(_movie => (_movie.id === movie.id) ? movie : _movie);
                break;
            default: break;
        };
        setDataSource(_data);
        handleClose();
    }

    const handleEditMovie = (movie) => {
        setCurrentMovie(movie);
        setIsOpenModalMovie(true);
    };

    const handleDeleteMovie = (movie) => {
        //Here you can all Modal Confirmation
        const _filteredList = dataSource.filter(_movie => _movie.id !== movie.id);
        setDataSource(_filteredList);
    };

    const handleClose = () => {
        setCurrentMovie(null);
        setIsOpenModalMovie(false);
    }

    const displayContent = (loading, isError, dataSource) => {
        if (loading) return <LoaderContent />;

        if (isError) return <Error />

        if (!dataSource.length) return <EmptyData />

        return <TableMovies dataSource={dataSource} onEditMovie={handleEditMovie} onDeleteMovie={handleDeleteMovie} />

    };

    return (
        <div className='p-10 text-center'>
            <div className='flex justify-between items-center mb-4'>
                <h1 className='text-2xl font-bold'>Películas</h1>
                <button className='py-1 px-6 bg-blue-600 rounded-sm text-white' onClick={() => setIsOpenModalMovie(true)}>Nueva Pelicula</button>
            </div>
            <div>
                {displayContent(loading, isError, dataSource)}
            </div>
            <ModalUpsertMovie
                isOpen={isOpenModalMovie}
                movie={currentMovie}
                onClose={handleClose}
                onOk={handleOk}
            />
        </div>
    )
};
export default PageHome;
