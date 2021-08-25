import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";
import SearchBar from './SearchBar'
import LayersCheckBox from './LayersCheckBox'
import {Helmet} from "react-helmet"
import {JSITM} from '../scripts/js-itm.js'
import axios from 'axios'

class Map extends Component {

    constructor(props) {
        super(props);
        this.state = { center: {lat: 31.771959, lng:35.217018},
                        zoom: 12,
                        bounds: null,
                        markers: [],
                        cluster: null,
                        img: '',
                        mapOptions: {
                            center: {lat: 31.771959, lng:35.217018},
                            zoom: 12,
                        },
                        map: null,
                        layers: [],
                        dynamicLayers: {},
                        layersIds: [] 
                        };
        this.mapRef = React.createRef((ref) => {
            this.mapRef = ref
        });
    }

    /*
    handles map center change in location.
    */
    handleCenterCallBack = (newCenter) => {
        this.state.map.setCenter(newCenter);
    }

    /*
    handles map api load
    */
    handleApiLoaded = (map, maps) => {
        this.setState({map: map})
    }

    tileCoordsToBBox(map, coord, zoom, tileWidth, tileHeight) {
        var proj = map.getProjection();
    
        // scale is because the number of tiles shown at each zoom level double.
        var scale = Math.pow(2, zoom);
    
        // A point is created for the north-east and south-west corners, calculated
        // by taking the tile coord and multiplying it by the tile's width and the map's scale.
        var ne = proj.fromPointToLatLng(new window.google.maps.Point( (coord.x+1) * tileWidth / scale, coord.y * tileHeight / scale));
        var sw = proj.fromPointToLatLng(new window.google.maps.Point( coord.x * tileWidth / scale, (coord.y+1) * tileHeight / scale));
    
        return [
            ne.lat(),
            ne.lng(),
            sw.lat(),
            sw.lng()          
        ];
    }

    mapOverlay = () => {
        var tileWidth = 512,
        tileHeight = 512;
        let self = this;

        let mapType = new window.google.maps.ImageMapType({
            getTileUrl: function (coord, zoom) {
                if (zoom >= 16) {

                    // The call to our earlier function
                    var bbox = self.tileCoordsToBBox(self.state.map, coord, zoom, tileWidth, tileHeight);
                    
                    //bottom_long, bottom_lat, top_long, top_lat
                    let ne = JSITM.gpsRef2itmRef(`${bbox[0]} ${bbox[1]}`).split(" ")
                    let sw = JSITM.gpsRef2itmRef(`${bbox[2]} ${bbox[3]}`).split(" ")
                    
                    console.log(self.state.map.getDiv().offsetWidth)
                    console.log(self.state.map.getDiv().offsetHeight)

                    // The server endpoint for getting the images, where we pass bbox.join(',') through
                    var url = "https://ags.govmap.gov.il/proxy/proxy.ashx?http://govmap/arcgis/rest/services/AdditionalData/MapServer/export?dynamicLayers=" + self.convertObjectToString() + 
                        "&dpi=96&transparent=true&format=png32&layers=show:" + self.state.layersIds +"&bbox=" + 
                        ne[0] + "," + ne[1] + "," + sw[0] + "," + sw[1] + "&bboxSR=2039&imageSR=2039&size=" + self.state.map.getDiv().offsetWidth + "," + self.state.map.getDiv().offsetHeight + "&f=image";
                    return url;
                }
            },
            isPng: true,
            tileSize: new window.google.maps.Size(tileWidth, tileHeight),
            opacity: 0.4
        });
        this.state.map.overlayMapTypes.push(mapType);
    }

    convertObjectToString = () => {

        let st = "[";
        let ids = []

        for(const [key, value] of Object.entries(this.state.dynamicLayers)){
            ids.push(value.id)
            st += "{'id':" + value.id + 
                    ",'name':'" + value.name + "','source':{'type':'mapLayer','mapLayerId':" + 
                    value.id + "},'minScale':" + value.minScale + ",'maxScale':" + 
                    value.maxScale + "},";
        }

        st = st.slice(0, -1)
        st += "]";
        this.setState({layersIds: ids})
        return st;
    }

    getLayer = (e) => {

        const layerKey = e.target.value;
        if(!e.target.checked){
            let {dynamicLayers} = this.state;
            delete dynamicLayers[layerKey]
            this.setState({dynamicLayers: dynamicLayers});
            
            return
        }

        let {dynamicLayers} = this.state
        const dynamicLayer = this.state.layers[layerKey]
        dynamicLayers[layerKey] = dynamicLayer

        this.setState({dynamicLayers: dynamicLayers});
    }

    async initLayers(){

        const res = await axios.post('https://cors-anywhere.herokuapp.com/https://ags.govmap.gov.il/Layers/GetTocLayers', 
        {
            Headers: {origin: '127.0.0.1:3000'}
        })  

        const layers = res.data.data['שכבות ממשלה ומוסדות ציבור'].layers
        let filteredLayers = {}

        let idx = 0;
        for(const [key, layer] of Object.entries(layers)){
            
            const {layerID, caption, minScale, maxScale} = layer
            filteredLayers[idx] = {
               id: layerID,
               name: caption,
               source: {
                   type: 'mapLayer', 
                   mapLayerId: layerID
               } ,
               minScale: minScale,
               maxScale: maxScale
            }
            idx += 1;
        }
        
        this.setState({layers: filteredLayers})

    }

    render() { 

        return ( <>
                    <br/>
                    <div id="map" style={{height: '100vh', width: '100vw'}}>
                    <Helmet>
                        <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.1.min.js"></script>
                        <script type="text/javascript" src="https://www.govmap.gov.il/govmap/api/govmap.api.js"></script>
                    </Helmet>
                        <SearchBar mapRef={this.mapRef} center={this.center} changeCenter={this.handleCenterCallBack}></SearchBar>
                        <LayersCheckBox layers={this.state.layers} getLayer={this.getLayer.bind(this)}></LayersCheckBox>
                        <GoogleMapReact ref={this.mapRef}
                            bootstrapURLKeys={{ key: 'AIzaSyDReDgyRM1t9H2HncIec_v_zh2DeJGggT0', libraries: ['geometry','drawing','places']}}
                            defaultZoom={this.state.zoom}
                            defaultCenter={this.state.center}
                            // onClick={}
                            yesIWantToUseGoogleMapApiInternals
                            onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
                            onZoomAnimationEnd={this.mapOverlay.bind(this)}
                        />
                    </div>
                 </> );
    }

    componentDidMount() {
        this.initLayers();
    }

}
 
export default Map;