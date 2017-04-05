import 'bootstrap/dist/css/bootstrap.css';
import '../style/styles.scss';
import '../style/login.scss';

import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames'
import {Grid, Row, Col, Button, FormGroup, InputGroup, FormControl, Glyphicon} from 'react-bootstrap'

import loginAction from '../action/loginAction';

import {formatDate} from '../script/DatetimeFormat';

class LoginPage extends Component {

    constructor() {
        super()

        this.handleLoginFormSubmit = this.handleLoginFormSubmit.bind(this);
        this.handleForgetPassword = this.handleForgetPassword.bind(this);
        this.handleSignupFormSubmit = this.handleSignupFormSubmit.bind(this);

    }

    handleLoginFormSubmit(event){
        event.preventDefault();

        let loginFormData = new FormData();

        let lName = this.loginNameInput.value;
        let lPass = this.loginPassInput.value;

        // console.log(lName,lPass);

        loginFormData.append('user_name',lName);
        loginFormData.append('user_password',lPass);

        this.props.actions.fetchLogin(loginFormData);

    }


    handleSignupFormSubmit(event){
        event.preventDefault();

        // alert('register')

        let rFormData = new FormData();
        let rName = this.rNameInput.value;
        let rPass = this.rPassInput.value;
        let rPass2  = this.rPass2Input.value;
        let rEmail = this.rEmailInput.value;

        if(rPass!=rPass2){
            alert('两次输入的密码不相等');
            return;
        }

        rFormData.append('user_name',rName);
        rFormData.append('user_password',rPass);
        rFormData.append('user_email',rEmail);
        rFormData.append('register_date',formatDate());


        this.props.actions.fetchRegister(rFormData);

    }


    handleForgetPassword(event){
        event.preventDefault();
        event.stopPropagation();
        alert('请从以下链接联系官网客服\nhttp://www.dx-tech.com/index.asp');
    }

    render() {

        let {loginResult,registerResult,actions}  = this.props;

        var miniCardClassSignup = classNames(
            'card-block',
            'mini-card-block',
            {
            'visible-false':registerResult.registerCode
            }
        )

        var miniCardClassLogin = classNames(
            'card-block',
            'mini-card-block',
            {
            'visible-false':loginResult.loginCode
            }
        )

        // console.log(this.props.registerResult  )


        return (
            <div className="container">

                <div  className="position-absolute text-align-center to-top18" >

                <Grid  >


                     <Row >
                        <Col   md={5}>
                            <div className="card-block">
                                 <form id="signupForm" onSubmit = {this.handleSignupFormSubmit}>
                                   <h1><span className="letter-space-8"> 注册  </span></h1>
                                   <input name="rName" type="text" placeholder="用户名" pattern="^[\w]{3,16}$" ref={(rName)=>this.rNameInput=rName}  required="required" className="input pass"/>
                                   <input name="rPassword" type="password" placeholder="设置密码" ref={(rPass)=>this.rPassInput=rPass} required="required" className="input pass"/>
                                   <input name="rPassword2" type="password" placeholder="确认密码" ref={(rPass2)=>this.rPass2Input=rPass2} required="required" className="input pass"/>
                                   <input name="rEmail" type="email" placeholder="邮箱"  ref={(rEmail)=>this.rEmailInput=rEmail} className="input pass"/>
                                   <input type="submit" defaultValue="注  册" className="inputButton"/>
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
                                <input name="userName" type="text" placeholder="用户名或邮箱" className="input pass" autoFocus="autofocus" ref={(lName)=>this.loginNameInput=lName}/>
                                <input name="userPassword" type="password" placeholder="密码" required="required" className="input pass" ref={(lPass)=>this.loginPassInput=lPass}/>
                                <input type="submit" defaultValue="登  录" className="inputButton" />
                                <div className="text-center">
                                    <a href="#" onClick={this.handleForgetPassword}>忘记密码</a>
                                </div>
                              </form>
                            </div>
                        </Col>
                        <Col   md={1}></Col>

                      </Row>

                      <Row >
                         <Col   md={5}>
                             <div className={miniCardClassSignup}>
                                  {registerResult.msg}
                            </div>


                          </Col>
                         <Col   md={1}></Col>
                         <Col   md={5}>
                             <div  className={miniCardClassLogin}>
                               {loginResult.msg}
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
    loginResult: state.login.loginResult,
    registerResult:state.register.registerResult
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(loginAction, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
