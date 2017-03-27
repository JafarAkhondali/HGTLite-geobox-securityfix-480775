import 'bootstrap/dist/css/bootstrap.css';
// import '../style/mapview.scss'

import React, {Component} from 'react';
import {Link} from 'react-router';

import MapView from '../component/MapView';
import MapShp from '../component/MapShp';
import MapFile from '../component/MapFile';
import MapFeature from '../component/MapFeature';
import MapVector from '../component/MapVector';

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
                <MapVector />
            </div>
        )
    }

}

export default  MapPage
