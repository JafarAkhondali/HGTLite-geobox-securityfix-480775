import 'bootstrap/dist/css/bootstrap.css';
import '../style/styles.scss'

import React from 'react';
import {Link} from 'react-router';
import MapVector from '../component/MapVector'

class TimelinePage extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="container bg-white">
                <div className="height-80"></div>
                <h1>地理文件覆盖区域</h1>
                <div className="height-80"></div>
                <MapVector />
            </div>
        )
    }

}

export default  TimelinePage
