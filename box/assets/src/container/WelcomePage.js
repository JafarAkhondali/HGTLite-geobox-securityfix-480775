
import 'bootstrap/dist/css/bootstrap.css';
import '../style/styles.scss'

import React, {Component} from 'react';
import {Link} from 'react-router';
import {Grid, Row, Col, Button, FormGroup, InputGroup, FormControl, Glyphicon} from 'react-bootstrap'




class WelcomePage extends Component {
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
                                <span className="font-file-list font-size-40" >矢量、影像、文档，一盘搞定</span>
                       </Col>
                       <Col   md={2}></Col>
                     </Row>

                     <Row className="height-180 opacity75">

                      </Row>

                     <Row >
                        <Col   md={1}></Col>
                        <Col   md={4}>
                             <Button bsSize="large"  block href="/#/login"  style={{backgroundColor:'#eee',borderRadius:'0px',border:'none',color:'#777'}}>
                                 <span  className="letter-space-8">注册</span>
                             </Button>

                         </Col>
                        <Col   md={2}></Col>
                        <Col   md={4}>
                            <Button bsStyle="success" bsSize="large" block href="/#/login"  style={{backgroundColor:'#34a6ff',borderRadius:'0px',border:'none',opacity:'0.80'}}>
                                <span  className="letter-space-8">登录</span>
                            </Button>

                        </Col>
                        <Col   md={1}></Col>
                      </Row>

                  </Grid>
              </div>

            </div>
        )
    }

}

export default  WelcomePage
