import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {Link} from 'react-router';
import {
    Grid,
    Row,
    Col,
    Button,
    FormGroup,
    InputGroup,
    FormControl,
    ControlLabel,
    Modal,
    FieldGroup
} from 'react-bootstrap'

import '../style/styles.scss'
import '../style/file-uploader.scss'

class FileTopIndicator extends Component {

    constructor() {
        super()
        this.state = {
            showModal: false,
            value: ''
        }
    }

    close() {
        this.setState({showModal: false});
    }

    open() {
        this.setState({showModal: true});
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }


    // openUploadModel (event) {
    //     console.log('hello, uploader1')
    //     alert('hello, uploader')
    // }


    render() {
        return (
            <div>
                <Grid>
                    <Row >
                        <Col md={1}> <Button bsClass="btn btn-all-files opacity50">所有文件</Button></Col>
                        <Col md={6}> </Col>
                        <Col md={2}>
                            <Button id="btnUpload" bsClass="btn btn-upload to-m-left8" onClick={this.open.bind(this)}>上传</Button>
                            <Button id="btnNew" bsClass="btn btn-default to-m-left20">新建</Button>
                        </Col>
                        <Col md={2}> <FormGroup>
                            <InputGroup>
                                <InputGroup.Button>
                                    <Button>搜索</Button>
                                </InputGroup.Button>
                                <FormControl type="text" placeholder="输入文件名"/>
                            </InputGroup>
                        </FormGroup>
                        </Col>
                        <Col md={1}></Col>
                    </Row>
                </Grid>


                <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title> <span className="font-file-name">上传文件到云盘</span></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <form id="fileUploadForm">
                            <div><span className="font-file-list">上传到： &frasl;</span></div>

                            <div>
                                <label htmlFor="fileUploadInput" className="btn btn-default btn-upload">
                                    <i className="fa fa-plus "></i> 添加文件
                                </label>
                                <input type="file" style={{display: 'none'}} id="fileUploadInput" name="fileUploadInput"
                                       multiple="multiple"/>
                            </div>
                            <div>
                                <div id="dropbox">
                                    <span className="font-file-list">
                                        可以把文件拖到这里
                                    </span>

                                </div>
                            </div>
                        </form>

                    </Modal.Body>
                    <Modal.Footer id="uploadFooter">
                        <Button onClick={this.close.bind(this)}>取消</Button>
                        <Button onClick={this.close.bind(this)} bsClass="btn btn-upload ">上传</Button>

                    </Modal.Footer>
                </Modal>

            </div>

        )
    }

}


export default FileTopIndicator