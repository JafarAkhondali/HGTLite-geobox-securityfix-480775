import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
import   '../style/styles.scss';
import   './FileList.scss';

import React  from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';

import {Grid, Row, Col, Button, FormGroup, InputGroup, FormControl, Glyphicon} from 'react-bootstrap'

import HRLine from './HRLine'
import FileItemFloating from './FileItemFloating'

import fileUIActions from '../action/fileUIAction';




class FileItem extends React.Component {

    constructor() {
        super()
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver() {
        // console.log('=====1' + event.target.className)
        this.fabDiv.className = 'opacity100';
    }


    handleMouseOut() {
        // console.log('=====2' + event.target.className)
        this.fabDiv.className = 'opacity0';

    }

    render() {

        let {fileItem, showFAB, actions} = this.props;
        // onMouseOver={actions.showFAB} onMouseLeave={actions.hideFAB}
        let fabClass = classNames(showFAB ? 'opacity100' : 'opacity0');
        let itemIconClass = classNames('fa', 'fa-2x', 'fa-blue', 'opacity75',fileItem.style);



        return (
            <div >
                <Grid>
                    <Row >
                        <Col md={3}>
                            <span className="width-36 display-inline-block"> <i className={itemIconClass}></i>  </span>
                            <span className="font-file-name " data-fid={fileItem.fileId}>  <Link to='account'>  {fileItem.name}</Link> </span>
                        </Col>
                        <Col md={2}> </Col>
                        <Col md={4}>
                            <div ref={(c)=>{this.fabDiv = c}} onMouseOver={this.handleMouseOver}
                                 onMouseLeave={this.handleMouseOut} className={fabClass}>
                                <FileItemFloating   />
                            </div>
                        </Col>
                        <Col md={1}> {fileItem.size} </Col>
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

// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(fileUIActions, dispatch)
//
// });

// export default connect(mapStateToProps, mapDispatchToProps)(FileItem);
export default connect(mapStateToProps)(FileItem);
