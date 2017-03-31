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
        console.log(event.target.dataset.did)

        let selectedDirId=event.target.dataset.did;

        this.props.actions.fetchSelectedDir(selectedDirId);

    }

    getBreadcrumbItems(items) {
        // console.log("获取文件数组："+files)
        let data = [];
        items.forEach(item => {
            data.push(<Breadcrumb.Item  data-did={item[1]} onClick={this.handleItemClick}  key={item[1]}>
               {item[0]}
             </Breadcrumb.Item>)
        });

        if (!data.length) {
            data.push(<div></div>);
        }

        return data;
    }


    render() {

        let {stateDirList,actions} = this.props;
        // console.log('=====',this.props)
        //
        // let accountMenuItemClass = classNames({
        //     'display-none':!stateLogged
        // })

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
