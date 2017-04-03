import 'bootstrap/dist/css/bootstrap.css';
import '../style/styles.scss';
import '../style/shpview.scss';

import React, {Component} from 'react';
import {Link} from 'react-router';
import {Jumbotron,ListGroup,ListGroupItem} from 'react-bootstrap';

import MapShp from '../component/MapShp';

class MapPage extends Component {
    constructor() {
        super()
    }

    render() {

        // console.log('render MapPage')

        return (
            <div className="container bg-white">
                <div className="row height-160 ">
                    <Jumbotron bsClass="bgc-white ">
                      <h1>文件名</h1>
                          <ListGroup>
                           <ListGroupItem >要素类型</ListGroupItem>
                           <ListGroupItem>要素说明</ListGroupItem>
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

export default  MapPage
