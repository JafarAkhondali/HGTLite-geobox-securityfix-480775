import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, Link, hashHistory, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'


import './style/index.scss'


import routes from './routes'


var contentDOM = document.getElementById("content");

ReactDOM.render(
    <Router history={hashHistory} routes={routes}>

    </Router>
    ,
    contentDOM
)
