import React from 'react';

const ButtonsMovie = ({ onEdit, onDelete }) => {
    return (
        <>
            <button type='button' className='px-4 py-1 bg-yellow-600 text-black rounded-sm text-sm mr-2' onClick={onEdit}>Editar</button>
            <button type='button' className='px-4 py-1 bg-red-600 rounded-sm text-sm' onClick={onDelete}>Eliminar</button>
        </>
    )
}
export default ButtonsMovie;