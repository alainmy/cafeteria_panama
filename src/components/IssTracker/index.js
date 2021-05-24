import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import MapContainer from '../MapContainer/index'


const IssTracker = ({}) => {
    const [ trackerState, setTrackerState ]= useState({
        issInfo:{velocity:'', latitude:'5', longitude:'5'},
        error: false,
      });

      useEffect(() => {
        setTimeout(() => {
          Axios.get("https://api.wheretheiss.at/v1/satellites/25544.json")
          .then(response => {
            setTrackerState({
              issInfo:{velocity:response.data.velocity, latitude:response.data.latitude, longitude:response.data.longitude},
              error: false,
            })
          })
          .catch(error => {
            setTrackerState({
              issInfo:{velocity:'', latitude:'', longitude:''},
              error: false,
            })
          })
        }, 1000);
      });
    return (
        <div id="simple-modal-title">
            <MapContainer velocity= {trackerState.issInfo.velocity} latitude= {trackerState.issInfo.latitude} longitude= {trackerState.issInfo.longitude}/>
        </div>
    );
};

IssTracker.propTypes = {

};

export default IssTracker;
