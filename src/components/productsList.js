import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { getItems } from '../actions/index.js';
import ProductItem from './productItem/index.js';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Button, Grid, Container, ListSubheader, Menu, MenuItem, makeStyles, Paper, CardMedia, Card, ListItemIcon } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Categories from './Categories/index.js';


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: `${theme.spacing(1)}px !important`,
    },
    background: {
        border: '1px solid #fff',
        backgroundColor: '#fff',
        '&:hover': {
            border: '1px solid white',
            color: '#fff'
        },
        '& :visited': {
            backgroundColor: '#fff',
            color: '#fff'
        }
    },
    paper: {
        //  background:'#ffb74d',
        width: '100%',
        marginBottom: theme.spacing(1),
        //color:'#fff'
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));
function ProductList(props) {
    const classes = useStyles();
    let items = props.context.list.lists.filter(item => {
        return item.category === props.context.list.filter && props.context.list.filter !== 'ALL'
    });
    const categories = props.context.list.categories;
    items = items.length > 0 ? items : props.context.list.lists;
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (item = null) => {
        setAnchorEl(null);
        if (item !== null) {
            props.context.list.handleFilter(item);
        }
    };
    return (
      
        <div style={{display:'flex',flexDirection:'column',padding:16}}>
                <div>
                    <Categories
                        categories={categories}
                        loading={props.context.list.loading}
                        classes={classes}
                        handleClose={handleClose}
                    />
                </div>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            {props.context.list.filter}
                        </ListSubheader>
                    }
                >

                    {!props.context.list.loading ?
                        items.map((item, index) =>
                        (
                            <div key={`${item}-${item._id}`} >
                                {/* <>
                                            <ProductItem to={`${item._id}/items`} item={item} index={index} />
                                    </>
                                    
                                    <Divider /> */}
                                <Paper key={`${item}-${item._id}`} className={classes.paper} elevation={0}>
                                    <ProductItem to={`${item._id}/items`} item={item} index={index} />
                                </Paper>
                            </div>
                        )
                        ) : <p>Loading ....</p>
                    }
                </List>
        </div>
    );

}
export default ProductList;