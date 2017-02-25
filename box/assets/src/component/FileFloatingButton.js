import React, {Component} from 'react';
import {Link} from 'react-router';
import {Button} from 'react-bootstrap'

class FileFloatingButton extends Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Button>标签</Button>
                <Button>分享</Button>
                <Button>重命名</Button>
                <Button>下载</Button>
            </div>

        )
    }

}

export default FileFloatingButton