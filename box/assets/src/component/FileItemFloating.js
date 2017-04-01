import 'font-awesome/css/font-awesome.css'
import   '../style/styles.scss';

import React  from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import classNames from 'classnames';
import {toastr} from 'react-redux-toastr';

import BASE_URL from '../script/BaseUrl';


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
    handleFloatEditClick(event){
        console.log('star')
    }
    handleFloatMoveClick(event){
        console.log('star')
    }
    handleFloatDownloadClick(event){
        console.log('download')
        let fileName = event.target.dataset.fname;
        let parentDirId = event.target.dataset.pid;
        let fileType = event.target.dataset.type;

        if(fileType=='dir'){
            toastr.warning('下载失败','文件夹暂不支持下载');
            return;
        }


        let fileRealPath = BASE_URL.fileServer+'/'+this.props.stateUserName+'/'+parentDirId+'/'+fileName;
        // console.log('=====待下载文件的地址：',fileRealPath);
        window.location.assign(fileRealPath);

    }



    render() {

        let {stateUserName,showFloating,fileObj}=this.props;
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
                    <i className={this.faIconFactory('fa-edit')} ></i>
                </button>
                <button className="btn btn-default padding-0 border-none" onClick={this.handleFloatMoveClick}>
                    <i className={this.faIconFactory('fa-sign-out')} ></i>
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
    actions: bindActionCreators(currentDirAction, dispatch)
});

export default connect(mapStateToProps)(FileItemFloating);

// export default FileItemFloating;
