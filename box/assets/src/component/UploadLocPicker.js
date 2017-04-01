import 'bootstrap/dist/css/bootstrap.css';
import '../style/styles.scss'

import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import classNames from 'classnames';


import uploadLocPickerAction from '../action/uploadLocPickerAction';


class UploadLocPicker extends React.Component {

    constructor() {
        super()
        this.handleUploadLocInputChange=this.handleUploadLocInputChange.bind(this)
}

    handleUploadLocInputChange(event){
        this.props.actions.setInputUploadLoc(event.target.value);

    }


    render() {

        let {stateUploadLoc,actions} = this.props;
        // console.log('=====',this.props)
        return (
                <input type="text" value={stateUploadLoc} className="width-400" placeholder="请输入上传位置，如'/目录id1/目录id2'，默认上传到当前目录"  onChange={this.handleUploadLocInputChange} />
    );
    }
}

const mapStateToProps = state => ({
    stateUploadLoc: state.uploadLocPicker.uploadLoc
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(uploadLocPickerAction, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(UploadLocPicker);
// export default  UploadLocPicker;
