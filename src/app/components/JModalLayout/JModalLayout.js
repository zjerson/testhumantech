import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';


import './JModalLayout.css';

const JModalLayout = (props) => {

    Modal.setAppElement('#root');

    const { isOpen, onClose, children,  title, footer, size } = props;

    const configModal = {
        isOpen: isOpen,
        overlayClassName: 'jOverlay',
        className: `jPopup jPopup--${size}`,
        closeTimeoutMS: 100
    };


    /* Header Config */
    const ModalHeader = (
        <div className='jPopup__header'>
            <div className='flex items-center'>
                <span className='uppercase font-semibold jPopup__title'>{title}</span>
            </div>
            <div>
                <button typ='button' onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );

    /* Footer Config */
    let ModalFooter = (
        <div className='jPopup__footer'>
            <button className='mr-2 hover-close' onClick={onClose}>
                Salir
            </button>
        </div>
    );

    if (typeof (footer) === 'boolean') ModalFooter = null;
    if (typeof (footer) === 'object') ModalFooter = (<div className='jPopup__footer'>{footer}</div>);


    return (
        <Modal {...configModal}>

            {ModalHeader}

            <div className='jPopup__body'>
                <div className='jPopup__content'>
                    {children}
                </div>
            </div>

            {ModalFooter}

        </Modal>
    )
};

JModalLayout.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    cfgIconTitle: PropTypes.object, // Config By FontAwesome
    title: PropTypes.node,
    footer: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};

JModalLayout.defaultProps = {
    title: 'Información',
    size: 'sm'
};

export default JModalLayout;