import 'bootstrap/dist/css/bootstrap.css';
import '../style/styles.scss'

import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import classNames from 'classnames';

import {Modal,Button} from 'react-bootstrap';

import floatActionModalAction from '../action/floatActionModalAction';

class FloatActionModal extends React.Component {

    constructor() {
        super();
        // this.handleFABModalFormSubmit = this.handleFABModalFormSubmit.bind(this);
        this.handleFABInputChange = this.handleFABInputChange.bind(this);
        this.handleFABModalOKBtnClick = this.handleFABModalOKBtnClick.bind(this);
 }

    handleFABModalOKBtnClick(event){
        let fabInputValue = this.props.stateFABModal.fabModalInputValue;
        console.log('点了确定',fabInputValue);
        // console.log(event.target.dataset.order);

        switch(this.props.stateFABModal.fabModalType){
            case 'edit':
                console.log('提交OK');
                let paramsObj=this.props.stateFABModal.fabModalOKParams;
                paramsObj.newName=fabInputValue;
                this.props.floatActionModalActions.setFABModalOKParams(paramsObj);
                this.props.floatActionModalActions.renameFileOrDir(this.props.stateFABModal.fabModalOKParams);
                break;

            default:
                console.log('没有找到提交modal的方法');
        }


        // let selectedDirId=event.target.dataset.did;
        this.props.floatActionModalActions.hideFABModal();
    }

    handleFABInputChange(event){
        console.log('获取FABModal Input的内容');

        this.props.floatActionModalActions.setFABModalInputValue(event.target.value);

    }


    render() {

        let {stateFABModal,floatActionModalActions} = this.props;

        // console.log('=====',this.props);


        let cancelBtnClass  = classNames('btn','btn-default','to-m-right-16',stateFABModal.showModalCancelBtn ?'visible-true':'visible-false' );

        let inputClass  = classNames('to-m-left-18','width-256',{
                'border-none': !stateFABModal.showModalInputBorder
        });


        return (
            <Modal show={stateFABModal.showFloatActionModal} onHide={floatActionModalActions.hideFABModal}>
                 <Modal.Header closeButton>
                   <Modal.Title>{stateFABModal.fabModalTitle}</Modal.Title>
                 </Modal.Header>


                     <Modal.Body>
                         <div className="fab-modal-content display-table margin-auto ">
                             <div className="display-table-cell vertical-align-middle ">
                                     <span className='font-file-list'>{stateFABModal.fabModalInputSpan}</span>
                                     <input type="text" value={stateFABModal.fabModalInputValue}  onChange={this.handleFABInputChange} className={inputClass} />
                             </div>
                        </div>
                     </Modal.Body>

                     <Modal.Footer>
                         <button  className = {cancelBtnClass} onClick={floatActionModalActions.hideFABModal}> 取消 </button>
                         <button  className = "btn btn-upload " onClick={this.handleFABModalOKBtnClick}> 确定 </button>
                     </Modal.Footer>
           </Modal>
    );
    }
}

const mapStateToProps = state => ({
    stateFABModal: state.floatActionModal

});

const mapDispatchToProps = dispatch => ({
    floatActionModalActions: bindActionCreators(floatActionModalAction, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(FloatActionModal);
// export default  FloatActionModal;
