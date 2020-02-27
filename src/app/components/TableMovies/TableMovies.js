import React from 'react';
import PropTypes from 'prop-types';

// Components
import ButtonsMovie from './ButtonsMovie';

const TableMovies = (props) => {

    const { dataSource, onEditMovie, onDeleteMovie } = props;

    const dateToString = (strDate) => {
        return (new Date(strDate)).toLocaleString();
    };

    const rows = dataSource.map(movie => (
        <tr key={movie.id}>
            <td>{movie.id}</td>
            <td>{movie.name}</td>
            <td>{dateToString(movie.pub_date)}</td>
            <td>{movie.state === 'active' ? 'activo' : 'inactivo' }</td>
            <td><ButtonsMovie onEdit={() => onEditMovie(movie)} onDelete={() => onDeleteMovie(movie)} /></td>
        </tr>
    ));

    return (
        <table className='w-full'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Publicación</th>
                    <th>Estado</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
};

TableMovies.propTypes = {
    dataSource: PropTypes.array
};


export default TableMovies;
