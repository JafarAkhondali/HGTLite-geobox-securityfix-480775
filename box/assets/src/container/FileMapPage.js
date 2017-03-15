import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import {Link} from 'react-router';
import FileMap from '../component/FileMap'

class TimelinePage extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="container bg-white">
                <h1>文件地图</h1>
                    <FileMap />
            </div>
        )
    }

}

export default  TimelinePage
