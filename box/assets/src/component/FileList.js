import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import   './FileList.scss';
import   '../style/styles.scss';

import React, {Component} from 'react';
import {Link} from 'react-router';

import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {Grid, Row, Col, Button, FormGroup, InputGroup, FormControl} from 'react-bootstrap'

import HRLine from './HRLine'

class FileList extends Component {

    constructor() {
        super()
    }

    render() {


        return (
            <div>

                <Grid>
                    <Row >
                        <Col md={1}>  </Col>
                        <Col md={2}>文件名 </Col>
                        <Col md={5}> </Col>
                        <Col md={1}> 大小</Col>
                        <Col md={1}>类型 </Col>
                        <Col md={2}> 修改时间</Col>
                    </Row>
                </Grid>
                <HRLine/>

                <Grid>
                    <Row >
                        <Col md={1}>图标1 </Col>
                        <Col md={2}><span className="font-file-name"> 老河口地理国情基础数据 </span></Col>
                        <Col md={5}> </Col>
                        <Col md={1}> 12.2 GB</Col>
                        <Col md={1}>文件夹 </Col>
                        <Col md={2}> 2017-02-21</Col>
                    </Row>
                </Grid>
                <HRLine/>

                <Grid>
                    <Row >
                        <Col md={1}>图标2 </Col>
                        <Col md={2}><span className="font-file-name"> 武汉市地图 </span></Col>
                        <Col md={5}> </Col>
                        <Col md={1}> 12.2 GB</Col>
                        <Col md={1}>文件夹 </Col>
                        <Col md={2}> 2017-02-21</Col>
                    </Row>
                </Grid>
                <HRLine/>


            </div>

        );
    }


}

export default FileList