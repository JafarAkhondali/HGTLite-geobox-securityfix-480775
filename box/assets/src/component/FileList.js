import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
import   './FileList.scss';

import React  from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import actions from '../action/fileAction';
import FileItem from './FileItem';
import {Grid, Row, Col, Button, FormGroup, InputGroup, FormControl, Glyphicon} from 'react-bootstrap'

import HRLine from './HRLine'

import   '../style/styles.scss';


class FileList extends React.Component {

    constructor() {
        super()
    }

    getFileItems(files) {
        let data = [];
        files.forEach(file => {
            data.push(<FileItem fileItem={file} key={file.id}/>)
        });

        if (!data.length) data.push(<div >云盘空空如也</div>);

        return data;
    }


    render() {

        let {fileList, actions} = this.props;
        let {files, isPicking} = fileList;

        return (
            <div >
                <div>
                    <Grid>
                        <Row >
                            <Col md={3}><i className="fa  fa-2x  "></i> <span className="to-m-left16">文件名</span> </Col>
                            <Col md={5}> </Col>
                            <Col md={1}> 大小</Col>
                            <Col md={1}>类型 </Col>
                            <Col md={2}> 修改时间 <button onClick={actions.fetchFile()
                            }></button>
                            </Col>
                        </Row>
                    </Grid>
                    <HRLine/>
                </div>
                <div id="boxList">
                    {this.getFileItems(files)}
                </div >


            </div>

        );
    }

}

const mapStateToProps = state => ({
    fileList: state.fileList
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(FileList);
