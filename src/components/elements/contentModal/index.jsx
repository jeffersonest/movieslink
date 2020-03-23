import React from 'react';
import Modal from 'react-responsive-modal';
import './styles.scss';
import { closeModal } from '../../../actions/modal.action';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Container } from 'react-grid-system';

const ContentModal = () => {

    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.modal.isOpen)

    return (
        // (name, poster image, genre, overview,release date).
        <Modal  className="modal-box" open={isOpen} onClose={() => dispatch(closeModal())}>
            <span className="gender-tag anton-font">TERROR</span> 
            <Container >
                <Row className="body">
                     
                    <Col lg={5} className="poster-box">
                        <img className="poster-image" src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/i6Zg52KFtG5vCZXBMMyoLLsQAHU.jpg" width="320" alt="poster"></img>
                    </Col>
                    <Col lg={7} className="movie-info">
                        <Col lg={12} className="header">
                            <span className="kanit-font">Punisher: War Zone <span className="year">(2020) </span></span>
                        </Col>    
                        <Col lg={12} className="movie-info-body">
                            <span className="baloo-font">Waging his one-man war on the world of organized crime, ruthless vigilante-hero Frank Castle sets his sights on overeager mob boss Billy Russoti. After Russoti is left... </span>
                                                
                        </Col> 
                        
                    </Col>
                </Row>
            </Container>
        </Modal>
    )
};

export default ContentModal;
