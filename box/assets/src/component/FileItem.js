import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
import   './FileList.scss';

import React  from 'react';
import {Link} from 'react-router';

import {Grid, Row, Col, Button, FormGroup, InputGroup, FormControl, Glyphicon} from 'react-bootstrap'

import HRLine from './HRLine'

import   '../style/styles.scss';


class FileItem extends React.Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.state != this.props.state;
    }

    render() {

        let {fileItem} = this.props;

        return (
            <div>
                <Grid>
                    <Row >
                        <Col md={3}><i className="fa fa-folder-open-o fa-2x fa-blue opacity75"></i>
                            <a className="font-file-name to-m-left6" href="https://www.baidu.com"> {fileItem.name} </a></Col>
                        <Col md={1}> </Col>
                        <Col md={3}>
                            <span>
                            <i className="fa fa-star-o fa-1x fa-blue opacity75 to-p-left-18"></i>
                            <i className="fa fa-tag fa-1x fa-blue opacity75 to-p-left-18"></i>
                            <i className="fa fa-share-alt fa-1x fa-blue opacity75 to-p-left-18"></i>
                            <i className="fa fa-edit fa-1x fa-blue opacity75 to-p-left-18"></i>
                            <i className="fa fa-sign-out fa-1x fa-blue opacity75 to-p-left-18"></i>
                            <i className="fa fa-download fa-1x fa-blue opacity75 to-p-left-18"></i>
                            </span>
                        </Col>
                        <Col md={1}> </Col>
                        <Col md={1}> {fileItem.size}</Col>
                        <Col md={1}>{fileItem.type} </Col>
                        <Col md={2}> {fileItem.modified}  </Col>
                    </Row>
                </Grid>
                <HRLine/>
            </div>
        )

    }
}

FileItem.propTypes = {
    fileItem: React.PropTypes.object.isRequired     // 单个苹果的数据
};


export default FileItem;