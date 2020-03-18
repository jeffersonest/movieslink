import React from 'react';
import { Row, Col } from 'react-grid-system';
import './styles.scss';

// import { Container } from './styles';

const ContentList = () => {
    return (
        <div className="content-container">
            <Row className="content-box">
                <Col className="content-element" md={3}>
                    <div className="header">
                        HEADER
                    </div>
                    <div className="body">
                        BODY
                    </div>
                    <div className="footer">
                        FOOTER
                    </div>
                </Col>

                <Col className="content-element" md={3}>
                    <div className="header">
                        HEADER
                    </div>
                    <div className="body">
                        BODY
                    </div>
                    <div className="footer">
                        FOOTER
                    </div>
                </Col>

                <Col className="content-element" md={3}>
                    <div className="header">
                        HEADER
                    </div>
                    <div className="body">
                        BODY
                    </div>
                    <div className="footer">
                        FOOTER
                    </div>
                </Col>

                <Col className="content-element" md={3}>
                    <div className="header">
                        HEADER
                    </div>
                    <div className="body">
                        BODY
                    </div>
                    <div className="footer">
                        FOOTER
                    </div>
                </Col>

                <Col className="content-element" md={3}>
                    <div className="header">
                        HEADER
                    </div>
                    <div className="body">
                        BODY
                    </div>
                    <div className="footer">
                        FOOTER
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default ContentList;
