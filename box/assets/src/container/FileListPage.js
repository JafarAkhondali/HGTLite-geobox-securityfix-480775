import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import React, {Component} from 'react';
import {Link} from 'react-router';

import FileTopIndicator from '../component/FileTopIndicator'
import FileList from '../component/FileList'

class FileListPage extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="container">
                <FileTopIndicator/>
                <FileList/>
            </div>
        )
    }

}

export default FileListPage