import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import React, {Component} from 'react';
import {Link} from 'react-router';

import FileTopIndicator from '../component/FileTopIndicator'
import FileList from '../component/FileList'

import '../style/styles.scss'

class FileListPage extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="container bg-white">
                <div className="height-20"></div>
                <div className="font-file-list">
                    <FileTopIndicator/>
                    <FileList/>
                </div>
            </div>
        )
    }

}

export default FileListPage