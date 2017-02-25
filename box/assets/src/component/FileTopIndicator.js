import React, {Component} from 'react';
import {Link} from 'react-router';
import {Button,FormGroup,InputGroup,FormControl } from 'react-bootstrap'

class FileTopIndicator extends Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Button>所有文件</Button>
                <Button>新建</Button>
                <Button>上传</Button>
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Button>
                            <Button>搜索</Button>
                        </InputGroup.Button>
                        <FormControl type="text" placeholder="输入文件名"/>
                    </InputGroup>
                </FormGroup>
            </div>

        )
    }

}

export default FileTopIndicator