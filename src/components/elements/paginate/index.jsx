import React from 'react';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import contentProvider from '../../../providers/contentProvider';
import { contentRequestPending, contentRequestSuccess, contentRequestError, contentRequestData } from '../../../actions/content.action';

const Pagination = (props) => {

    const data = useSelector(state => state.content.data)
    const _content_name = useSelector(state => state.content.content_name);
    const actual_page = useSelector(state => state.content.data.page);
    const next_page = data.next_page;
    const prev_page = data.prev_page;
    const dispatch = useDispatch();

    async function handleNextPage() {
        try {

            if (_content_name === "") {
                dispatch(contentRequestPending())
                const response = await contentProvider({ page: next_page }, 'content');
                if (response.error) {
                    dispatch(contentRequestError())
                } else {
                    dispatch(contentRequestData(response));
                    dispatch(contentRequestSuccess())
                }
            } else {
                dispatch(contentRequestPending())
                const response = await contentProvider({ page: next_page, content_name: _content_name }, 'content/search');
                if (response.error) {
                    dispatch(contentRequestError())
                } else {
                    dispatch(contentRequestData(response));
                    dispatch(contentRequestSuccess())
                }
            }

        } catch (error) {
            dispatch(contentRequestError())
        }
    }

    async function handlePrevPage() {
        try {

            if (_content_name === "") {
                dispatch(contentRequestPending())
                const response = await contentProvider({ page: prev_page }, 'content');
                if (response.error) {
                    dispatch(contentRequestError())
                } else {
                    dispatch(contentRequestData(response));
                    dispatch(contentRequestSuccess())
                }
            } else {
                dispatch(contentRequestPending())
                const response = await contentProvider({ page: prev_page, content_name: _content_name }, 'content/search');
                if (response.error) {
                    dispatch(contentRequestError())
                } else {
                    dispatch(contentRequestData(response));
                    dispatch(contentRequestSuccess())
                }
            }

        } catch (error) {
            dispatch(contentRequestError())
        }
    }

    return (
        <div className="pagination-container">
            <div className="index-box">
                <button onClick={() => handlePrevPage()} className={`index-button anton-font ${data.prev_page === null ? 'hide' : ''}`}>Prev</button>
                <div className="pages-container">
                    <span className="page-number">{prev_page}</span>
                    <span className="page-number actual">{actual_page}</span>
                    <span className="page-number">{next_page}</span>
                </div>
                <button onClick={() => handleNextPage()} className={`index-button anton-font ${data.next_page === null ? 'hide' : ''}`}>Next</button>
            </div>
        </div>
    )
}

export default Pagination