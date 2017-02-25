import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import   './FileList.scss';

import React, {Component} from 'react';
import {Link} from 'react-router';

import {ListGroup, ListGroupItem} from 'react-bootstrap';

class BoxList extends Component {

    constructor() {
        super()
    }

    render() {


        return (
            <div>

                <ListGroup>
                    <ListGroupItem>
                        <span className="to-left2">图标1</span>
                        <span className="to-left15">老河口地理国情基础数据</span>
                        <span className="to-left70">12.2 GB</span>
                        <span className="to-left80">文件夹</span>
                        <span className="to-left90">2017-02-21</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <span className="to-left2">图标2</span>
                        <span className="to-left15">武汉地图</span>
                        <span className="to-left70">-</span>
                        <span className="to-left80">文件夹</span>
                        <span className="to-left90">2017-02-20</span>
                    </ListGroupItem>
                    <ListGroupItem>...</ListGroupItem>
                </ListGroup>
            </div>

        );
    }


}

export default BoxList