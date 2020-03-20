import contentReducer from './content';
import modalReducer from './modal';
import {combineReducers} from 'redux';

const Reducers = combineReducers({
    content: contentReducer,
    modal: modalReducer
});

export default Reducers;