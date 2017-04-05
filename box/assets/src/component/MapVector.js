import React  from 'react'
import {
    Circle,
    CircleMarker,
    Map,
    Polygon,
    Polyline,
    Popup,
    Rectangle,
    TileLayer,
} from 'react-leaflet';

 class MapVector extends React.Component {
    render () {
        const center = [51.52, -0.01]



        const polygon = [
            [51.515, -0.09],
            [51.52, -0.1],
            [51.52, -0.12],
        ]

        const multiPolygon = [
            [[51.51, -0.12], [51.51, -0.13], [51.53, -0.13]],
            [[51.51, -0.05], [51.51, -0.07], [51.53, -0.07]],
        ]

        const rectangle = [
            [51.49, -0.08],
            [51.5, -0.06],
        ]

        const rectangle2 = [
            [51.51, -0.07],
            [51.53, -0.02],
        ]

        const rectangle3 = [
            [51.54, -0.08],
            [51.57, -0.06],
        ]

        return (
            <Map center={center} zoom={12}>
                <TileLayer
                    attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />

                <Rectangle bounds={rectangle} color='blue'>
                    <Popup>
                        <span>无要素信息</span>
                    </Popup>
                </Rectangle>
                <Rectangle bounds={rectangle2} color='blue' />
                <Rectangle bounds={rectangle3} color='blue' />
            </Map>
        )
    }
}
export default   MapVector
