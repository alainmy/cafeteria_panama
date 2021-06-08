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
        // background:'#FAD7A0',
        width: '100%',
        marginBottom: theme.spacing(3)
    },
    paperOrder: {
        // background:'#FAD7A0',
        width: '100%',
        marginBottom: theme.spacing(3)
    },
    subheaderAddress: {
        width: '100%',
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    subheader: {
        width: '100%',
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white'
    },
    address: {
        width: '100%',
        padding: theme.spacing(2),
        '& .MuiInputLabel-formControl': {
            position: 'relative'
        }
    },
    orderButtom: {
        color: 'black',
        backgroundColor: '#ff9800',
    },
    span: {
        //backgroundColor: '#ff9800',
        //color:'',
        padding: theme.spacing(1),
        fontWeight: 'normal',
        borderRadius: '4px'
    }
}));
const ItemsOrder = (props) => {

    const classes = useStyles();
    const [open, setOpen] = useState(false)

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

        <div style={{display:'flex',flexDirection:'column',padding:16}}>
            <Paper className={classes.paper} elevation={0}>
                <div className={classes.subheaderAddress}>
                    {/* <DefaultAdrees /> */}
                </div>
            </Paper>
            <Paper className={classes.paperOrder} elevation={0}>
                <div className={classes.subheader}>
                    <Typography variant="h6" color="primary"> Precio Total: <span className={classes.span}>
                        ${props.order.priceTotal}
                    </span> </Typography>
                    <Button variant="contained" color="primary" className={classes.orderButtom} component={RouterLink} to="/full-order">
                        Ordenar
                                </Button>
                </div>
            </Paper>
            {props.order.items ?
                props.order.items.map((item, index) =>
                (
                        <Paper key={`${item}-${index}`}  className={classes.paper} elevation={0}>
                            <ItemOrder item={item} />
                        </Paper>
                    
                )
                )
                : <p>Loading ....</p>
            }
        </div>
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
