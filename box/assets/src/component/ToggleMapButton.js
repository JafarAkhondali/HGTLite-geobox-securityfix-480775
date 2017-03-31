import 'bootstrap/dist/css/bootstrap.css';
import '../style/styles.scss'
import '../style/toggle-map-btn.scss';


import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import classNames from 'classnames';

import toggleMapAction from '../action/toggleMapAction'

class ToggleMapButton extends React.Component {

    constructor() {
        super()
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick(){
        this.props.actions.toggleMapList();
    }

    render() {

        let {stateVisibleStyle,stateToggleStyle,actions} = this.props;
        // console.log('=====',this.props)

        let visibleClass = classNames(stateVisibleStyle);

        let iconClass = classNames('fa','fa-blue','fa-2x','opacity75',stateToggleStyle);

        return (
            <div className={visibleClass} onClick={this.handleToggleClick}>
                {/*<div className="toggle-map-btn "> */}
                <div className="floating-menu-btn">
                   <div className="floating-menu-toggle-wrap">
                     <div className="floating-menu-toggle">
                        {/*<i className="fa fa-bars fa-blue fa-2x opacity75"></i> */}
                       <i className={iconClass}></i>
                     </div>
                   </div>
                 </div>
            </div>
    );
    }

}

const mapStateToProps = state => ({
    stateVisibleStyle: state.toggleMap.visibleStyle,
    stateToggleStyle:state.toggleMap.toggleStyle

});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(toggleMapAction, dispatch)

});

export default connect(mapStateToProps,mapDispatchToProps)(ToggleMapButton);
// export default  ToggleMapButton;
