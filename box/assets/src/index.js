import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {Router, Route, IndexRoute, Link, hashHistory, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import thunk from 'redux-thunk';


import routes from './routes'

import './style/index.scss'

const store = createStore(reducer, applyMiddleware(thunk));
const history = syncHistoryWithStore(hashHistory, store)


ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes}>
        </Router>
    </Provider>
    ,
    document.getElementById("content")
)
