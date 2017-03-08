import 'bootstrap/dist/css/bootstrap.css';
// import '../style/mapview.scss'

import React, {Component} from 'react';
import {Link} from 'react-router';

import MapView from '../component/MapView';

class MapPage extends Component {
    constructor() {
        super()
    }

    render() {
        console.log('render MapPage')
        // container bg-white
        return (
            <div>
                <h1>leaflet 地图</h1>
                < MapView />
            </div>
        )
    }

}

export default  MapPage