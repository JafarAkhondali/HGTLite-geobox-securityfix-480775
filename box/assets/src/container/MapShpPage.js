import 'bootstrap/dist/css/bootstrap.css';
import '../style/styles.scss';
import '../style/shpview.scss';

import React, {Component} from 'react';
import {Link} from 'react-router';
import {Jumbotron,ListGroup,ListGroupItem} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import MapShp from '../component/MapShp';

import {strRSplit} from '../script/StrUtil';

class MapPage extends Component {
    constructor() {
        super()
    }

    render() {

        let {stateFileName} = this.props;
        let title  = strRSplit(stateFileName,'.',1)[0];

        console.log('=====MapShpPage',this.props,title)

        return (
            <div className="container bg-white">
                <div className="row height-160 ">
                    <Jumbotron bsClass="bgc-white ">
                      <h1>{title}</h1>
                          <ListGroup>
                         {/*  <ListGroupItem >要素类型</ListGroupItem>
                           <ListGroupItem>要素说明</ListGroupItem> */}
                         </ListGroup>
                    </Jumbotron>
                </div>

                <div className="row height-16"></div>
                <div className="row">
                    <MapShp />
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    stateFileName: state.shpView.shpViewTitle
});

// const mapDispatchToProps = dispatch => ({
//     shpViewActions: bindActionCreators(shpViewAction, dispatch)
// });

export default connect(mapStateToProps)(MapPage);

// export default  MapPage;
