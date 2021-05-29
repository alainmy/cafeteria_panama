import { Container, Divider, Grid, List, ListSubheader, makeStyles, Paper, Typography, Button, FormControl, InputLabel, Input, InputAdornment } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ModalMap from '../ModalMap';
import OrderForm from '../OrderForm';
import ItemOrder from './ItemOrder';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';

import DefaultAdrees from '../DefaultAdrees';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        background:'#ffb74d',
        width:'100%',
        marginBottom: theme.spacing(3)
    },
    subheaderAddress:{
        width:'100%',
        padding:theme.spacing(2),
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        color:'white'
    },
    subheader:{
        width:'100%',
        padding:theme.spacing(2),
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        color:'white'
    },
    address:{
        width:'100%',
        padding:theme.spacing(2),
        '& .MuiInputLabel-formControl':{
            position:'relative'
        }
    },
    orderButtom:{
        color:'#ffb74d',
        backgroundColor: '#fff'
    }
}));
const ItemsOrder = (props) => {

    const classes = useStyles();
    const [open,setOpen] = useState(false)
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
    };
   
    return (
        
                <Grid container spacing={2} justify='center' alignItems='center'>
                    <Grid item md={12}>
                        <Paper className={classes.paper} elevation = {0}>
                            <div className = {classes.subheaderAddress}>
                                <DefaultAdrees />
                            </div>
                        </Paper>
                        <Paper className={classes.paper} elevation = {0}>
                            <div className = {classes.subheader}>
                                <Typography variant="h6" color="primary"> ${props.order.priceTotal} </Typography>
                                <Button variant="contained" color="primary" className={classes.orderButtom} component = {RouterLink} to ="/full-order">
                                    Ordenar
                                </Button>
                            </div>
                        </Paper>
                        {props.order.items ?
                            props.order.items.map((item, index) =>
                            (
                                <Paper key={`${item}-${item._id}`} className={classes.paper} elevation = {0}>
                                    <ItemOrder item={item} />
                                </Paper>
                            )
                            )
                            : <p>Loading ....</p>
                        }
                    </Grid>
                </Grid>
    );

};

ItemsOrder.propTypes = {

};

const mapStateToProps = (state, ownProps) => {
    return {
        order: state
    }
}

export default connect(mapStateToProps)(ItemsOrder);
