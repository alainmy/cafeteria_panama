import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import HocAux from '../../Hoc/Hoc';
import { Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';


const mapStyles = {
    width: '50%',
    height: '50%',
    display: "flex",
    flexDirection:"column",
    position:'none'
};

const MapContainer = (props) => {
    let iconMarker = new window.google.maps.MarkerImage(
        "https://img.icons8.com/color/48/000000/satellite.png",
        null,
        null,
        null,
        new window.google.maps.Size(32, 32)
    );
    const [markers,setMarkers] = useState([]);
    const [mymarkers,setMymarkers] = useState(props.location);
    const [place, setPlace] = useState({})
    const [showingInfoWindow, setShowingInfoWindow] = useState({})
    const [activeMarker, setActiveMarker] = useState({})
    const [selectedPlace, SetSelectedPlace] = useState({})
    const history = useHistory();
    const {lat,lng} = props.location
    
    const mapClicked = async (mapProps, map, clickEvent) => {
        setShowingInfoWindow(false);
        setActiveMarker(null);
        
        console.log(clickEvent.latLng.lat())
        const position = {lat: clickEvent.latLng.lat(), lng: clickEvent.latLng.lng()};
        setMymarkers(position)
        
        props.locating(position);
        history.push('/order');

        const geocoder = new props.google.maps.Geocoder();
        geocoder.geocode({ location: position }, (results, status) => {
            if (status === "OK") {
              if (results[0]) {
              } else {
                window.alert("No results found");
              }
            } else {
              window.alert("Geocoder failed due to: " + status);
            }
          });
        
      
        setMarkers(markers.concat(position));
    }
    const onMarkerClick = (props, marker, e) => {
        SetSelectedPlace(props);
        setActiveMarker(marker);
        setShowingInfoWindow(true);
        console.log(props)
    }
    let mapTrack = ((props.latitude !== "") ?
        <Map google={props.google} style={{ width: '100%', height: '100%' }} zoom={10} initialCenter={{lat: lat, lng: lng}} onClick={mapClicked}>
            {/* {markers.length > 0 ?  */}
                {/* markers.map((item,index) =>( */}
                    <Marker onClick={onMarkerClick}
                        icon={iconMarker}
                        name={'Current location'}
                        position={{...mymarkers}}
                    />
        {/* //         )):null    
        // } */}
            
                <InfoWindow
                    marker={activeMarker}
                    visible={showingInfoWindow}
                >
                <div>
                    <h1>{selectedPlace.name}</h1>
                </div>
            </InfoWindow>
        </Map> : null)
    return (
            <>
                {mapTrack}
            </>
    );
};

MapContainer.propTypes = {

};

const mapStateToProps = (state, ownProps) => {
    return {
        location: state.location
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        locating: (location) => {
            dispatch({type:"LOCATING",payload:{location:location}})
        }
    }
}
//  export default GoogleApiWrapper({
//     apiKey: ("AIzaSyAWYRtOnZTxF3nsRUBD-0bhvzeOiHcVI9E")
// })(MapContainer)

const container =  GoogleApiWrapper({
    apiKey: ("AIzaSyAWYRtOnZTxF3nsRUBD-0bhvzeOiHcVI9E")
})(MapContainer);
export default connect( mapStateToProps,mapDispatchToProps)(container);
