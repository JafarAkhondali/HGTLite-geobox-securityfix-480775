import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import React, {Component} from 'react';
import {Link} from 'react-router';

class WelcomePage extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="container bg-white">
                <h1>欢迎页 welcome</h1>
            </div>
        )
    }

}

export default  WelcomePage