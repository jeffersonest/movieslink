import React from 'react';
import { Row, Col, setConfiguration } from 'react-grid-system';
import './styles.scss';
import ContentModal from '../contentModal';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../actions/modal.action';
 
const ContentList = () => {

    setConfiguration({ defaultScreenClass: 'md', gridColumns: 12 });
    const dispatch = useDispatch();

    return (
        <div className="content-container">
            <ContentModal />
            <Row className="content-box">
                <Col className="content-element" md={4} onClick={() => dispatch(openModal())}>
                    <div className="body">
                        <div className="header kanit-font ">
                            Punisher: War Zone
                        </div>
                        <img src="https://image.tmdb.org/t/p/w1280/i6Zg52KFtG5vCZXBMMyoLLsQAHU.jpg" style={{ width: '100%' }} alt="bg" />
                        <div className="footer baloo-font">
                            <p className="content-text">Waging his one-man war on the world of organized crime, ruthless vigilante-hero Frank Castle sets his sights on overeager mob boss Billy Russoti. After Russoti is left </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default ContentList;
