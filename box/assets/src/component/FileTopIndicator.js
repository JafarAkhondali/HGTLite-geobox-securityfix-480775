import 'font-awesome/css/font-awesome.css'
import 'react-redux-toastr/src/styles/index.scss'
import '../style/styles.scss'
import '../style/file-uploader.scss'

import React from 'react';
import ReactDOM from 'react-dom'
import {
    connect
}
from 'react-redux';
import {
    bindActionCreators
}
from 'redux';

import {
    Link
}
from 'react-router';
import {toastr} from 'react-redux-toastr'

import {
    Grid,
    Row,
    Col,
    Button,
    FormGroup,
    InputGroup,
    FormControl,
    ControlLabel,
    Modal,
    FieldGroup
}
from 'react-bootstrap'
import {
    fromJS
}
from 'immutable';

import DragList from './DragList'

import fileTagActions from '../action/fileTagAction'

import {formatDate} from '../script/DatetimeFormat'

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
    }

    close() {
        this.setState({
            showModal: false
        });
    }

    open() {
        this.setState({
            showModal: true
        });
    }

    handleChangeTag(event) {
        // console.log(event.target.value)
        this.props.actions.setInputFileTag(event.target.value);
    }

    /**
     * 文件选取input事件方法
     */
    handleUploadFileChange(event) {
        let fileNum = event.target.files.length;
        // console.log('选择的文件数目', fileNum);
        let formData = this.state.uploadFormData;

        const filesToUpload = event.target.files;
        // console.log(filesToUpload.length, filesToUpload)
        for (let i = 0, len = filesToUpload.length; i < len; i++) {
            formData.append('file', filesToUpload[i])
        }
        // console.log('选择的文件有', formData.getAll('file'));

        this.setState({
            uploadFormData: formData
        });
    }

    /**
     * 文件及form提交事件方法
     */
    handleUploadFormSubmit(event) {
        event.preventDefault()

        let formData = this.state.uploadFormData;

        // 关于上传者
        formData.append('user_id', 'supersu');
        formData.append('upload_date', formatDate());
        // 关于上传指定信息
        formData.append('file_dir_id', 'supersu');
        formData.append('file_tag', this.props.fTag);

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

        // 从FormData获取文件用于传输完成提示
            var allFiles=this.state.uploadFormData.getAll('file');
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

            this.setState({
                showModal: false,
                progressPercentage:0,
                uploadFormData: formData1
            });
        }.bind(this);

        xhr.onerror = function() {
            // console.log('上传失败', xhr.responseText)
            let errorInfo =filenames.join('\r\n');
            errorInfo +=('\r\n'+filenames.length+' 个文件上传失败')
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

        xhr.send(formData)

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

    handleDrop(event) {
        event.stopPropagation();
        event.preventDefault();

        let formData2 = this.state.uploadFormData;

        var dragFiles = event.dataTransfer.files;
        console.log('拖拽文件数', dragFiles.length);
        // console.log(filesToUpload.length, filesToUpload)
        for (let i = 0, len = dragFiles.length; i < len; i++) {
            formData2.append('file', dragFiles[i])
        }

        console.log('选择的文件有', formData2.getAll('file'));

        this.setState({
            isDragActive: false,
            uploadFormData: formData2
        });

    }


    render() {

        let {
            fTag, actions
        } = this.props;

let progressBarStyle={
    width:this.state.progressPercentage/100
}

        return (

                < div >
                < Grid >
                < Row >
                < Col md = {
                    3
                } > < a href = "/#/filemap" > < i className = "fa fa-map-marker fa-2x" > < /i></a > < Button bsClass =
                "btn btn-all-files opacity75 to-m-left8" >
                所有文件 < /Button></Col >
                < Col md = {
                    4
                } > < /Col> <Col md={
                2
            } >
            < Button id = "btnUpload"
        bsClass = "btn btn-upload to-m-left8"
        onClick = {
            this.open.bind(this)
        } > 上传 < /Button> < Button id = "btnNew"
        bsClass = "btn btn-default to-m-left20" > 新建 < /Button> </Col >
            < Col md = {
                2
            } > < FormGroup >
            < InputGroup >
            < InputGroup.Button >
            < Button > 搜索 < /Button> </InputGroup.Button > < FormControl type = "text"
        placeholder = "输入文件名" / >
            < /InputGroup> </FormGroup > < /Col> < Col md={
        1
    } > < /Col> </Row > < /Grid>


    < Modal
    show = {
        this.state.showModal
    }
    onHide = {
            this.close.bind(this)
        } >
        < Modal.Header closeButton >
        < Modal.Title > < span className = "font-file-name" > 上传文件到云盘 < /span></Modal.Title >
        < /Modal.Header> < form
    onSubmit = {
            this.handleUploadFormSubmit
        } >
        < Modal.Body >
        < div > < span className = "font-file-list" > 上传到： &frasl; < /span></div >

    < div >
        < div className = "display-inline-block" >
        < label htmlFor = "file"
    className = "btn btn-default btn-upload" >
        < i className = "fa fa-plus fa-1x" > < /i> &nbsp;&nbsp;添加文件 < input type="file"
    className = "file-input opacity0"
    ref = {
        (c) => {
            this.fileInput = c
        }
    }
    name = "file"
    onChange = {
        this.handleUploadFileChange
    }
    multiple / >
        < /label></div >


        < div className = "display-inline-block to-m-left8" >
        < div > < span className = "font-file-list" > 添加标签： < /span></div >
        < input type = "text"
    value = {
        fTag
    }
    onChange = {
        this.handleChangeTag
    }
    />


    < /div>

    < /div>

    < div >


        < div id = "dropbox"
    onDragEnter = {
        this.handleDragEnter
    }
    onDragOver = {
        this.handleDragOver
    }
    onDrop = {
            this.handleDrop
        } >
        < div className = "font-file-list" >
        < DragList inputFiles = {
            this.state.uploadFormData
        } >
        < /DragList></div >
        < /div> < /div >

        < div >

        < fieldset id = "progress"
    >
        < div className = "progress-trough display-inline-block " >

        < div id = "progress-bar"
    className = "progress-bar " style={{width:this.state.progressPercentage+'%'}} >
        </div >

        < /div><div className="display-inline-block to-m-left1">< span className = "progress-bar-text" > {this.state.progressPercentage} % < /span></div> < /fieldset > < /div>

    < /Modal.Body> < Modal.Footer
    id = "uploadFooter" > < Button onClick = {
        this.close.bind(this)
    } > 取消 < /Button>
    < button
    type = "submit"
    className = "btn btn-upload " > 上传 < / button >

    < / Modal.Footer ></
    form >

        < / Modal >

    < / div >

)
}

}

const mapStateToProps = state => ({
    fTag: state.fileTag.fTag
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(fileTagActions, dispatch)

});

// export default FileTopIndicator
export default connect(mapStateToProps, mapDispatchToProps)(FileTopIndicator);
