import React, { useEffect } from 'react';
import { Row, Col } from 'react-grid-system';
import './styles.scss';
import ContentModal from '../contentModal';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../actions/modal.action';
import contentProvider from '../../../providers/contentProvider';
import {contentRequestData} from '../../../actions/content.action';
 
const ContentList = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        async function loadContent() {
            const data = await contentProvider({page: 5}, "content");
            dispatch(contentRequestData(data));
        }
        loadContent()
    }, [dispatch]);

    
    const data = useSelector(state => state.content.data)
    const statex = useSelector(state => state)
    console.log('STATUS list', statex);


    return (
        <div className="content-container">
            <ContentModal />
            <Row className="content-box">
                {
                    data.results.map((content, key) => (
                        <Col key={key} className="content-element" md={4} onClick={() => dispatch(openModal())}>
                            <div className="body">
                                <div className="header kanit-font content-title">
                                    <p>{content.title || content.name}</p>
                                </div>
                                <img src={(content.backdrop_path === null || content.backdrop_path === undefined) ? '/images/messages/image_not_found.png' : `https://image.tmdb.org/t/p/w1280/${content.backdrop_path}`} style={{ width: '100%' }} alt="background not uploaded" />
                                <div className="footer baloo-font">
                                    <p className="content-text">Waging his one-man war on the world of organized crime, ruthless vigilante-hero Frank Castle sets his sights on overeager mob boss Billy Russoti. After Russoti is left </p>
                                </div>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
};

export default ContentList;
