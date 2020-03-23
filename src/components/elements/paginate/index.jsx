import React from 'react';
import './styles.scss';

const Pagination = (props) => {
    return (
        <div className="pagination-container">
            <div className="index-box">
                <button className="index-button anton-font">Prev</button>
                    <div className="pages-container">
                        <span className="page-number">1</span>
                        <span className="page-number">2</span>
                        <span className="page-number">3</span>
                    </div>
                <button className="index-button anton-font">Next</button>
            </div>
        </div>
    )
}

export default Pagination