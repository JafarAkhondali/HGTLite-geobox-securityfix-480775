
import React, {Component} from 'react';
import {Link} from 'react-router';
import {Grid, Row, Col, Button, FormGroup, InputGroup, FormControl, Glyphicon} from 'react-bootstrap'


import 'bootstrap/dist/css/bootstrap.css';
import '../style/styles.scss'
import '../style/login.scss'

class LoginPage extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="container">

                <div  className="position-absolute text-align-center to-top18" >

                <Grid  >


                     <Row >
                        <Col   md={5}>
                            <div className="card-block">
                                 <form id="signup" method="post" action="/signup">
                                   <h1><span className="letter-space-8"> 注册  </span></h1>
                                   <input name="user[name]" type="text" placeholder="用户名" pattern="^[\w]{3,16}$" autoFocus="autofocus" required="required" className="input pass"/>
                                   <input name="user[password]" type="password" placeholder="设置密码" required="required" className="input pass"/>
                                   <input name="user[password2]" type="password" placeholder="确认密码" required="required" className="input pass"/>
                                   <input name="user[email]" type="email" placeholder="邮箱" className="input pass"/>
                                   <input type="submit" value="提交" className="inputButton"/>
                                   <div className="text-center">

                                   </div>
                                 </form>
                               </div>

                         </Col>
                        <Col   md={1}></Col>
                        <Col   md={5}>
                            <div  className="card-block">
                              <form id="signup" method="post" action="/signup">
                                <h1><span className="letter-space-8"> 登录  </span></h1>
                                <input name="user[email]" type="text" placeholder="用户名或邮箱" className="input pass"/>
                                <input name="user[password]" type="password" placeholder="密码" required="required" className="input pass"/>
                                <input type="submit" value="登录" className="inputButton"/>
                                <div className="text-center">
                                        {/*  <a href="#" id="">忘记密码</a> */}
                                </div>
                              </form>
                            </div>
                        </Col>
                        <Col   md={1}></Col>

                      </Row>

                  </Grid>
              </div>

            </div>
        )
    }

}

export default  LoginPage
