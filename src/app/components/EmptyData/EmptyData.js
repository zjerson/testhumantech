import React from 'react';
import PropTypes from 'prop-types';

const EmptyData = (props) => {

    const { message } = props;

    return (
        <div className='bg-yellow-300 py-8 px-4 text-center'>
            <p>{message}</p>
        </div>
    )
};

EmptyData.propTypes = {
    message: PropTypes.string
};

EmptyData.defaultProps = {
    message: 'No se encontraros datos!'
};

export default EmptyData;