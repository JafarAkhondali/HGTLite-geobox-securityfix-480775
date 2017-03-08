import React from 'react'
import {Route, IndexRoute, Link} from 'react-router'

import App from './container/App'
import AccountPage from './container/AccountPage'
import  FileListPage from './container/FileListPage'
import  WelcomePage  from './container/WelcomePage'
import SearchkitPage from './container/SearchkitPage'
import MapPage from './container/MapPage'
import MapView from './component/MapView'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={FileListPage}/>
        {/*<IndexRoute component={MapView}/>*/}
        <Route path="welcome" component={WelcomePage}/>
        <Route path="map" component={MapPage}/>
        <Route path="accounts" component={AccountPage}/>
        <Route path="search" component={SearchkitPage}/>
    </Route>
);
