import React from 'react'
import {Route, IndexRoute, IndexRedirect,Link} from 'react-router'

import App from './container/App'
import AboutPage from './container/AboutPage'
import AccountPage from './container/AccountPage'
import LoginPage from './container/LoginPage'
import  FileListPage from './container/FileListPage'
import  WelcomePage  from './container/WelcomePage'
import SearchkitPage from './container/SearchkitPage'
import MapPage from './container/MapPage'
import TimelinePage from './container/TimelinePage'
import FileMapPage from './container/FileMapPage'



    export default  (
    <Route path="/" component={App}>
        <IndexRedirect to="/welcome"/>
        <Route path="disk" component={FileListPage}/>

        <Route path="map" component={MapPage}/>
        <Route path="filemap" component={FileMapPage}/>
        <Route path="timeline" component={TimelinePage}/>

        <Route path="welcome" component={WelcomePage} onEnter={checkLogin}/>
        <Route path="account" component={AccountPage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="login" component={LoginPage}/>

        <Route path="search" component={SearchkitPage}/>
    </Route>
    )

    function checkLogin(nextState, replace) {

      if (sessionStorage.getItem('gbUser')) {
        replace({
          pathname: '/disk',
          state: { nextPathname: nextState.location.pathname }
        })
      }
    }
