import 'bootstrap/dist/css/bootstrap.css';
import './TopNavbar.scss';
import '../style/styles.scss'

import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import classNames from 'classnames';

import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';


import userNameNavAction from '../action/userNameNavAction'

class TopNavbar extends React.Component {

    constructor() {
        super()
    }

    render() {

        let {stateLogged,stateUserName,actions} = this.props;
        // console.log('=====',this.props)

        let accountMenuItemClass = classNames({
            'display-none':!stateLogged
        })

        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">时空云盘</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">收藏夹</NavItem>
                        <NavDropdown eventKey={2} title="文件分类" id="basic-nav-dropdown-classify">
                            <MenuItem eventKey={2.1}>ArcGIS</MenuItem>
                            <MenuItem eventKey={2.2}>CAD</MenuItem>
                            <MenuItem eventKey={2.3}>矢量</MenuItem>
                            <MenuItem eventKey={2.4}>文档</MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey={2.5} href="/#/search">高级搜索</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={3} title="工具箱" id="basic-nav-dropdown-kits">
                            <MenuItem eventKey={3.1}  href="/#/timeline">文件时间轴</MenuItem>
                            <MenuItem eventKey={3.2}>地理标签</MenuItem>
                            <MenuItem eventKey={3.3}>文件报告</MenuItem>
                            <MenuItem eventKey={3.4}>回收站</MenuItem>
                            <MenuItem eventKey={3.5}>分享清单</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>

                        <NavDropdown eventKey={4} title={stateUserName} id="basic-nav-dropdown-user"  href="/#/login" >
                            <MenuItem eventKey={4.1}  href="/#/account"  className={accountMenuItemClass}>用户设置</MenuItem>
                            <MenuItem eventKey={4.2} href="/#/welcome"  className={accountMenuItemClass} onClick={actions.logOut}>退出</MenuItem>
                            <MenuItem eventKey={4.3} href="/#/about">关于</MenuItem>

                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}

const mapStateToProps = state => ({
    stateLogged: state.userNameNav.logged,
    stateUserName:state.userNameNav.userName

});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(userNameNavAction, dispatch)

});

export default connect(mapStateToProps,mapDispatchToProps)(TopNavbar);
