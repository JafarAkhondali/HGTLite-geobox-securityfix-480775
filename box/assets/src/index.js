import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, Link, hashHistory, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'


import './style/index.scss'

import {App} from './container/App'

import routes from './routes'

import TopNavBar from './component/TopNavbar';
import AccountPage from './container/AccountPage';
import FileListPage from './container/FileListPage';
import WelcomePage from './container/WelcomePage';

var contentDOM = document.getElementById("content");

ReactDOM.render(
    <Router history={hashHistory} routes={routes}>

    </Router>
    ,
    contentDOM
)


//
// var About = () => (
//     <div>
//         <h2>About</h2>
//         <h2>About</h2>
//     </div>
// )
//
// var Topics = () => (
//     <div>
//         <h2>Topics</h2>
//         <h2>Topics</h2>
//         <h2>Topics</h2>
//         <h2>Topics</h2>
//     </div>
// )


// var App = () => (
//     <div>
//         <h2>Home</h2>
//         <p><Link to="/about">About 调转1</Link></p>
//         <p><Link to="/topics">Topics 调转2</Link></p>
//         {this.props.children}
//     </div>
// )

// ReactDOM.render(
//     <Router history={hashHistory}>
//         <Route path="/" component={App}>
//             <Route path="about" component={About}/>
//             <Route path="topics" component={Topics}/>
//         </Route>
//     </Router>
//     ,
//     contentDOM
// )