import 'bootstrap/dist/css/bootstrap.css';
import './TopNavbar.scss';

import React, {Component} from 'react';
import {Link} from 'react-router';

import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class TopNavbar extends Component {

    constructor() {
        super()
    }

    render() {
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
                        <NavDropdown eventKey={2} title="文件分类" id="basic-nav-dropdown">
                            <MenuItem eventKey={2.1}>ArcGIS</MenuItem>
                            <MenuItem eventKey={2.2}>CAD</MenuItem>
                            <MenuItem eventKey={2.3}>矢量</MenuItem>
                            <MenuItem eventKey={2.4}>文档</MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey={2.5} href="/#/search">高级搜索</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={3} title="工具箱" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>文件时间轴</MenuItem>
                            <MenuItem eventKey={3.2}>地理标签</MenuItem>
                            <MenuItem eventKey={3.3}>文件报告</MenuItem>
                            <MenuItem eventKey={3.4}>回收站</MenuItem>
                            <MenuItem eventKey={3.5}>分享清单</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/#/accounts">
                            用户设置
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}

export default TopNavbar
