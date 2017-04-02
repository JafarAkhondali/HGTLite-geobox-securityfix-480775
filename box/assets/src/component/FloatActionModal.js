import 'bootstrap/dist/css/bootstrap.css';
import '../style/styles.scss'

import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import classNames from 'classnames';

import {Modal,Button} from 'react-bootstrap';


import floatActionModalAction from '../action/floatActionModalAction'



class FloatActionModal extends React.Component {

    constructor() {
        super()
this.handleFABModalFormSubmit = this.handleFABModalFormSubmit.bind(this)
 }

    handleFABModalFormSubmit(event){
        console.log('提交了表单')
        // console.log(event.target.dataset.order)

        // let selectedDirId=event.target.dataset.did;
        this.props.floatActionModalActions.hideFABModal();
    }


    render() {

        let {stateShowFABModal,floatActionModalActions} = this.props;
        // console.log('=====',this.props)
        return (
            <Modal show={stateShowFABModal} onHide={floatActionModalActions.hideFABModal}>
                 <Modal.Header closeButton>
                   <Modal.Title>动作类型</Modal.Title>
                 </Modal.Header>

                 <form onSubmit = {this.handleFABModalFormSubmit} >

                     <Modal.Body>
                       <h4>编辑操作</h4>

                     </Modal.Body>

                     <Modal.Footer>
                         <button  className = "btn btn-upload "> 取消 </button>
                         <button type = "submit" className = "btn btn-upload " > 确定 </button>
                     </Modal.Footer>
                 </form>
           </Modal>
    );
    }
}

const mapStateToProps = state => ({
    stateShowFABModal: state.floatActionModal.showFloatActionModal
});

const mapDispatchToProps = dispatch => ({
    floatActionModalActions: bindActionCreators(floatActionModalAction, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(FloatActionModal);
// export default  FloatActionModal;
