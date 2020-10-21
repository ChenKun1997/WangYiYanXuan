import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary';
import './assets/iconfont.css'//引入字体图标库

import App from './App';
import store from './store'

ReactDOM.render(
    <ErrorBoundary>
        <Provider store={store}>
            <App/>
        </Provider>
    </ErrorBoundary>,
    document.querySelector('#root')
)