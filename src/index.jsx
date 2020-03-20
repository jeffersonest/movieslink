import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import {createStore} from 'redux';
import Reducers from './reducers'
import App from './App';
import { Provider } from 'react-redux';

const store = createStore(
    Reducers
    );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    
, document.getElementById('root'));
