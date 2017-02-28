import React, {Component} from 'react'
import {Link} from 'react-router';
import Dropzone from 'react-dropzone'

class FileDropbox extends Component {
    constructor() {
        super()
    }

    onDrop() {
        console.log('接收到的文件Received files: ', files);
    }

    render() {
        return (
            <div>
                <Dropzone onDrop={this.onDrop.bind(this)}>
                    <div>可以把文件拖到这里</div>
                </Dropzone>
            </div>
        );
    }
}

export default FileDropbox