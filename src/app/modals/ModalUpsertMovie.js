import React from 'react';

import JModalLayout from 'app/components/JModalLayout/JModalLayout';


const ModalUpsertMovie = (props) => {

    const { isOpen } = props;

    const title = 'Registrar Movie';

    return (
        <JModalLayout title={title} isOpen={isOpen}>
            Formulario
        </JModalLayout>
    )
};
export default ModalUpsertMovie;