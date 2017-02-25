import React, {Component} from 'react';
import {Link} from 'react-router';
import {Grid, Row, Col, Button, FormGroup, InputGroup, FormControl} from 'react-bootstrap'

import '../style/styles.scss'

class FileTopIndicator extends Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row >
                        <Col md={1}> <Button>所有文件</Button></Col>
                        <Col md={6}> </Col>
                        <Col md={2}>
                            <Row >
                                <Col md={6}><Button bsClass="btn btn-upload">上传</Button> </Col>
                                <Col md={6}><Button>新建</Button> </Col>
                            </Row>
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


            </div>

        )
    }

}

export default FileTopIndicator