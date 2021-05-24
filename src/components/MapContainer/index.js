import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import HocAux from '../../Hoc/Hoc';


const mapStyles = {
    width: '70%',
    height: '70%',
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
    const [place, setPlace] = useState({})
    const [showingInfoWindow, setShowingInfoWindow] = useState({})
    const [activeMarker, setActiveMarker] = useState({})
    const [selectedPlace, SetSelectedPlace] = useState({})

    const mapClicked = async (mapProps, map, clickEvent) => {
        setShowingInfoWindow(false);
        setActiveMarker(null);
        
        console.log(clickEvent.latLng.lat())
        const position = {lat: clickEvent.latLng.lat(), lng: clickEvent.latLng.lng()};
        const geocoder = new props.google.maps.Geocoder();
        console.log(props)
        geocoder.geocode({ location: position }, (results, status) => {
            if (status === "OK") {
              if (results[0]) {
                map.setZoom(11);
                // const marker = new google.maps.Marker({
                //   position: position,
                //   map: map,
                // });
                // infowindow.setContent(results[0].formatted_address);
                // infowindow.open(map, marker);
                console.log(results)
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
        <Map google={props.google} zoom={5} style={mapStyles} initialCenter={{ lat: 40.854885, lng: -88.081807 }} onClick={mapClicked}>
            {markers.length > 0 ? 
                markers.map((item,index) =>(
                    <Marker key={index} onClick={onMarkerClick}
                        icon={iconMarker}
                        name={'Current location'}
                        position={{lat: item.lat, lng: item.lng}}
                    />
                )):null    
        }
            <Marker onClick={onMarkerClick}
                icon={iconMarker}
                name={'Current location'}
            />
            
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
        <HocAux>
            {mapTrack}
        </HocAux>
    );
};

MapContainer.propTypes = {

};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAWYRtOnZTxF3nsRUBD-0bhvzeOiHcVI9E")
})(MapContainer)

