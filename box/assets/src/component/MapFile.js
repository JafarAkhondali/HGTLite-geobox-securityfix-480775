import React from 'react';
import {Map, Circle, TileLayer, LayersControl, FeatureGroup} from 'react-leaflet'
import JQuery from 'jquery'
import {ShapeFile} from 'react-leaflet-shapefile'

const {BaseLayer, Overlay} = LayersControl;

class MapFile extends React.Component {

    constructor() {
        super();
        this.handleFile = this.handleFile.bind(this);
        this.readerLoad = this.readerLoad.bind(this);

        this.state = {
            geodata: null,
            isadded: false
        }
    }

    readerLoad(e) {
        this.setState({geodata: e.target.result});
        this.setState({isadded: true});
        console.log(this.state)
    }

    handleFile(e) {
        var reader = new FileReader();
        var file = e.target.files[0];
        console.log('=====handleFile start')
        console.log(file)



        var oReq = new XMLHttpRequest();
        oReq.open("GET", "http://localhost:8889/bou4m.zip", true);
        oReq.responseType = "arraybuffer";

        oReq.onload = function (oEvent) {
            var arrayBuffer = oReq.response;

            this.setState({geodata: arrayBuffer});
            this.setState({isadded: true});

            console.log(this.state)
        }.bind(this);

        oReq.send();


    }

    onEachFeature(feature, layer) {
        if (feature.properties) {
            layer.bindPopup(Object.keys(feature.properties).map(function (k) {
                return k + ": " + feature.properties[k];
            }).join("<br />"), {
                maxHeight: 200
            });
        }
    }


    toArrayBuffer(buffer) {

        // 创建一个缓存对象，长度等于buffer.length
        var ab = new ArrayBuffer(buffer.length);

        // 创建一个Uint8类型的数组对象。
        var view = new Uint8Array(ab);

        for (var i = 0; i < buffer.length; ++i) {
            view[i] = buffer[i];  // 把buffer的数据拷贝到ab缓存内。
        }
        return ab;  // 返回新的 ArrayBuffer对象。
    }

    render() {
        let ShapeLayers = null;
        console.log('render mapfile')

        if (this.state.isadded === true) {
            ShapeLayers = (<Overlay checked name='Feature group'>
                <FeatureGroup color='purple'>
                    console.log('=====1')
                    <ShapeFile data={this.state.geodata} onEachFeature={this.onEachFeature} isArrayBufer={true}/>
                    console.log('=====2')
                    console.log(this.state.geodata)

                </FeatureGroup>
            </Overlay>);
        }

        return (
            <div>
                <div >
                    <input type="file" onChange={this.handleFile.bind(this) } className="inputfile"/>
                </div>
                <Map center={[42.09618442380296, -71.5045166015625]} zoom={2} zoomControl={true}>
                    <LayersControl position='topright'>
                        <BaseLayer checked name='OpenStreetMap.Mapnik'>
                            <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"/>
                        </BaseLayer>
                        {ShapeLayers}
                        {/*<Overlay checked name='Feature group'>*/}
                        {/*<FeatureGroup color='purple'>*/}
                        {/*<ShapeFile data="bou4m.zip"*/}
                        {/*onEachFeature={this.onEachFeature} isArrayBufer={false}/>*/}
                        {/*</FeatureGroup>*/}
                        {/*</Overlay>*/}
                    </LayersControl>
                </Map>
            </div>

        )
    }
}

export default MapFile