import React from 'react';
import {Link} from 'react-router';

import {Map, TileLayer, Marker, Popup} from 'react-leaflet';

import '../style/mapview.scss'

class MapView extends React.Component {
    constructor() {

        super();
        console.log('constructor mapview')
        // this.state = {
        //     lat: 51.505,
        //     lng: -0.09,
        //     zoom: 13,
        // };
    }

    render() {

        // let {position, zoomLevel} = this.props;
       let position = [30.52935 , 114.35485];
        let zoomLevel = 18;
        console.log('render mapview')

        return (
            <Map center={position} zoom={zoomLevel}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <Marker position={position}>
                    <Popup>
                        <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
                    </Popup>
                </Marker>
            </Map>
        );
    }
}

export default MapView
