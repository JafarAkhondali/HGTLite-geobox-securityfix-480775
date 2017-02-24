import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory} from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import TopNavbar from '../components/TopNavbar'
import BoxList from '../components/BoxList'

var contentsDOM=document.getElementById("contents");

ReactDOM.render(
    <div>
        <TopNavbar/>
        <BoxList/>
    </div>
    ,
    contentsDOM
)