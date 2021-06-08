import { Container, Divider, Grid, List, ListSubheader, makeStyles, Paper, Typography, Button, FormControl, InputLabel, Input, InputAdornment } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ModalMap from '../../components/ModalMap/index';
import { Link as RouterLink, useHistory, useRouteMatch } from 'react-router-dom';
import { GoogleApiWrapper } from 'google-maps-react';
import { AccountCircle } from '@material-ui/icons';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import IssTracker from '../../components/IssTracker';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        //justifyContent: 'center',
        //alignItems:'center',
        flexWrap: 'nowrap'
        // alignItems:'çenter'
    },
    margin: {
        margin: theme.spacing(1)
    },
    addsformGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        // alignItems:'çenter'
    },
    formBox: {
        display: 'flex',
        flexDirection: 'column',
    },
    formControl: {
        margin: theme.spacing(1),
        padding: theme.spacing(2, 1),
        border: '1px solid ThreeDLightShadow'
    },
    label: {
        margin: theme.spacing(1),
        padding: theme.spacing(2, 1),
        // border: '1px solid ThreeDLightShadow'
    },
    GroupFields: {
        marginBottom: theme.spacing(1),
        // padding: theme.spacing(2, 1),
        //border: '1px solid ThreeDLightShadow'
    },
    buttonSubmit: {
        width: '288px',
        borderRadius: 0,
        margin: theme.spacing(4, 1),
    },
    subtitle: {
        margin: theme.spacing(1),
        textAlign: 'left',
        fontWeight: 'bold'
    },
    subtitle1: {
        marginLeft: `${theme.spacing(1)} !important`,
        textAlign: 'left'
    },
    subtitle2: {
        marginLeft: theme.spacing(1),
        textAlign: 'left',
        fontWeight: 'blold'
    },
    dropzone: {
        marginTop: '24px',
        marginBottom: '16px',
        opacity: 0.5,
        '& p': {
            fontSize: '0.875rem'
        }
    },
    address:{
        width:'100%',
        padding:theme.spacing(2),
        '& .MuiInputLabel-formControl':{
            position:'relative'
        }
    }

}));

const Order = (props) => {
    const defaultData = {
        //id:props.itemsCount,
        _iditem: null,
        name: null,
        _filename: null,
        price: 0.0,
        _idadds: {},
        count: 1,
        Message: '',
    };

    const classes = useStyles()
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    const [form, setForm] = useState(defaultData);
    const [isInitialData, setIsInitialData] = useState(false);
    const [address, setAddress] = useState('');
    const history = useHistory();

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        setForm({
            ...form,
            [name]: target.value,
            ['price']: name === 'count' ? item.price * parseInt(target.value) : item.price

        });
    }

    const submitForm = () => {
        props.dispatch({ type: 'ADD_ITEM', form })
        history.push('/');
    }
    const getAddress = async () => {

        const position = { lat: -34.397, lng: 150.644 };
        const geocoder = new google.maps.Geocoder();


        geocoder.geocode({ location: position }, (results, status) => {

            if (status === "OK") {
                if (results[0]) {
                    //map.setZoom(11);
                    setAddress(results[0].formatted_address);
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


        //setMarkers(markers.concat(position));
    }
    const getUbicacion = () => {

        //Si el Navegador soporta Geolocalización HTML5 que proceda y si no enviamos una alerta
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (positionx) {

                console.log(positionx)
                var lat = positionx.coords.latitude;
                var lng = positionx.coords.longitude;

                const position = { lat: lat, lng: lng };
                const geocoder = new google.maps.Geocoder();
                debugger
                if( !props.location){
                    props.locating(position);
                }
               
                geocoder.geocode({ location: position }, (results, status) => {
                    if (status === "OK") {
                        if (results[0]) {
                            //map.setZoom(11);
                            setAddress(results[0].formatted_address);

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

            })
        }
    }
    useEffect(() => {
        getUbicacion();
    }, [])
    return (
        <>
            
                        <Paper className={classes.paper} elevation={0}>
                            <form action="" method="POST" onSubmit={submitForm}>
                                <FormControl className = {classes.address}>
                                    <InputLabel htmlFor="address">With a start adornment</InputLabel>
                                    <Input
                                        id="address"
                                        name="address"
                                        value = {address}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <LocationOnOutlinedIcon />
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </form>
                        </Paper>
                        <Paper className={classes.paper} elevation = {0}>
                            {/* <IssTracker></IssTracker> */}
                        </Paper>
                    
        </>
    );
};

Order.propTypes = {

};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        locating: (location) => {
            dispatch({type:"LOCATING",payload:{location:location}})
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        location: state.location
    }
}
const container =  GoogleApiWrapper({
    apiKey: ("AIzaSyAWYRtOnZTxF3nsRUBD-0bhvzeOiHcVI9E")
})(Order);
export default connect( mapDispatchToProps,mapStateToProps)(container)

