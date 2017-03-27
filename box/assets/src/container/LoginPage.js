import 'bootstrap/dist/css/bootstrap.css';
import '../style/styles.scss';
import '../style/login.scss';

import React, {Component} from 'react';
import {Link} from 'react-router';
import {Grid, Row, Col, Button, FormGroup, InputGroup, FormControl, Glyphicon} from 'react-bootstrap'

import loginAction from '../action/loginAction';


class LoginPage extends Component {
    constructor() {
        super()

        this.handleLoginFormSubmit = this.handleLoginFormSubmit.bind(this);


    }


    handleLoginFormSubmit(event){
        event.preventDefault();

        let loginFormData = new FormData();

        let lName = this.loginNameInput.value;
        let lPass = this.loginPassInput.value;

        console.log(lName,lPass);

        loginFormData.append('user_name',lName);
        loginFormData.append('user_password',lPass);




    }

    render() {

        let {loginResult,actions}  = this.props;

        return (
            <div className="container">

                <div  className="position-absolute text-align-center to-top18" >

                <Grid  >


                     <Row >
                        <Col   md={5}>
                            <div className="card-block">
                                 <form id="signupForm" method="post" action="/signup">
                                   <h1><span className="letter-space-8"> 注册  </span></h1>
                                   <input name="user[name]" type="text" placeholder="用户名" pattern="^[\w]{3,16}$" autoFocus="autofocus" required="required" className="input pass"/>
                                   <input name="user[password]" type="password" placeholder="设置密码" required="required" className="input pass"/>
                                   <input name="user[password2]" type="password" placeholder="确认密码" required="required" className="input pass"/>
                                   <input name="user[email]" type="email" placeholder="邮箱" className="input pass"/>
                                   <input type="submit" defaultValue="提交" className="inputButton"/>
                                   <div className="text-center">

                                   </div>
                                 </form>
                               </div>


                         </Col>
                        <Col   md={1}></Col>
                        <Col   md={5}>
                            <div  className="card-block">
                              <form id="loginForm" onSubmit={this.handleLoginFormSubmit} >
                                <h1><span className="letter-space-8"> 登录  </span></h1>
                                <input name="userName" type="text" placeholder="用户名或邮箱" className="input pass" ref={(lName)=>this.loginNameInput=lName}/>
                                <input name="userPassword" type="password" placeholder="密码" required="required" className="input pass" ref={(lPass)=>this.loginPassInput=lPass}/>
                                <input type="submit" defaultValue="登录" className="inputButton" />
                                <div className="text-center">
                                    <a href="#"  >忘记密码</a>
                                </div>
                              </form>
                            </div>
                        </Col>
                        <Col   md={1}></Col>

                      </Row>

                      <Row >
                         <Col   md={5}>
                             <div className="card-block mini-card-block">
                                  注册结果
                                </div>


                          </Col>
                         <Col   md={1}></Col>
                         <Col   md={5}>
                             <div  className="card-block mini-card-block">
                               登录结果{loginResult.msg}
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

const mapStateToProps = state => ({
    loginResult: state.login.loginResult
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(loginActions, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
