import React, { useEffect } from 'react';
import { Row, Col } from 'react-grid-system';
import './styles.scss';
import ContentModal from '../contentModal';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../actions/modal.action';
import contentProvider from '../../../providers/contentProvider';
import {contentRequestData, contentRequestPending, contentRequestSuccess, contentRequestError} from '../../../actions/content.action';
 
const ContentList = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        async function loadContent() {
            
            try {
                dispatch(contentRequestPending())
                const data = await contentProvider({page: 1}, "content");
                dispatch(contentRequestSuccess())
                if (data.error)
                    dispatch(contentRequestError())
                else                    
                    dispatch(contentRequestData(data));
            } catch (error) {
                dispatch(contentRequestError())
            }    
        }
        loadContent()
    }, [dispatch]);
 
    const data = useSelector(state => state.content.data)
    const contentRequestStatus = useSelector(state => state.content)

    const state = useSelector(state => state)
    
    function renderList(){
        return (
            <div className="content-container">
                
                <ContentModal />

                <Row className="content-box">      
                    {  
                        data.results.map((content, key) => (      
                            <Col key={key} className="content-element" md={4} onClick={() => dispatch(openModal(content))}>
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
    }

    function renderError() {
        return (
            <div className="content-container">
                <ContentModal />
                <Row className="content-box">  
                    <Col md={12} className="generic-box">
                        <img src="/images/messages/error.gif" alt="imag-error-found"></img>
                        <h2 className="baloo-font">We had problem! Please, check your search.</h2>
                    </Col>    
                </Row>
            </div>    
        )  
    }

    function renderNoResults(){
        return (
            <div className="content-container">
                <ContentModal />
                <Row className="content-box">  
                    <Col md={12} className="generic-box">
                        <img src="/images/messages/no-record-found.png" alt="imag-no-results-found"></img>
                    </Col>    
                </Row>
            </div>    
        )
    }

    function renderLoader(){
        return (
            <div className="content-container">
                <ContentModal />
                <Row className="content-box">  
                    <Col md={12} className="generic-box">
                        <img src="/images/messages/loader.gif" alt="imag-no-results-found"></img>
                    </Col>    
                </Row>
            </div>    
        )
    }

    console.log('TOTAL STATUS', state);

    if(contentRequestStatus.error)
        return renderError()
    else if(contentRequestStatus.isPending)
        return renderLoader()
    else if(data.results[0] !== undefined)
        return renderList()
    else
        return renderNoResults()

};

export default ContentList;
