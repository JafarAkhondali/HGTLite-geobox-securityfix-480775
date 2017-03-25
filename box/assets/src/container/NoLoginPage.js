
import React, {Component} from 'react';
import {Link} from 'react-router';
import {Grid, Row, Col, Button, FormGroup, InputGroup, FormControl, Glyphicon} from 'react-bootstrap'


import 'bootstrap/dist/css/bootstrap.css';
import '../style/styles.scss'

class NoLoginPage extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="container ">

                <div  className="position-absolute text-align-center to-top36" >

                <Grid >

                    <Row className="height42">

                       <Col   md={2}></Col>
                       <Col   md={8}>
                                <span className="font-file-list font-size-jumbotron" >矢量、影像、文档，一盘搞定</span>
                       </Col>
                       <Col   md={2}></Col>
                     </Row>

                     <Row className="height-180 opacity75">

                      </Row>

                     <Row className="show-grid">
                        <Col   md={1}></Col>
                        <Col   md={4}> <Button bsSize="large"  block href="/#/login">注册</Button></Col>
                        <Col   md={2}></Col>
                        <Col   md={4}> <Button bsStyle="success" bsSize="large" block href="/#/login">登录</Button></Col>
                        <Col   md={1}></Col>
                      </Row>

                  </Grid>
              </div>

            </div>
        )
    }

}

export default  NoLoginPage
