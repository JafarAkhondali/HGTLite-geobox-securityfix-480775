import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import   './BoxList.scss';

import React, {Component} from 'react';
import {Link} from 'react-router';

import {ListGroup, ListGroupItem} from 'react-bootstrap';

  class BoxList extends Component {

    constructor() {
        super()
    }

    render() {


        return (
            <ListGroup>
                <ListGroupItem>Item 1</ListGroupItem>
                <ListGroupItem><span className="boxlist">Item 2</span></ListGroupItem>
                <ListGroupItem>...</ListGroupItem>
            </ListGroup>
        );
    }


}

export default BoxList