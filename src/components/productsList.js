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
import { Button, Grid, Container, ListSubheader } from '@material-ui/core';

function ProductList(props) {
 console.log(props)
   let items = props.items.list.lists.filter(item =>{
       return item.category === props.items.list.filter && props.items.list.filter !== 'ALL'
   });
   
   items = items.length > 0 ? items : props.items.list.lists;
    // const [items, setItems] = useState([]);
    // const [itemsDisplay, setItemsDisplay] = useState([]);
    // const [hasMore, setHasMore] = useState(true);
    // const [page, setPage] = useState(1);
    // const [itemPerPage, setItemPerPage] = useState(10);
    // const [totalItems, setTotalItems] = useState(props.data.length);
    // const [loading, setLoading] = useState(true);

    return (
        <Container maxWidth="md">
          <Grid container justifyContent="center" spacing={2}>
                <Grid item sm={12}>
                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                         {props.items.list.filter}
                        </ListSubheader>
                      }
                    >
                    
                        {!props.items.list.loading ?
                            items.map((item,index) =>
                            (
                                <div key={`${item}-${index}`}>
                                    <ProductItem  item={item} index ={index} />
                                    <Divider />
                                </div>
                            )
                            ) : <p>Loading ....</p>
                        }
                    </List>
                </Grid>
            </Grid>
        </Container>
    );

}


export default ProductList;