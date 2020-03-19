import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './styles.scss';

const ContentModal = (props) => {

    Modal.setAppElement('#root');
    
    const [isOpen, setIsOpen] = useState(true)

    useEffect(() => {
        setIsOpen(props.isOpen); 
    }, [props.isOpen])

    function handleClose() {
        setIsOpen(false);
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={() => handleClose()}
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
