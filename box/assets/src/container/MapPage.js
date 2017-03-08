import 'bootstrap/dist/css/bootstrap.css';
// import '../style/mapview.scss'

import React, {Component} from 'react';
import {Link} from 'react-router';

import MapView from '../component/MapView';
import MapShp from '../component/MapShp';

class MapPage extends Component {
    constructor() {
        super()
    }

    render() {
        console.log('render MapPage')
        // container bg-white
        return (
            <div className="container bg-white">
                <h1>leaflet 地图1</h1>
                <MapShp />
            </div>
        )
    }

}

export default  MapPage