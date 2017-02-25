import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import React, {Component} from 'react';
import {Link} from 'react-router';

import BoxList from '../component/BoxList'

  class FileListPage extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="container">
                <h1>文件列表 lists</h1>
                <BoxList/>
            </div>
        )
    }

}

export default FileListPage