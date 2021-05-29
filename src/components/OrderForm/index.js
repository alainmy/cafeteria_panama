import React, { useEffect, useState } from 'react';

import { Container, Button, Card, CardContent, CardHeader, Checkbox, Divider, FormControl, FormControlLabel, Grid, Input, InputAdornment, InputLabel, makeStyles, OutlinedInput, Paper, Radio, RadioGroup, Select, Typography, CircularProgress, CardMedia, CardActionArea, CardActions } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import PersonIcon from '@material-ui/icons/Person';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import clsx from 'clsx';
import { Label } from '@material-ui/icons';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

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
        backgroundColor:'#ffb74d' ,
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
    }

}));

const OrderForm = (props) => {
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
    const addHandleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const add = { ...form._idadds, [name]: target.value }
        setForm({
            ...form,
            ['_idadds']: add,
        });
    }
    console.log(form)
    const submitForm = () => {
        props.dispatch({ type: 'ADD_ITEM', form })
        history.push('/');
    }
    return (
        <Grid container justifyContent="center" spacing={2}>
            <Grid item sm={12}>
                <form action="" method="POST" onSubmit={submitForm}>
                    <div className={classes.GroupFields} style={{ background: 'rgb(246, 247, 249)' }}>
                        <Typography variant='h6' component='span' className={classes.subtitle1}>
                            Cantidad de Unidades
                                        </Typography>
                        <div className={`${classes.formGroup}`}>
                            <input
                                value={form.count}
                                onChange={handleChange}
                                type="text"
                                name="count"
                                className={classes.formControl}
                                placeholder="Cantidad de Unidades"
                                id="count" />
                        </div>
                        <div className={`${classes.formGroup}`}>
                            <input
                                value={`ds`}
                                onChange={handleChange}
                                onClick={props.handleOpen}
                                type="text"
                                name="Direccion"
                                className={classes.formControl}
                                placeholder="Direccion"
                                id="Direccion" />
                        </div>
                    </div>
                    <div className={classes.GroupFields} style={{ background: 'rgb(246, 247, 249)' }}>
                        <Typography variant='h6' component='span' className={classes.subtitle1}>
                            Mensage
                                        </Typography>
                        <div className={classes.formGroup}>
                            <textarea
                                value={form.Message}
                                onChange={handleChange}
                                name="Message"
                                className={classes.formControl}
                                id="Message"
                                placeholder="Mensage"
                                rows="3"></textarea>
                        </div>
                    </div>
                </form>
            </Grid>
        </Grid>

    );
};

OrderForm.propTypes = {

};

export default OrderForm;
