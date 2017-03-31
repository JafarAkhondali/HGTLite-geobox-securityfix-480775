import 'bootstrap/dist/css/bootstrap.css';
import '../style/styles.scss'

import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import classNames from 'classnames';

import {Navbar, Nav, NavItem, NavDropdown, MenuItem,Breadcrumb} from 'react-bootstrap';


import currentDirAction from '../action/currentDirAction'

class CurrentDir extends React.Component {

    constructor() {
        super()
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(event){

        console.log('hello')
        // console.log(event.target.dataset.order)

        let selectedDirId=event.target.dataset.did;
        let selectedOrder=event.target.dataset.order;

        this.props.actions.removeTailDir(selectedOrder);

        this.props.actions.fetchSelectedDir(selectedDirId);

    }

    getBreadcrumbItems(items) {
        // console.log("获取面包屑数组："+items)
        let data = [];
        items.forEach(item => {
            data.push(<Breadcrumb.Item  data-did={item[1]} data-order={items.indexOf(item)} onClick={this.handleItemClick}  key={item[1]||Math.random()}>
               {item[0]}
             </Breadcrumb.Item>)
        });

        if (!data.length) {
            data.push(<div key={Math.random()}></div>);
        }

        return data;
    }


    render() {

        let {stateDirList,actions} = this.props;
        // console.log('=====',this.props)
        return (
                <Breadcrumb >
                 {this.getBreadcrumbItems(stateDirList)}
                </Breadcrumb>
    );
    }
}

const mapStateToProps = state => ({
    stateDirList: state.currentDir.dirList
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(currentDirAction, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(CurrentDir);
// export default  CurrentDir;
