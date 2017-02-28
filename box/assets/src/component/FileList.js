import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
import   './FileList.scss';

import React  from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import actions from '../actions/appleAction';
import FileItem from './FileItem';
import {Grid, Row, Col, Button, FormGroup, InputGroup, FormControl, Glyphicon} from 'react-bootstrap'

import HRLine from './HRLine'

import   '../style/styles.scss';


class FileList extends React.Component {

    constructor() {
        super()
    }

    getFileList(files) {
        let data = [];
        files.forEach(file => {
            data.push(<File fileItem={file} eatApple={this.props.actions.eatApple}/>)
        });

        if (!data.length) data.push(<div >苹果篮子空空如也</div>);

        return data;
    }


    render() {

        let {fileBasket, actions} = this.props;
        let {files, isPicking} = fileBasket;

        return (

            <div >
                <div>
                    <Grid>
                        <Row >
                            <Col md={3}><i className="fa  fa-2x  "></i> <span className="to-m-left16">文件名</span> </Col>
                            <Col md={5}> </Col>
                            <Col md={1}> 大小</Col>
                            <Col md={1}>类型 </Col>
                            <Col md={2}> 修改时间</Col>
                        </Row>
                    </Grid>
                    <HRLine/>
                </div>
                <div id="boxList">
                    {this.getFileList(files)}
                </div >


            </div>

        );
    }

}

const mapStateToProps = state => ({
    fileBasket: state.fileBasket
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(FileList);
