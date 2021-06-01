import { FormControl, IconButton, Input, InputAdornment, InputLabel, makeStyles } from '@material-ui/core';
import { GoogleApiWrapper } from 'google-maps-react';
import React, { useEffect, useState } from 'react';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import EditIcon from '@material-ui/icons/Edit';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        marginBottom: theme.spacing(3)
    },
    subheader:{
        padding:theme.spacing(2),
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    address:{
        width:'100%',
        color:theme.palette.primary,
        padding:theme.spacing(2),
        '& .MuiInputLabel-formControl':{
            position:'relative'
        }
    }
}));
const DefaultAdrees = (props) => {
    const classes = useStyles();
    const [address, setAddress] = useState('');
    
    const getUbicacion = () => {

        //Si el Navegador soporta Geolocalización HTML5 que proceda y si no enviamos una alerta
        if (navigator.geolocation) {
            
            navigator.geolocation.getCurrentPosition(function (positionx) {

                console.log(positionx)
                var lat = positionx.coords.latitude;
                var lng = positionx.coords.longitude;

                let position = { lat: lat, lng: lng };
                const geocoder = new google.maps.Geocoder();
               
                if( !props.location){
                    props.locating(position);
                }
                else{
                    position = props.location;
                }

                geocoder.geocode({ location: position }, (results, status) => {
                    if (status === "OK") {
                        if (results[0]) {
                            setAddress(results[0].formatted_address);
                            console.log(results)
                        } else {
                            window.alert("No results found");
                        }
                    } else {
                        window.alert("Geocoder failed due to: " + status);
                    }
                });

            })
        }
    };
    useEffect(() => {
        getUbicacion();
    }, [])
    return (
        <div style = {{width:'100%'}}>
            <FormControl className={classes.address} variant="outlined" >
                <InputLabel style={{color:'white'}} htmlFor="address">Dirección actual</InputLabel>
                <Input
                    style={{color:'white'}}
                    id="address"
                    name="address"
                    value={address}
                    startAdornment={
                        <IconButton style={{color:'white'}} position="start" component = {RouterLink} to ="/edit-address">
                            <LocationOnOutlinedIcon />
                        </IconButton>
                    }
                />
                
            </FormControl>
        </div>
    );
};

DefaultAdrees.propTypes = {

};
const mapStateToProps = (state, ownProps) => {
    return {
        location: state.location
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    debugger
    return {
        locating: (location) => {
            dispatch({type:"LOCATING",payload:{location:location}})
        }
    }
}
const container =  GoogleApiWrapper({
    apiKey: ("AIzaSyAWYRtOnZTxF3nsRUBD-0bhvzeOiHcVI9E")
})(DefaultAdrees);
export default connect(mapStateToProps,mapDispatchToProps)(container)
