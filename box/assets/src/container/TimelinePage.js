import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import {Link} from 'react-router';
import Timeline from '../component/Timeline'

class TimelinePage extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="container bg-white">
                <h1 className="text-center text-success">文件时间轴
                    <p className="lead">云盘用户A</p>
                  </h1>
                <Timeline />
            </div>
        )
    }

}

export default  TimelinePage
