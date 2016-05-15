import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import dashboardApp from './reducers/dashboardApp'
import style from './style.css';
import App from './components/App'

let store = createStore(dashboardApp);

let root = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    root);