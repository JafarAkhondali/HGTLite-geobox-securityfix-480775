import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
import   '../style/styles.scss';

import React  from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';

import {Grid, Row, Col, Button, FormGroup, InputGroup, FormControl, Glyphicon} from 'react-bootstrap'

import HRLine from './HRLine'
import FileItemFloating from './FileItemFloating'

import fileItemAction from '../action/fileItemAction';
import currentDirAction from '../action/currentDirAction';
import shpViewAction from '../action/shpViewAction';

import BASE_URL from '../script/BaseUrl';


class FileItem extends React.Component {

    constructor() {
        super()
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleNameClick = this.handleNameClick.bind(this);
    }

    handleNameClick(event){
        console.log(event.target)
        // console.log(event.target.dataset.fid)
        // console.log(event.target.dataset.typeid)
        let fId = event.target.dataset.fid;
        let fName = event.target.dataset.fname;
        let parentDirId = event.target.dataset.pid;
        let tId = event.target.dataset.typeid;
        console.log('======点击的参数fid,fname,pid,tid：',tId,fName,parentDirId,tId);

        if(tId =='dir'){
            // console.log('---1')

            this.props.currentDirActions.addDirBreadcrumb(fName,fId);
            // console.log('---2')

            this.props.fileItemActions.fetchSelectedDir(fId);
            // console.log('---3')


            return;
        }

        if(tId=='shpzip'){

        }

        let fileRealPath = BASE_URL.fileServer+'/'+this.props.stateUserName+'/'+parentDirId+'/'+fName;
        console.log('=====文件地址：',fileRealPath);
        this.props.shpViewActions.setViewTitle(fName);
        this.props.shpViewActions.fetchShpFileArrayBuffer(fileRealPath);

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

        let {fileItem, showFAB,stateUserName, shpFileTitle,fileItemActions,currentDirActions,shpViewActions} = this.props;
        // onMouseOver={actions.showFAB} onMouseLeave={actions.hideFAB}
        let fabClass = classNames(showFAB ? 'opacity100' : 'opacity0');
        let itemIconClass = classNames('fa', 'fa-2x', 'fa-blue', 'opacity75',fileItem.style);

        // console.log(fileItem);

        return (
            <div  >
                <Grid>
                    <Row >
                        <Col md={4}>
                            <div className="to-p-left-18" >
                                <span className="width-36 display-inline-block"> <i className={itemIconClass}></i>  </span><Link to='#'>
                                <span className="font-file-name "  data-fid={fileItem.file_id}  data-fname={fileItem.name} data-typeid={fileItem.type_id} data-pid={fileItem.parent_id} onClick={this.handleNameClick}>    {fileItem.name} </span></Link>
                            </div>
                        </Col>
                        <Col md={2}> </Col>
                        <Col md={3}>
                            <div ref={(c)=>{this.fabDiv = c}} onMouseOver={this.handleMouseOver}
                                 onMouseLeave={this.handleMouseOut} className={fabClass}>
                                <FileItemFloating  fileObj={fileItem}  />
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
    showFAB: state.fileFAB.showingFAB,
    stateUserName:state.userNameNav.userName,
    shpFileTitle : state.shpView.shpViewTitle
});

const mapDispatchToProps = dispatch => ({
    fileItemActions: bindActionCreators(fileItemAction, dispatch),
    currentDirActions:bindActionCreators(currentDirAction, dispatch),
    shpViewActions:bindActionCreators(shpViewAction, dispatch),
    dispatch:dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(FileItem);
// export default connect(mapStateToProps)(FileItem);
