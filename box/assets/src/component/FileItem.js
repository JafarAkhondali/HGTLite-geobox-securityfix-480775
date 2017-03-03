import React  from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import fileUIActions from '../action/fileUIAction';
import {Grid, Row, Col, Button, FormGroup, InputGroup, FormControl, Glyphicon} from 'react-bootstrap'

import HRLine from './HRLine'
import FileItemFloating from './FileItemFloating'
import classNames from 'classnames';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
import   '../style/styles.scss';
import   './FileList.scss';


class FileItem extends React.Component {

    constructor() {
        super()
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);


    }

    handleMouseOver() {
        console.log('=====1' + event.target.className)
        this.fid.className = 'opacity100';
    }


    handleMouseOut() {
        console.log('=====2' + event.target.className)
        this.fid.className = 'opacity0';

    }

    render() {

        let {fileItem, showFAB, actions} = this.props;
        // onMouseOver={actions.showFAB} onMouseLeave={actions.hideFAB}
        let comClass = classNames(showFAB ? 'opacity100' : 'opacity0');


        return (
            <div >
                <Grid>
                    <Row >
                        <Col md={3}>
                            <i className="fa fa-folder-open-o fa-2x fa-blue opacity75"></i>
                            <span className="font-file-name to-m-left6" data-fid={fileItem.id}> {fileItem.name} </span>
                        </Col>
                        <Col md={1}> </Col>
                        <Col md={3}>
                            <div ref={(c)=>{this.fid = c}} onMouseOver={this.handleMouseOver}
                                 onMouseLeave={this.handleMouseOut} className={comClass}>
                                <FileItemFloating   />
                            </div>
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
    fileItem: React.PropTypes.object.isRequired
};


const mapStateToProps = state => ({
    showFAB: state.fileFAB.showingFAB
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(fileUIActions, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(FileItem);

