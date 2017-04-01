import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import   '../style/styles.scss';
import   '../style/FileList.scss';

import React  from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';

import {Grid, Row, Col, Button, FormGroup, InputGroup, FormControl, Glyphicon} from 'react-bootstrap'

import FileItem from './FileItem';
import HRLine from './HRLine';
import ToggleMapButton from './ToggleMapButton';

import fileListAction from '../action/fileListAction';
import newFolderAction from '../action/newFolderAction';

class FileList extends React.Component {

    constructor() {
        super()
        this.handleNewFolderOK=this.handleNewFolderOK.bind(this);
        this.handleNewFolderNO=this.handleNewFolderNO.bind(this);
    }

    getFileItems(files) {
        // console.log("获取文件数组："+files)
        let data = [];
        files.forEach(file => {
            data.push(<FileItem fileItem={file} key={file.file_id}  />)
        });

        if (!data.length) {
            data.push(<div className="font-grey-barely font-size-40 text-align-center to-m-top32 letter-space-8" key={files.length} >没有文件，赶紧上传吧</div>);
        }

        return data;
    }


handleNewFolderOK(event){
    let name=this.newFolderInput.value||'新建文件夹';
    this.props.newFolderActions.fetchNewFolder(name);
    this.newFolderInput.value='';
}

handleNewFolderNO(event){
    this.props.newFolderActions.cancelNewFolder();
}

    render() {

        let {files, fileListActions,newFolderActions,stateNewFolderDisplay} = this.props;

        // console.log('=====FileList属性',this.props);
        //
        // let newFolderClass = classNames({
        //     'dispaly-none':stateNewDispalyNone
        // });

        let newFolderStyle = {display:stateNewFolderDisplay};


        return (
            <div >
                {/*=================列表表头标题*/}
                <div>
                    <Grid>
                        <Row >
                            <Col md={3}><i className="fa fa-2x"></i> <span className="to-m-left-18  ">文件名</span> </Col>
                            <Col md={5}>  </Col>
                            <Col md={2}> 大小</Col>
                            <Col md={2}> 修改时间        </Col>
                        </Row>
                    </Grid>
                    <HRLine/>
                </div>

                {/*===============新建文件夹头行，Toggle显示*/}
                    <div style={newFolderStyle}>
                        <Grid>
                            <Row>
                                <Col md={3}><i className="fa fa-2x  fa-folder-open-o fa-blue to-p-left-18 "></i>
                                    <input type = "text"  placeholder="请输入文件夹名" className="to-m-left-18" ref={(folder)=>{this.newFolderInput=folder}}/></Col>
                                <Col md={3}>
                                    <button className="btn btn-default border-none" onClick={this.handleNewFolderOK}><i className="fa fa-check fa-blue"></i></button>
                                    <button className="btn btn-default border-none" onClick={this.handleNewFolderNO}><i className="fa fa-close fa-blue"></i></button>

                                </Col>
                                <Col md={6}></Col>
                            </Row>
                        </Grid>
                        <HRLine/>
                    </div>

                {/*===============文件列表主体*/}
                <div id="boxList">
                    {this.getFileItems(files)}
                </div>


            </div>

        );
    }

}

const mapStateToProps = state => ({
    files: state.fileList.files,
    stateNewFolderDisplay:state.newFolder.newFolderDisplay
});

const mapDispatchToProps = dispatch => ({
    fileListActions: bindActionCreators(fileListAction, dispatch),
    newFolderActions: bindActionCreators(newFolderAction, dispatch),
    dispatch:dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(FileList);
