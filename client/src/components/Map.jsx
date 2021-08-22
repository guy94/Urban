import React, { Component } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import Geocode from "react-geocode";
import SearchBar from './SearchBar'
import Supercluster from 'supercluster'
import useSupercluster from 'use-supercluster'
Geocode.setApiKey(process.env.GOOGLE_API_KEY);
Geocode.enableDebug();


class Map extends Component {

    constructor(props) {
        super(props);
        this.state = { center: {lat: 31.771959, lng:35.217018},
                        zoom: 12,
                        bounds: null,
                        markers: [],
                        cluster: null,
                        mapOptions: {
                            center: {lat: 31.771959, lng:35.217018},
                            zoom: 12
                        }
                        };
        this.mapRef = React.createRef((ref) => {
            this.mapRef = ref
        });
    }

    /*
    handles map center change in location.
    */
    handleCenterCallBack = (newCenter) => {
        this.setState({center: newCenter})
    }

    addMarker = (e) => {
        const marker = {position: {lat: e.latLng.lat(), lng: e.latLng.lng()}, time: new Date().toISOString()};
        this.setState({markers: [...this.state.markers, marker]});
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     if(this.state.center.lat === nextState.center.lat){
    //       return false
    //     }else{
    //       return true
    //     }
    //   }

    createClusters = () => {
        const points = this.state.markers.map(marker => { return {
            type: "Feature",
            properties: {
                cluster: false,
                markerId: marker.time,
                category: "travel-marker"
              },
              geometry: { type: "Point", coordinates: [marker.lat, marker.lng] }
        }
        })

    //     ({clusters} = useSupercluster({ 
    //       points, 
    //       bounds, 
    //       zoom,
    //       options: {radius: 75, maxZoom: 20}
    //   }))
    }

    render() { 

        /* 
        wrapps the map element as a DOM element.
        */        
        const WrappedMap = withScriptjs(withGoogleMap((props) =>
            
            <GoogleMap ref={this.mapRef}
                defaultZoom={this.state.zoom}
                defaultCenter={this.state.center}
                onClick={this.addMarker}
                // onChange={({zoom, bounds}) =>{
                //     this.setState({zoom: zoom, bounds: [bounds.nw.lng,
                //         bounds.se.lat,
                //         bounds.se.lng,
                //         bounds.nw.lat]})
                // }}
            >
                {props.isMarkerShown && <Marker position={this.state.center} />}
                <MyMarkers markers={this.state.markers}></MyMarkers>
            </GoogleMap>
            ))

        return ( <>
                    <h1>Map</h1>
                    <div style={{height: '100vh', width: '100vw'}}>
                        <SearchBar mapRef={this.mapRef} center={this.center} changeCenter={this.handleCenterCallBack}></SearchBar>
                        <WrappedMap isMarkerShown googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDReDgyRM1t9H2HncIec_v_zh2DeJGggT0`}
                        loadingElement={<div style={{height: '100%'}}/>}
                        containerElement={<div style={{height: '100%'}}/>}
                        mapElement={<div style={{height: '100%'}}/>}
                        />
                    </div>
                 </> );
    }

    componentDidMount() {
        // this.mapRef.addEventListener('onclick', this.addMarker)
    }
}

class MyMarkers extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            {}
            {this.props.markers.map((marker) => {
                return (<Marker position={marker.position} key={marker.time}/>)
            })}
            </>
         );
    }
}
 
export default Map;