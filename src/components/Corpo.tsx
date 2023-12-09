import React, { useState } from 'react';
import Modal from 'react-modal';
import NavbarB from './navbar/NavbarB';
import Vini from './back-end/Vini';

import './Modals.css';
import './App.css';

const CorpoB = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="imageBallonBox">
            <img
                className="imageBallon"
                src='.\botaoAdicionarFesta.PNG'
                alt="Balão de festa"
                onClick={openModal}
            />
            <ModalShowFest
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            />
        </div>
    );
};

interface ModalShowFestProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

const ModalShowFest: React.FC<ModalShowFestProps> = ({ isOpen, onRequestClose }) => {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Exemplo Modal"
        >
            <NavbarB></NavbarB>
            <Vini></Vini>


        </Modal >
    );
};
export default CorpoB;