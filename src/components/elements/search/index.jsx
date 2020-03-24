import React from 'react';
import './styles.scss';
import contentProvider from '../../../providers/contentProvider';
import { useDispatch } from 'react-redux';
import { contentRequestData, contentSearchText, contentRequestPending, contentRequestSuccess, contentRequestError } from '../../../actions/content.action';
// import { Container } from './styles';

const Search = (props) => {

    const dispatch = useDispatch();

    async function handleSubmit(e) {

        e.preventDefault();

        const content_name = e.target[0].value;

        try {
            dispatch(contentRequestPending())
            const data = await contentProvider({ content_name, page: 1 }, 'content/search');
            dispatch(contentRequestSuccess())
            
            if (data.error)
                dispatch(contentRequestError())
            else
                dispatch(contentRequestData(data)); 
                dispatch(contentSearchText(content_name)) ; 
                
            
        } catch (error) {
            dispatch(contentRequestError())
        }    
    }

    return (
        <>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input className="baloo-font" type="text" placeholder=" Search for Gender, Films, Series..."></input>
            </form>
        </>
    )
};

export default Search;
