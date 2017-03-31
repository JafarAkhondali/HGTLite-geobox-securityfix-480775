import 'bootstrap/dist/css/bootstrap.css';
import '../style/styles.scss'

import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import classNames from 'classnames';

// import {Navbar, Nav, NavItem, NavDropdown, MenuItem,Breadcrumb} from 'react-bootstrap';


// import currentDirAction from '../action/currentDirAction'

class UploadLocationPicker extends React.Component {

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
                <input type="text" className="width-360" placeholder="请输入上传位置，默认为根目录，如'/目录id1/目录id2'"  ref={(loc)=>this.uploadLocInput=loc}/>
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
export default  UploadLocationPicker;
