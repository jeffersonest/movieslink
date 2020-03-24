import React from 'react';
import './styles.scss';
import {useDispatch, useSelector} from 'react-redux';

const Pagination = (props) => {


    const data = useSelector(state => state.content.data)
    const dispatch = useDispatch();
    console.log('PAG', data.page);

    function handleNextPage(){}

    function handleSelectedPage(){}

    function handlePrevPage(){}

    return (
        <div className="pagination-container">
            <div className="index-box">
                <button className={`index-button anton-font ${display_prev}`}>Prev</button>
                    <div className="pages-container">
                        <span className="page-number">1</span>
                        <span className="page-number">2</span>
                        <span className="page-number">3</span>
                    </div>
                <button className={`index-button anton-font ${display_next}`}>Next</button>
            </div>
        </div>
    )
}

export default Pagination