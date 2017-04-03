import React from 'react';
import {Map, Circle, TileLayer, LayersControl, FeatureGroup} from 'react-leaflet';
import JQuery from 'jquery';
import {ShapeFile} from 'react-leaflet-shapefile';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import shpViewAction from '../action/shpViewAction';

const {BaseLayer, Overlay} = LayersControl;

class MapShp extends React.Component {

    constructor() {

        super();

        // this.handleFile = this.handleFile.bind(this);
        // this.readerLoad = this.readerLoad.bind(this);
        //
        // this.state = {
        //     geodata: null,
        //     isadded: false
        // }
    }


    // handleReadLocalFile(event){
    // //     console.log('read me')
    //
    // // let shapefileURL = "/static/uploads/poicopy.zip";
    // let shapefileURL = "http://192.168.99.40/boxfiles/lab/bou2_4m.zip";
    //
    //
    //
    //   fetch(shapefileURL,{
    //       mode:'cors'
    //   }).then(function(response){
    //       return response.arrayBuffer()
    //   }).then(function(buffer){
    //       let shpBuffer = buffer;
    //       console.log('文件是',shpBuffer);
    //       console.log(typeof shpBuffer);
    //         if (shpBuffer) {
    //           // var byteArray = new Uint8Array(arrayBuffer);
    //           this.setState({geodata: shpBuffer});
    //           this.setState({isadded: true});
    //           console.log('读取成功')
    //         }
    //   }.bind(this));
    //
    // //   console.log('over')
    //
    //   }




    // readerLoad(e) {
    //     this.setState({geodata: e.target.result});
    //     this.setState({isadded: true});
    //
    //     console.log('=====shp数据读取',this.state.geodata);
    //     console.log(typeof this.state.geodata);
    //
    //
    // }
    //
    //
    // handleFile(e) {
    //     var reader = new FileReader();
    //     var file = e.target.files[0];
    //     reader.onload = function (upload) {
    //         this.readerLoad(upload);
    //     }.bind(this);
    //     reader.readAsArrayBuffer(file);
    // }

    onEachFeature(feature, layer) {
        if (feature.properties) {
            layer.bindPopup(Object.keys(feature.properties).map(function (k) {
                return k + ": " + feature.properties[k];
            }).join("<br />"), {
                maxHeight: 200
            });
        }
    }


    render() {
        let {isadded,geodata,shpViewActions} = this.props;
        // console.log('=====MapShp',this.props);

        let ShapeLayers = null;

        if (isadded === true) {
            ShapeLayers = (<Overlay checked name='Feature group'>
                <FeatureGroup color='purple'>
                    <ShapeFile data={geodata} onEachFeature={this.onEachFeature} isArrayBufer={true}/>
                </FeatureGroup>
            </Overlay>);
        }

        return (
            <div>
                {/*<button className="btn btn-default" onClick={this.handleReadLocalFile.bind(this)}>ajax读本地文件</button>*/}
                <div >
                    {/* <input type="file" onChange={this.handleFile.bind(this) } className="inputfile"/>*/}
                </div>
                <Map center={[42.09618442380296, -71.5045166015625]} zoom={2} zoomControl={true}>
                    <LayersControl position='topright'>
                        <BaseLayer checked name='OpenStreetMap.Mapnik'>
                            <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"/>
                        </BaseLayer>
                        {ShapeLayers}
                    </LayersControl>
                </Map>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    isadded: state.shpView.isShpAdded,
    geodata:state.shpView.shpBufferData
});

const mapDispatchToProps = dispatch => ({
    shpViewActions: bindActionCreators(shpViewAction, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(MapShp);
// export default  MapShp;
