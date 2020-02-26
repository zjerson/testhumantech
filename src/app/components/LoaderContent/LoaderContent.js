import React from 'react';
import PropTypes from 'prop-types';

const LoaderContent = (props) => {

    const { message } = props;

    return (
        <div className='bg-indigo-100 py-8 px-4 text-center'>
            <span>{message}</span>
        </div>
    )
};

LoaderContent.propTypes = {
    message: PropTypes.string
};

LoaderContent.defaultProps = {
    message: 'Cargando...'
};

export default LoaderContent;