import React, { useState } from 'react';
import { useForm } from 'react-hook-form'

// Services
import MovieService from 'app/services/movies.service';

// Components
import JModalLayout from 'app/components/JModalLayout/JModalLayout';


const ModalUpsertMovie = (props) => {

    const { isOpen, movie, onOk, onClose } = props;

    const [loader, setLoader] = useState(false);

    const { register, handleSubmit } = useForm({
        mode: 'onChange'
    });

    const title = movie ? 'Actualizar Movie' : 'Registrar Movie';
    const mode = movie ? 'update' : 'create';

    if (!isOpen && !movie) return null;

    const handleSubmitForm = (valueForm) => {
        //  you can  clean and | or format  with function
        setLoader(true);

        const payload = { ...valueForm };

        const requestMovie = !movie ? MovieService.create(payload) : MovieService.update(movie.id, { ...payload, id: movie.id });

        requestMovie
            .then(response => onOk(mode, response))
            .catch(console.log)
            .finally(() => setLoader(false))
    };

    return (
        <JModalLayout title={title} isOpen={isOpen} footer={false} onClose={onClose}>
            <form onSubmit={handleSubmit(handleSubmitForm)}>
                <div className='flex mb-2'>
                    <label htmlFor="name" className='w-64 flex-shrink-0'>Nombre de Película</label>
                    <input
                        type="text"
                        name='name'
                        defaultValue={(movie && movie.name) || ''}
                        className='flex-grow border rounded-sm px-2 py-1 text-sm'
                        ref={register({ required: true })}
                    />
                </div>
                <div className='flex mb-2'>
                    <label htmlFor="name" className='w-64 flex-shrink-0'>Fecha de Publicación</label>
                    <input
                        type="date"
                        name='pub_date'
                        defaultValue={(movie && movie.pub_date) || ''}
                        className='flex-grow border rounded-sm px-2 py-1 text-sm'
                        ref={register({ required: true })}
                    />
                </div>
                <div className='flex'>
                    <label htmlFor="name" className='w-64 flex-shrink-0'>Estado</label>
                    <select
                        name="state"
                        ref={register({ required: true })}
                        className='flex-grow border rounded-sm px-2 py-1 text-sm'
                        defaultValue={(movie && movie.state) || ''}
                    >
                        <option value="" disabled>Seleccione Estado</option>
                        <option value="active">Activo</option>
                        <option value="inactive">Inactivo</option>
                    </select>
                </div>
                <div className='text-right mt-6'>
                    <button type='submit' disabled={loader} className='px-3 py-1 bg-blue-600 rounded-sm text-white'>
                        {loader ? 'Cargando...' : 'Guardar'}
                    </button>
                </div>
            </form>
        </JModalLayout>
    )
};
export default ModalUpsertMovie;