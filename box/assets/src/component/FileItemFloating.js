import 'font-awesome/css/font-awesome.css'
import   '../style/styles.scss';

import React  from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import classNames from 'classnames';
import {toastr} from 'react-redux-toastr';

import BASE_URL from '../script/BaseUrl';

import floatActionModalAction from '../action/floatActionModalAction';
import currentDirAction from '../action/currentDirAction';


// 添加标签、分享、重命名、移动四大功能共用一个modal
class FileItemFloating extends React.Component {

    constructor(){
        super()

        this.handleFloatStarClick=this.handleFloatStarClick.bind(this);
        this.handleFloatTagClick=this.handleFloatTagClick.bind(this);
        this.handleFloatShareClick=this.handleFloatShareClick.bind(this);
        this.handleFloatEditClick=this.handleFloatEditClick.bind(this);
        this.handleFloatMoveClick=this.handleFloatMoveClick.bind(this);
        this.handleFloatDownloadClick=this.handleFloatDownloadClick.bind(this);

    }

    faIconFactory(faName) {
        let floatingIconClass = classNames(
            'fa',
            faName,
            'fa-1x',
            'fa-blue ',
            'opacity75',
            'to-p-left-18'
        )
        return floatingIconClass;
    }

    handleFloatStarClick(event){

        console.log('star')
        console.log(event.target.dataset.fid);

    }
    handleFloatTagClick(event){
        console.log('star')
    }
    handleFloatShareClick(event){
        console.log('star')
    }

    /**
    * 文件编辑浮动按钮事件
    */
    handleFloatEditClick(event){

        console.log('edit');

        let modalType = event.target.dataset.modaltype;
        let fileType = event.target.dataset.ftype;
        let fileName = event.target.dataset.fname;
        let fileId = event.target.dataset.fid;
        let parentId = event.target.dataset.pid;

        console.log('=====编辑modal接收',modalType,fileType,fileName,fileId,parentId);

        let fileOrDir = fileType=='dir'?'文件夹':'文件';

        // 设置modal显示内容
        this.props.floatActionModalActions.setFABModalTitle('重命名'+fileOrDir);
        this.props.floatActionModalActions.setFABModalInputSpan('请输入新名称');
        this.props.floatActionModalActions.setFABModalInputValue(fileName);

        // 设置文件编辑参数
        this.props.floatActionModalActions.setFABModalType(modalType);
        let paramsObj={};
        paramsObj.id=fileId;
        paramsObj.type=fileType;
        paramsObj.newName=fileName;
        paramsObj.parentId=parentId;
        this.props.floatActionModalActions.setFABModalOKParams(paramsObj);

        this.props.floatActionModalActions.showFABModal();

    }

    /**
    *  文件移动浮动按钮事件
    */
    handleFloatMoveClick(event){

        console.log('move');

        let modalType = event.target.dataset.modaltype;
        let fileType = event.target.dataset.ftype;
        let fileName = event.target.dataset.fname;
        let fileId = event.target.dataset.fid;
        let parentId = event.target.dataset.pid;


        // console.log(f)
        // console.log(typeof f)

        // if(fileType=='dir'){
        //     toastr.error('暂不支持移动文件夹');
        //     return;
        // }


        // 设置modal显示内容
        this.props.floatActionModalActions.setFABModalTitle('移动文件');
        this.props.floatActionModalActions.setFABModalInputSpan('移动到');
        this.props.floatActionModalActions.setFABModalInputValue('不填写则删除文件到回收站');

        //设置移动参数
        this.props.floatActionModalActions.setFABModalType(modalType);
        let paramsObj={};
        paramsObj.id=fileId;
        paramsObj.type=fileType;
        paramsObj.targetDirId='';
        this.props.floatActionModalActions.setFABModalOKParams(paramsObj);


        this.props.floatActionModalActions.showFABModal();

    }

    /**
    * 文件下载浮动按钮事件
    */
    handleFloatDownloadClick(event){

        console.log('download');

        if(!event){
            event = window.event;
            console.log('转换event')
        }

        console.log('event',event)
        console.log(typeof event)

        console.log(event.target)

        let fileName = event.target.dataset.fname;
        let parentDirId = event.target.dataset.pid;
        let fileType = event.target.dataset.type;

        console.log('=====传入参数：',fileName,parentDirId,fileType);



        if(fileType=='dir'){
            toastr.warning('下载失败','文件夹暂不支持下载');
            return;
        }


        let fileRealPath = BASE_URL.fileServer+'/'+this.props.stateUserName+'/'+parentDirId+'/'+fileName;
        console.log('=====待下载文件的地址：',fileRealPath);
        window.location.assign(fileRealPath);

    }



    render() {

        let {stateUserName,fileObj,currentDirActions,floatActionModalActions}=this.props;
        // console.log('=====FIleItemFloating属性：',this.props);

        return (
            <span  >
                <button className="btn btn-default padding-0 border-none"  onClick={this.handleFloatStarClick}>
                    <i data-fid={fileObj.file_id} className={this.faIconFactory('fa-star-o')} ></i>
                </button>
                <button className="btn btn-default padding-0 border-none" onClick={this.handleFloatTagClick}>
                    <i className={this.faIconFactory('fa-tag')} ></i>
                </button>
                <button className="btn btn-default padding-0 border-none" onClick={this.handleFloatShareClick}>
                    <i className={this.faIconFactory('fa-share-alt')} ></i>
                </button>
                <button className="btn btn-default padding-0 border-none" onClick={this.handleFloatEditClick}>
                    <i data-modaltype='edit' data-ftype={fileObj.type_id}  data-fname={fileObj.name} data-fid={fileObj.file_id} data-pid={fileObj.parent_id} className={this.faIconFactory('fa-edit')} ></i>
                </button>
                <button className="btn btn-default padding-0 border-none" onClick={this.handleFloatMoveClick}>
                    <i data-modaltype='move' data-ftype={fileObj.type_id}  data-fname={fileObj.name} data-fid={fileObj.file_id} data-pid={fileObj.parent_id} className={this.faIconFactory('fa-sign-out')} ></i>
                </button>
                <button className="btn btn-default padding-0 border-none" onClick={this.handleFloatDownloadClick}>
                    <i data-type={fileObj.type_id} data-fname={fileObj.name} data-pid={fileObj.parent_id} className={this.faIconFactory('fa-download')} ></i>
                </button>

            </span>
        )

    }
}

const mapStateToProps = state => ({
    stateUserName: state.userNameNav.userName
});

const mapDispatchToProps = dispatch => ({
    currentDirActions: bindActionCreators(currentDirAction, dispatch),
    floatActionModalActions: bindActionCreators(floatActionModalAction, dispatch),
    dispatch:dispatch
});

export default connect(mapStateToProps,mapDispatchToProps)(FileItemFloating);

// export default FileItemFloating;
