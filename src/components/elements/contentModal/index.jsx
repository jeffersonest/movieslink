import React, { useEffect} from 'react';
import Modal from 'react-responsive-modal';
import './styles.scss';
import { closeModal } from '../../../actions/modal.action';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Container } from 'react-grid-system';
import contentProvider from '../../../providers/contentProvider';
import {fetchGenres} from '../../../actions/modal.action';

const ContentModal = () => {

    const dispatch = useDispatch();
    const {isOpen, contentInfo, genre_text} = useSelector(state => state.modal);

    useEffect(()=>{
        async function loadGenres() {
            const data =  await contentProvider({genres : contentInfo.genre_ids}, 'content/genres');
            dispatch(fetchGenres(data))
        }
        if(isOpen) loadGenres();
    },[dispatch, contentInfo.genre_ids, isOpen]);

    return (   
        // (name, poster image, genre, overview,release date).
        <Modal  className="modal-box" open={isOpen} onClose={() => dispatch(closeModal())}>
            <span className="gender-tag anton-font">{genre_text}</span> 
            <Container >
                <Row className="body">     
                    <Col lg={4} className="poster-box">
                        <img className="poster-image" src={(contentInfo.poster_path === null || contentInfo.poster_path === undefined) ? '/images/messages/image_not_found.png' : `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${contentInfo.poster_path}`} style={{ width: '100%' }} width="320" alt="poster"/>
                    </Col>
                    <Col lg={8} className="content-info">
                        <Col lg={12} className="header">
                            <span className="kanit-font">{contentInfo.title} <span className="year">({`${contentInfo.release_date}`.substring(0, 4)}) </span></span>
                        </Col>    
                        <Col lg={12} className="content-info-body">
                            <span className="baloo-font content-overview">{contentInfo.overview}</span>                                        
                        </Col> 
                        
                    </Col>
                </Row>
            </Container>
        </Modal>
    )
};

export default ContentModal;
