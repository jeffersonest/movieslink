import React from 'react';
import { Row, Col } from 'react-grid-system';
import './styles.scss';
import ContentModal from '../contentModal';

// import { Container } from './styles';

const ContentList = () => {

    function handleModal(e) {
        console.log(e)
    }

    return (
        <div className="content-container">
            <Row className="content-box">
                <Col className="content-element" lg={3} md={3} onClick={(event) => handleModal(event)}>
                    <ContentModal />
                    <div className="body">
                        <div className="header kanit-font ">
                            Punisher: War Zone
                        </div>
                        <img src="https://image.tmdb.org/t/p/w1280/i6Zg52KFtG5vCZXBMMyoLLsQAHU.jpg" style={{ width: '100%' }} alt="bg" />
                        <div className="footer baloo-font">
                            Waging his one-man war on the world of organized crime, ruthless vigilante-hero Frank Castle sets his sights on overeager mob boss Billy Russoti. After Russoti is left... 
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default ContentList;
