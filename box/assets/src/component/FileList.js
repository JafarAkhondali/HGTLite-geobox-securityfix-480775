import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import   '../style/styles.scss';
import   '../style/FileList.scss';

import React  from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Grid, Row, Col, Button, FormGroup, InputGroup, FormControl, Glyphicon} from 'react-bootstrap'

import FileItem from './FileItem';
import HRLine from './HRLine';
import ToggleMapButton from './ToggleMapButton';

import fileListAction from '../action/fileListAction';

class FileList extends React.Component {

    constructor() {
        super()
    }

    getFileItems(files) {
        // console.log("获取文件数组："+files)
        let data = [];
        files.forEach(file => {
            data.push(<FileItem fileItem={file} key={file.file_id}  />)
        });

        if (!data.length) {
            data.push(<div className="font-grey-barely font-size-40 text-align-center to-m-top32 letter-space-8" key={files.length} >云盘空空</div>);
        }

        return data;
    }


    handleRowClick(event) {
        console.log(event.target)
        console.log(event.target.dataset.fid)

        console.log('点击了一次')
    }

    render() {

        let {files, actions} = this.props;

        return (
            <div >
                <div>
                    <Grid>
                        <Row >
                            <Col md={3}><i className="fa fa-2x"></i> <span className="to-m-left16">文件名</span> </Col>
                            <Col md={5}> </Col>
                            <Col md={2}> 大小</Col>
                            <Col md={2}> 修改时间
                            </Col>
                        </Row>
                    </Grid>
                    <HRLine/>
                </div>
                {/*<div id="boxList"  onClick={this.handleRowClick}>*/}
                <div id="boxList"  >
                    {this.getFileItems(files)}
                </div >


            </div>

        );
    }

}

const mapStateToProps = state => ({
    files: state.fileList.files
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(fileListAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(FileList);
