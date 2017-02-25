import React from 'react'
import {Route, IndexRoute, Link} from 'react-router'

import TopNavBar from './component/TopNavbar'
import App from './container/App'
import AccountPage from './container/AccountPage'
import  FileListPage from './container/FileListPage'
import  WelcomePage  from './container/WelcomePage'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={WelcomePage}/>
        <Route path="/files" component={FileListPage}/>
        <Route path="/accounts" component={AccountPage}/>

    </Route>
);
