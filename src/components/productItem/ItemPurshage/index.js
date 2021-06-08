import React, { useEffect, useState } from 'react';

import { Container, Button, Card, CardContent, CardHeader, Checkbox, Divider, FormControl, FormControlLabel, Grid, Input, InputAdornment, InputLabel, makeStyles, OutlinedInput, Paper, Radio, RadioGroup, Select, Typography, CircularProgress, CardMedia, CardActionArea, CardActions, ButtonGroup, Avatar } from '@material-ui/core';
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
    headerContent: {
        display: 'flex',
        flexDirection: 'row',
        padding: theme.spacing(1),
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    headerContentDesc: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(1),

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
       // border: '1px solid black',
        borderRadius: '4px'
    },
    label: {
        margin: theme.spacing(1),
        padding: theme.spacing(2, 1),
        // border: '1px solid ThreeDLightShadow'
    },
    title: {
        fontWeight: 'bold'

    },
    GroupFields: {
        marginBottom: theme.spacing(1),
        // backgroundColor:'#ffb74d' ,
        padding: theme.spacing(2, 1),
        // color:'#ffb74d'
        //border: '1px solid ThreeDLightShadow'
    },
    subtitle: {
        margin: theme.spacing(1),
        textAlign: 'left',
        fontWeight: 'bold'
    },
    subtitle1: {
        marginLeft: `${theme.spacing(1)}px !important`,
        textAlign: 'left',
        fontWeight: 'bold'
    },
    subtitle2: {
        marginLeft: theme.spacing(1),
        textAlign: 'left',
        fontWeight: 'blold'
    },
    buttom: {
        color: '#black'
    },
    cancelCuttom: {
        color: '#f44336'
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        marginRight: theme.spacing(2)
    },
    actions: {
        width:'100%',
        padding:theme.spacing(1),
        display:'flex',
        justifyContent:'end'

    },

}));
const ItemPurshage = (props) => {
    const defaultData = {
        id: props.itemsCount,
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
            ['price']: name === 'count' ? item.price * target.value : item.price

        });
    }
    const handleIncrement = (event) => {
        const target = event.target;
        const name = target.name;
        debugger
        setForm({
            ...form,
            [name]: target.value,
            ['price']: name === 'count' ? item.price * form[name] + 1 : item.price

        });
    }
    const handleDrecrement = (event) => {
        const target = event.target;
        const name = target.name;
        setForm({
            ...form,
            [name]: target.value,
            ['price']: name === 'count' ? item.price * target.value : item.price

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
        <div>
                {!loading ? (
                    <>
                        <Card className={classes.root} elevation={0}>
                            <CardContent>
                                <div className={classes.headerContent}>
                                    <Avatar alt="Remy Sharp" src={`https://backend.nelosoftt.com/image/${item._filename}`} className={classes.large} />
                                    {/* <CardMedia
                                    component="img"
                                    alt="Remy Sharp"
                                    height="200"
                                    image={`https://backend.nelosoftt.com/image/${item._filename}`}
                                    title="Contemplative Reptile"
                                    /> */}
                                    <div className={classes.headerContentDesc}>
                                        <Typography gutterBottom variant="subtitle1" component="h2" className={classes.title} >
                                            {item.name}
                                        </Typography>
                                        <Typography variant="caption" component="p" gutterBottom >
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                    </Typography>
                                    </div>
                                </div>
                                <Divider />
                                <form action="" method="POST" onSubmit={submitForm}>
                                    <div className={classes.GroupFields} >
                                        {/* <Typography variant='subtitle2' component='span' className={classes.subtitle1}>
                                            Cantidad de Unidades
                                        </Typography> */}
                                        <div className={`${classes.formGroup} ${classes.margin}`}>
                                        <TextField
                                                        id={`count`}
                                                        label={`Cantidad de Unidades`}
                                                        type="number"
                                                        name={`count`}
                                                        value={form.count}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        onChange={handleChange}
                                                    />

                                        </div>
                                    </div>
                                    <div className={classes.GroupFields}>
                                        <Typography variant='subtitle2' component='span' className={classes.subtitle1}>
                                            Agregos
                                        </Typography>
                                        {
                                            item._idadds.map(value => (
                                                <div key={`${value}`} className={`${classes.formGroup} ${classes.margin}`}>
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
                                        {/* <Typography variant='subtitle2' component='span' className={classes.subtitle1}>
                                            Mensage
                                        </Typography> */}
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
                                <div className={classes.actions}>
                                <Button className={classes.cancelCuttom}>
                                    Cancelar
                                </Button>
                                <Button onClick={submitForm} variant="contained" color="secondary" className={classes.buttom}>
                                    Pedir
                                </Button>
                                </div>
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
          </div>
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
            dispatch({ type: 'ADD_ITEM', payload: { form: data } })
        }
    }
}
export default connect(mapStateToProps)(ItemPurshage);
