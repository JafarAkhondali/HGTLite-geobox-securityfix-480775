import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
import   './FileList.scss';
import   '../style/styles.scss';

import React  from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import fileBusinessAction from '../action/fileBusinessAction';
import FileItem from './FileItem';
import {Grid, Row, Col, Button, FormGroup, InputGroup, FormControl, Glyphicon} from 'react-bootstrap'

import HRLine from './HRLine'


class FileList extends React.Component {

    constructor() {
        super()
    }

    getFileItems(files) {
        // console.log("获取文件数组："+files)
        let data = [];
        files.forEach(file => {
            data.push(<FileItem fileItem={file} key={file.id}/>)
        });

        if (!data.length) data.push(<div >云盘空空如也</div>);

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
                            <Col md={1}> 大小</Col>
                            <Col md={1}>类型 </Col>
                            <Col md={2}> 修改时间
                                <button onClick={actions.fetchFile}>请求</button>
                            </Col>
                        </Row>
                    </Grid>
                    <HRLine/>
                </div>
                <div id="boxList"  onClick={this.handleRowClick}>
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
    actions: bindActionCreators(fileBusinessAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(FileList);
