import React from 'react';
import Modal from 'react-modal';
import './styles.scss';
import { closeModal } from '../../../actions/modal.action';
import { useDispatch } from 'react-redux';

const ContentModal = (props) => {

    Modal.setAppElement('#root');
    const dispatch = useDispatch();

    let isOpen = props.isOpen;

    return (
        <Modal isOpen={isOpen} onRequestClose={() => dispatch(closeModal())}
            aria={{
                labelledby: "heading",
                describedby: "full_description"
            }}>
            <h1 id="heading">Alert</h1>
            <div id="full_description">
                <p>Description goes here.</p>
            </div>
        </Modal>
    )
};

export default ContentModal;
