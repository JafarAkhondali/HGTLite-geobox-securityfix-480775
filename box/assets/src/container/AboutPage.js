import 'bootstrap/dist/css/bootstrap.css';

import React, {Component} from 'react';
import {Link} from 'react-router';

 class AboutPage extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="container bg-white">
                <h1>关于 GeoBox</h1>
            </div>
        )
    }

}
export default AboutPage
