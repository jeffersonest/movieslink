import contentReducer from './content';
import modalReducer from './modal';
import {combineReducers} from 'redux';

const Reducers = combineReducers({
    modal: modalReducer,
    content: contentReducer
});

export default Reducers;