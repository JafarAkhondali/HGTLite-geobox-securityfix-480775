import 'bootstrap/dist/css/bootstrap.css';
import '../style/styles.scss'
import '../style/toggle-map-btn.scss';


import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import classNames from 'classnames';

import {Navbar, Nav, NavItem, NavDropdown, MenuItem,Breadcrumb} from 'react-bootstrap';


import userNameNavAction from '../action/userNameNavAction'

class ToggleMapButton extends React.Component {

    constructor() {
        super()
    }

    render() {

        // let {stateLogged,stateUserName,actions} = this.props;
        // console.log('=====',this.props)
        //
        // let accountMenuItemClass = classNames({
        //     'display-none':!stateLogged
        // })

        return (
            <div className="toggle-map-btn">
                <div className="floating-menu-btn">
                   <div className="floating-menu-toggle-wrap">
                     <div className="floating-menu-toggle">
                        {/*<i className="fa fa-bars fa-blue fa-2x opacity75"></i> */}
                       <i className="fa fa-map-o fa-blue fa-2x opacity75"></i>
                     </div>
                   </div>
                 </div>
            </div>
    );
    }

}

// const mapStateToProps = state => ({
//     stateLogged: state.userNameNav.logged,
//     stateUserName:state.userNameNav.userName
//
// });
//
// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(userNameNavAction, dispatch)
//
// });

// export default connect(mapStateToProps,mapDispatchToProps)(CurrentDir);
export default  ToggleMapButton;
