import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
import   './FileList.scss';

import React, {Component} from 'react';
import {Link} from 'react-router';

import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {Grid, Row, Col, Button, FormGroup, InputGroup, FormControl, Glyphicon} from 'react-bootstrap'

import HRLine from './HRLine'

import   '../style/styles.scss';


class FileList extends Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div id="boxList">

                <Grid>
                    <Row >
                        <Col md={3}><i className="fa  fa-2x  "></i> <span className="to-m-left16">文件名</span> </Col>
                        <Col md={5}> </Col>
                        <Col md={1}> 大小</Col>
                        <Col md={1}>类型 </Col>
                        <Col md={2}> 修改时间</Col>
                    </Row>
                </Grid>
                <HRLine/>

                <Grid>
                    <Row >
                        <Col md={3}><i className="fa fa-folder-open-o fa-2x fa-blue opacity75"></i>
                        <a className="font-file-name to-m-left6 " href="https://www.baidu.com"> 老河口地理国情基础数据 </a> </Col>
                        <Col md={5}> </Col>
                        <Col md={1}> 12.2 GB</Col>
                        <Col md={1}>文件夹 </Col>
                        <Col md={2}> 2017-02-21</Col>
                    </Row>
                </Grid>
                <HRLine/>

                <Grid>
                    <Row >
                        <Col md={3}><i className="fa fa-file-text-o fa-2x fa-blue opacity75"></i>
                            <a className="font-file-name to-m-left6" href="https://www.baidu.com"> 武汉市地图 </a></Col>
                        <Col md={2}> </Col>
                        <Col md={2}>
                            <span>
                            <i className="fa fa-tag fa-1x fa-blue opacity75 to-p-left-18"></i>
                            <i className="fa fa-share-alt fa-1x fa-blue opacity75 to-p-left-18"></i>
                            <i className="fa fa-edit fa-1x fa-blue opacity75 to-p-left-18"></i>
                            <i className="fa fa-download fa-1x fa-blue opacity75 to-p-left-18"></i>
                            </span>
                        </Col>
                        <Col md={1}> </Col>
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