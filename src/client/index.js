/**
    - It is entry point of application.
    - Pass store to all components using `Provider` class.
    - Render `App` component
    - Bootstrap the application.
    @author Ganesh Khutwad
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './Store/configureStore';
import './index.css';
import { App } from 'App';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
