import React from 'react';
import { Row, Col } from 'react-grid-system';
import './styles.scss';
import ContentModal from '../contentModal';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../actions/modal.action';

const ContentList = () => {

    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.modal.isOpen)

    return (
        <div className="content-container">
            <ContentModal isOpen={isOpen}/>
            <Row className="content-box" onClick={() => dispatch(openModal())}>
                <Col className="content-element" lg={3} md={3}>
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

                <Col className="content-element" lg={3} md={3}>
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
