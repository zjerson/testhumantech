import React from 'react';
import PropTypes from 'prop-types';

const Error = (props) => {

    const { message, status } = props;

    return (
        <div className='bg-red-700 py-8 px-4 text-center'>
            <h3 className='text-3xl'>{status}</h3>
            <p>{message}</p>
        </div>
    )
};

Error.propTypes = {
    status: PropTypes.number,
    message: PropTypes.string
};

Error.defaultProps = {
    status: 500,
    message: 'Error de Servidor'
};

export default Error;