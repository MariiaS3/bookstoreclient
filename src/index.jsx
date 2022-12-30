import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from "./module/index"
import axios from 'axios';
import config from './config';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

axios.interceptors.request.use(
    (config) => {
        const token = window.localStorage.getItem('bookstore-token');
        if (token != null) {
            config.headers.Authorization = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

ReactDOM.render(
    <Provider store={
        createStoreWithMiddleware(
            reducers,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    }>
        <App />
    </Provider>
    , document.getElementById('root'));