import { Container, Divider, Grid, List, ListSubheader, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import ModalMap from '../ModalMap';
import OrderForm from '../OrderForm';
import ItemOrder from './ItemOrder';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        marginBottom: theme.spacing(3)
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
        <>
            <Container maxWidth="md">
                <ModalMap open = {open} handleClose = {handleClose}/>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        {/* <Paper>

                        </Paper> */}
                        {props.order.items ?
                            props.order.items.map((item, index) =>
                            (
                                <Paper key={`${item}-${item._id}`} className={classes.paper}>


                                    <ItemOrder item={item} />


                                    {/* <Divider /> */}

                                </Paper>
                            )
                            )
                            : <p>Loading ....</p>
                        }
                    </Grid>
                    <Grid item md={6}>
                        <Paper className={classes.paper}>
                            <OrderForm handleOpen = {handleOpen}/>
                        </Paper>

                    </Grid>
                </Grid>


            </Container>
        </>
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
