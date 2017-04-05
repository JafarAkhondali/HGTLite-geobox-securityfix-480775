import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
import 'react-redux-toastr/src/styles/index.scss'
import '../style/styles.scss'
import '../style/file-uploader.scss'

import React from 'react';
import ReactDOM from 'react-dom'
import {connect} from 'react-redux';
import { bindActionCreators,dispatch} from 'redux';
import {Link} from 'react-router';
import {toastr} from 'react-redux-toastr';

import {Grid,Row,Col,Button,FormGroup,InputGroup,FormControl,ControlLabel,Modal,FieldGroup} from 'react-bootstrap';

import CurrentDir from './CurrentDir';
import DragList from './DragList';
import UploadLocPicker from './UploadLocPicker';

import fileTagAction from '../action/fileTagAction';
import currentDirAction from '../action/currentDirAction';
import newFolderAction from '../action/newFolderAction';
import searchIndexAction from '../action/searchIndexAction';
import routerURLAction from '../action/routerURLAction';

import {formatDate} from '../script/DatetimeFormat';

class FileTopIndicator extends React.Component {

    constructor() {
        super()
        var fd = new FormData();
        // fd.append('file',null)
        this.state = {
            showModal: false,
            isDragActive: false,
            progressPercentage:0,
            uploadFormData: fd
        }

        this.handleUploadFileChange = this.handleUploadFileChange.bind(this);
        this.handleUploadFormSubmit = this.handleUploadFormSubmit.bind(this);
        this.handleChangeTag = this.handleChangeTag.bind(this);
        this.handleDragEnter = this.handleDragEnter.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
        this.handleShowRootFiles = this.handleShowRootFiles.bind(this);
        this.closeUploadModal=this.closeUploadModal.bind(this);
        this.openUploadModal=this.openUploadModal.bind(this);
        this.handleNewFolderClick = this.handleNewFolderClick.bind(this);
        this.handleSearchIndexInput=this.handleSearchIndexInput.bind(this);
        this.handleSearchIndexButtonClick=this.handleSearchIndexButtonClick.bind(this);
    }

    closeUploadModal() {
        this.setState({
            showModal: false
        });
    }

    openUploadModal() {
        this.setState({
            showModal: true
        });
    }

    //给上传的文件添加标签
    handleChangeTag(event) {
        // console.log(event.target.value)
        this.props.fileTagActions.setInputFileTag(event.target.value);
    }

    handleSearchIndexInput(event){
        console.log('=====搜索input',event.target.value)

        this.props.searchIndexActions.setSerachIndexInput(event.target.value);
    }

    handleSearchIndexButtonClick(event){
        console.log('=====搜索button',event.target.value)
        this.props.routerURLActions.changeRoute('/search')
}
    /**
     * 文件选取input添加文件事件
     */
    handleUploadFileChange(event) {

        let formData = this.state.uploadFormData;

        const filesToUpload = event.target.files;
        let fileNum = filesToUpload.length;
        console.log('文件选取input添加的文件数：', fileNum);
        // console.log(filesToUpload.length, filesToUpload)
        for (let i = 0, len = filesToUpload.length; i < len; i++) {
            formData.append('file', filesToUpload[i])
        }
        // console.log('选择的文件有', formData.getAll('file'));

        this.setState({
            uploadFormData: formData
        });
    }

    handleDragEnter(event) {
        event.stopPropagation();
        event.preventDefault();
        this.setState({
            isDragActive: true
        })
    }

    handleDragOver(event) {
        event.stopPropagation();
        event.preventDefault();
        // this.setState(
        //     {
        //         isDragActive:false
        //     }
        // )
    }

    //拖拽添加文件事件
    handleDrop(event) {
        event.stopPropagation();
        event.preventDefault();

        let formData2 = this.state.uploadFormData;

        var dragFiles = event.dataTransfer.files;
        console.log('拖拽添加的文件数：', dragFiles.length);
        // console.log(filesToUpload.length, filesToUpload)
        for (let i = 0, len = dragFiles.length; i < len; i++) {
            formData2.append('file', dragFiles[i])
        }

        // console.log('选择的文件有', formData2.getAll('file'));

        this.setState({
            isDragActive: false,
            uploadFormData: formData2
        });

    }


    /**
     * 文件及form提交事件方法
     */
    handleUploadFormSubmit(event) {
        event.preventDefault()

        let curUserName=this.props.stateUserName;
        console.log('====userid',curUserName)

        let formData = this.state.uploadFormData;
        let curDirList = this.props.stateCurDirList;
        let targetDirId ='';
        // console.log('=====curDirList',curDirList)

        if(curDirList==undefined||curDirList==null||curDirList.length==0){
            targetDirId ='0';
        }else{
            // console.log(curDirList)
            let curLen = curDirList.length;
             targetDirId=curDirList[(curLen-1)][1];
        }

        // console.log('======当前目录是：',curDirList[(curLen-1)][0]);
        // console.log(typeof curDirLoc);

        let  targetLoc = this.props.stateUploadLoc;
        // console.log('=====输入的上传目录是',targetLoc);

        if(targetLoc){
            targetDirId = targetLoc;
            console.log('=====最终上传的目录ID是:',targetDirId);
        }

        console.log('最终要上传的文件有：', formData.getAll('file'));


        // 文件元信息列表，与上传接收到的顺序一致
        let allFilesToUpload = formData.getAll('file');
        let allLen = allFilesToUpload.length;
        let fileInfoList = [];
        for(let i=0;i<allLen;i++){
            let f = {};
            f.name = allFilesToUpload[i].name;
            f.size = allFilesToUpload[i].size;
            f.type = allFilesToUpload[i].type;
            f.modifiedDate = formatDate(allFilesToUpload[i].lastModified);
            fileInfoList.push(f);
        }
        // console.log(JSON.stringify(fileInfoList));

        // 关于上传者
        formData.append('user_id', curUserName);
        formData.append('upload_by', curUserName);
        formData.append('upload_date', formatDate());
        // 关于本次上传的指定信息
        formData.append('file_dir_id',targetDirId );
        formData.append('file_tag', this.props.fTag);

        formData.append('fileInfoList',JSON.stringify(fileInfoList));

        this.setState({
            uploadFormData: formData
        });

        // console.log(this.state.uploadFormData.get('file_dir_id'))

        // 使用fetch上传文件（备用）
        // fetch('/file/upload', {
        //     method: 'POST',
        //     body: this.state.uploadFormData
        // }).then(function(response) {
        //
        //     console.log("上传成功")
        //     console.log(response);
        //
        //     let formData1 = new FormData();
        //     this.setState({
        //         showModal: false,
        //         uploadFormData: formData1
        //     });
        //
        //
        // }.bind(this)).catch(function(err) {
        //     console.log("上传失败")
        //     console.log(err);
        // });

        // 从FormData获取文件传输进度
            var allFiles=this.state.uploadFormData.getAll('file');
            if(!allFiles.length){
                toastr.error('请选择文件后再上传！')
                return;
            }
            var filenames=[];
            for(let i=0,len=allFiles.length;i<len;i++){
                filenames.push(allFiles[i].name)
            }

        // 创建发送xhr请求，并处理结果
        let xhr = new XMLHttpRequest();

        xhr.onload = function() {
            // console.log('上传成功', xhr.responseText);
            let successInfo =filenames.join('\r\n');
            successInfo +=('\r\n'+filenames.length+' 个文件上传成功')

            toastr.success('上传成功',successInfo )
            let formData1 = new FormData();
            //刷新文件列表
            this.props.currentDirActions.fetchSelectedDir(targetDirId);

            this.setState({
                showModal: false,
                progressPercentage:0,
                uploadFormData: formData1
            });

        }.bind(this);

        xhr.onerror = function() {
            // console.log('上传失败', xhr.responseText)
            let errorInfo =filenames.join('\r\n');
            errorInfo +=('\r\n'+filenames.length+' 个文件上传失败');
            toastr.error('上传失败',errorInfo )
        }

        xhr.onreadystatechange = function(){
                  if(xhr.readyState === 4 && xhr.status === 200){
                      console.log(xhr.responseText);
                  }
              }

        //progess监听一定要放在open之前
        xhr.upload.onprogress = function(event) {
            // console.log('运行progress')
            var percent = 0;
            var position = event.loaded || event.position;
            var total = event.total;
            if (event.lengthComputable) {
                percent = Math.ceil(position / total * 100);
            }
            // console.log(percent);
            this.setState({
                progressPercentage:percent
            })
        }.bind(this);

        xhr.open('POST', '/file/upload');

        xhr.send(formData);

    }

    //所有文件按钮事件
    handleShowRootFiles(event){
        this.props.currentDirActions.setCurrentRoot();
        this.props.currentDirActions.fetchSelectedDir(0);
    }

    //新建文件夹按钮事件
    handleNewFolderClick(event){
        this.props.newFolderActions.newFolderFirst();
    }

    render() {

        let {fTag,stateUploadLoc,stateCurDirList,stateUserName,stateSearchKW,fileTagActions,currentDirActions,newFolderActions,routerActions} = this.props;
        console.log('=====FileTopIndicator属性',this.props)

        let progressBarStyle={ width:this.state.progressPercentage/100};

        return (
        <div>

            <Grid>
                <Row>
                    <Col md = {7}>
                            <div>
                                <div className="display-inline-block">
                                    <button className = "btn btn-all-files opacity75 to-m-left8" onClick={this.handleShowRootFiles}> 所有文件 </button>

                                </div>
                                <div className="display-inline-block">
                                    <CurrentDir />
                                </div>

                            </div>
                        </Col>
                        <Col md={2}>
                            <button id = "btnUpload"   className = "btn btn-upload to-m-left8 opacity75" onClick = { this.openUploadModal} > 上传 </button>
                            <button id = "btnNew"  className = "btn btn-default to-m-left20"  onClick = {this.handleNewFolderClick}> 新建 </button>
                        </Col>
                        <Col md = {2}>
                        <FormGroup >
                            <InputGroup >
                            <FormControl type = "text" placeholder="输入文件名" value={stateSearchKW} onChange={this.handleSearchIndexInput} />
                            <InputGroup.Button>
                                <Button onClick={this.handleSearchIndexButtonClick}> 搜索 </Button>
                            </InputGroup.Button>
                            </InputGroup>
                         </FormGroup>

                         </Col>
                         <Col md={1}> </Col>
                 </Row>
             </Grid>

            <Modal show = {this.state.showModal} onHide = {this.closeUploadModal} >
                <Modal.Header closeButton>
                    <Modal.Title > <span className = "font-file-name" > 上传文件到云盘 </span></Modal.Title>
                </Modal.Header>

                <form onSubmit = {this.handleUploadFormSubmit} >
                <Modal.Body>
                <div> <span className = "font-file-list" > 上传到：</span><UploadLocPicker /></div>
                <div >
                    <div className = "display-inline-block" >
                        <label htmlFor = "file" className = "btn btn-default btn-upload" >
                            <i className = "fa fa-plus fa-1x" > </i> &nbsp;&nbsp;添加文件
                            <input type="file" className = "file-input opacity0" ref={(c)=>{this.fileInput=c}}  name = "file" onChange={this.handleUploadFileChange} multiple/>
                        </label>
                    </div>

                    <div className="display-inline-block to-m-left8">
                        <div> <span className="font-file-list" >  </span></div>
                        <input type = "text" value = {fTag} onChange={ this.handleChangeTag} placeholder="给文件加个特色标签吧" />
                        </div>
                    </div>

                    <div >
                        <div id = "dropbox" onDragEnter = { this.handleDragEnter} onDragOver = { this.handleDragOver} onDrop = {this.handleDrop}>
                        <div className = "font-file-list" >
                            <DragList inputFiles = { this.state.uploadFormData }> </DragList>
                        </div>
                        </div>
                    </div>

                    <div >
                        <fieldset id = "progress">
                            <div className = "progress-trough display-inline-block ">
                                <div id = "progress-bar"    className = "progress-bar " style={{width:this.state.progressPercentage+'%'}} >
                                </div>
                            </div>
                            <div className="display-inline-block to-m-left1">
                            <span className = "progress-bar-text" > {this.state.progressPercentage} % </span></div>
                        </fieldset>
                    </div>

                </Modal.Body>

                 <Modal.Footer id = "uploadFooter" >
                     <Button onClick = { this.closeUploadModal }> 取消 </Button>
                         <button type = "submit" className = "btn btn-upload "> 上传 </button>
                </Modal.Footer>

                </form>
        </Modal>

    </div>
)
}

}

const mapStateToProps = state => ({
    fTag: state.fileTag.fTag,
    stateUploadLoc:state.uploadLocPicker.uploadLoc,
    stateCurDirList:state.currentDir.dirList,
    stateUserName:state.userNameNav.userName,
    stateSearchKW:state.searchIndex.stateSearchKW
});


const mapDispatchToProps = dispatch => ({
    fileTagActions: bindActionCreators(fileTagAction, dispatch),
    currentDirActions:bindActionCreators(currentDirAction, dispatch),
    newFolderActions:bindActionCreators(newFolderAction, dispatch),
    searchIndexActions:bindActionCreators(searchIndexAction,dispatch),
    routerURLActions:bindActionCreators(routerURLAction,dispatch),
    dispatch:dispatch

});

// export default FileTopIndicator
export default connect(mapStateToProps, mapDispatchToProps)(FileTopIndicator);
