import React from 'react';
import ReactDOM from 'react-dom';

// react redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from './app/reducers';

import App from './app/components/App/App';
import './index.css';

const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

