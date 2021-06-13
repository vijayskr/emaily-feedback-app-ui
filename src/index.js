import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import reduxThunk from 'redux-thunk';

import App from './components/App';
import store from './reducers/authReducer';

//Adding CSS via WebPack load
import 'materialize-css/dist/css/materialize.min.css';

//Initial Store setup - null values are used in state, etc.,
//const store = createStore(() => [], {}, applyMiddleware());
//const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
