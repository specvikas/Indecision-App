import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen = {!!props.selectedOption}
        onRequestClose = {props.handleSelectedOption}
        contentLabel = "Selected Option"
        closeTimeoutMS = {200}
        className = "modal"
    >
        <h2 className="modal__title">Selected Option !!</h2>

        <h3 className="modal__body">{props.selectedOption}</h3>
        <button className="button" onClick = {props.handleSelectedOption} >  Okay !! </button>
    </Modal>
    );


export default OptionModal;