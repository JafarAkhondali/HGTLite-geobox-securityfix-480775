import 'bootstrap/dist/css/bootstrap.css';
import '../style/styles.scss'

import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import classNames from 'classnames';

// import {Navbar, Nav, NavItem, NavDropdown, MenuItem,Breadcrumb} from 'react-bootstrap';


// import currentDirAction from '../action/currentDirAction'

class FloatingActionsModal extends React.Component {

    constructor() {
        super()
        // this.handleItemClick = this.handleItemClick.bind(this);
    }

    // handleItemClick(event){
    //     console.log('hello')
    //     // console.log(event.target.dataset.order)
    //
    //     let selectedDirId=event.target.dataset.did;
    //     this.props.actions.removeTailDir(selectedOrder);
    // }


    render() {

        // let {stateDirList,actions} = this.props;
        // console.log('=====',this.props)
        return (
                <input type="text" className="width-400" placeholder="请输入上传位置，如'/目录id1/目录id2'，默认上传到当前目录'"  />
    );
    }
}

// const mapStateToProps = state => ({
//     stateDirList: state.currentDir.dirList
// });
//
// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(currentDirAction, dispatch)
// });

// export default connect(mapStateToProps,mapDispatchToProps)(UploadLocationPicker);
export default  FloatingActionsModal;
