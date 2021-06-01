
import * as React from 'react';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Avatar, Button, Chip, Divider, Grid, makeStyles, Paper } from '@material-ui/core';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';

import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  paper:{
    display:'flex',
    flexDirection:'column',
    padding:theme.spacing(2),
    //alignItems:'center'
  },
  paperHeader:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    padding:theme.spacing(2),
    alignItems:'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection:'column',
      justifyContent:'space-between',
      alignItems:'center'
  },
  },
  headerAvatar:{
    display:'flex',
    flexDirection:'column',
    
  },
  headerDesc:{
    width:'100%',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    marginLeft:theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      alignItems:'center',
  },
  },
  paperContent:{
    display:'flex',
    flexDirection:'column',
    padding:theme.spacing(2)
  },
  paperActions:{
    width:'100%',
    display:'flex',
    flexDirection:'column',
    padding:theme.spacing(2),
    justifyContent:'flex-end'
  },
  inline: {
    display: 'inline',
  },
  inblock: {
    display: 'block',
  },
  addsBox:{
    display:'flex',
    flexDirection:'row',
    //justifyContent:'space-between',
    flexWrap:'wrap'
  },
  ChipMarginBottom:{
   margin:theme.spacing(0.5),
  },
  price:{
    fontWeight:'bold'
  },
  add:{
    fontWeight:'bold'
  }
}));

export default function ItemOrder(props) {
  const classes = useStyles();
  const item = props.item;
  const keys = item._idadds ? Object.keys(props.item._idadds) : [];
  let match = useRouteMatch();
  console.log(props)

  const renderAdds = (adds) => {
      console.log(adds)
    for(let val in adds){
        return <Chip label={val} variant="outlined" className={classes.Chip}/>
      }
  }
  return (
    // <Link component={RouterLink}}>
      
    // <Grid container justify='center' alignItems='center' spacing={2}>
    //   <Grid item xs = {12} md = {12}>
        <div className={classes.paper}>
            <div className={classes.paperHeader}>
              <div className={classes.headerAvatar}>
                <Avatar alt="Remy Sharp" src={`https://backend.nelosoftt.com/image/${props.item._filename}`} />
              </div>
              
              <div className = {classes.headerDesc}>
                <Typography variant="h6" color="primary" >{`${props.item.name}(${props.item.count})`}</Typography>
                <Typography variant="body2" color="primary" className = {classes.price}>{`$${props.item.price} `}</Typography>
                <IconButton aria-label="delete" color = 'error'>
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
            
            {keys.length > 0 ? (
                <>
                  <Divider />
                  <div className={classes.paperContent}>
                    <Typography variant="body2" color="primary" gutterBottom className = {classes.add}>Agregos:</Typography>
                    <div className= {classes.addsBox}>
                      
                          {Object.keys(props.item._idadds).map((item) => (
                              <Typography variant="caption" color="primary"> {item}, </Typography>
                              // <Chip size="small" label={item} variant="outlined" className={classes.ChipMarginBottom}/>
                              ))
                          }
                      
                    </div>
                  </div>
              </>
              ):null
              }
            
        </div>
      // </Grid>
      // </Grid>
     
   

  );
}
