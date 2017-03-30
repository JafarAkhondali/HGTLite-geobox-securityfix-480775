import '../style/index.scss'
import '../style/mapview.scss'

import React, {Component} from 'react';
import {Link} from 'react-router';
import TopNavbar from '../component/TopNavbar'
import ToggleMapButton from '../component/ToggleMapButton'


class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div >
                <TopNavbar/>
                    <ToggleMapButton   />

                {this.props.children}
            </div>
        )
    }
}

export default App
