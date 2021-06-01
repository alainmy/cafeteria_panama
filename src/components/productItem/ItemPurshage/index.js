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
    title: {
        color:'#ff9800'
        //border: '1px solid ThreeDLightShadow'
    },
    GroupFields: {
        marginBottom: theme.spacing(1),
        backgroundColor:'#ffb74d' ,
        padding: theme.spacing(2, 1),
        color:'#fff'
        //border: '1px solid ThreeDLightShadow'
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
    buttom:{
        color:'#fff'
    }

}));
const ItemPurshage = (props) => {
    const defaultData = {
        id:props.itemsCount,
        _iditem: null,
        name:null,
        _filename:null,
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


    const getItem = async () => {
        const { id } = props.match.params;
        const item = await props.item.list.lists.find((item) => item._id === id);
        const add = item._idadds;
        defaultData._iditem = item._id;
        defaultData.price = item.price;
        defaultData.name = item.name;
        defaultData._filename = item._filename;
        add.map((item) => {

            defaultData._idadds[item] = 0
            return;
        })
        setForm(defaultData);
        setItem(item);
        setLoading(false);
    }

    useEffect(() => {
        getItem();
    }, [])

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
        props.dispatch({type:'ADD_ITEM',form})
        history.push('/');
    }
    return (
        <Grid container spacing={2}>
            <Grid item lg={12}>
            {!loading ? (
                <>
                    <Card className={classes.root} elevation={0}>
                        
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="200"
                                image={`https://backend.nelosoftt.com/image/${item._filename}`}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" className={classes.title} >
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" component="p" gutterBottom style = {{marginBottom:40}} className={classes.title}>
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>

                                <form action="" method="POST" onSubmit={submitForm}>
                                    <div className={classes.GroupFields} >
                                        <Typography variant='subtitle1' component='span' className={classes.subtitle1}>
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
                                    </div>
                                    <div className={classes.GroupFields}>
                                        <Typography variant='subtitle1' component='span' className={classes.subtitle1}>
                                            Agregos
                                        </Typography>
                                        {
                                            item._idadds.map(value => (
                                                <div className={`${classes.formGroup} ${classes.margin}`}>
                                                    {/* <InputLabel className={classes.label} shrink htmlFor={value}>{value}</InputLabel> */}

                                                    <TextField
                                                        id={value}
                                                        label={value}
                                                        type="number"
                                                        name={value}
                                                        value={form._idadds[value]}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        onChange={addHandleChange}
                                                    />
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className={classes.GroupFields}>
                                        <Typography variant='subtitle1' component='span' className={classes.subtitle1}>
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

                            </CardContent>
                       
                        <CardActions>
                            <Button size = "small" variant="contained" color = "secondary" className = {classes.buttom}>
                                Cancelar
                            </Button>
                            <Button size = "small" onClick={submitForm} variant="contained" color = "secondary" className = {classes.buttom}>
                                Pedir
                            </Button>
                        </CardActions>
                    </Card>

                </>) : (
                <>
                    <div>
                        <CircularProgress />
                        <CircularProgress color="secondary" />
                    </div>
                </>
            )
            }
            </Grid>
        </Grid>
    );
};

ItemPurshage.propTypes = {

};
const mapStateToProps = (state, ownProps) => {
    return {
        itemsCount: state.itemsCount
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: (data) => {
            dispatch({type:'ADD_ITEM',payload:{form:data}})
        }
    }
}
export default connect(mapStateToProps)(ItemPurshage);
