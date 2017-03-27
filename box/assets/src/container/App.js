import '../style/index.scss'
import '../style/mapview.scss'

import React, {Component} from 'react';
import {Link} from 'react-router';
import TopNavbar from '../component/TopNavbar'



class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div >
                <TopNavbar/>
                {this.props.children}
            </div>
        )
    }
}

export default App
