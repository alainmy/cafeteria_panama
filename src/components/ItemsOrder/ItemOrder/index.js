
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
    // justifyContent:'center',
    padding:theme.spacing(2),
    //alignItems:'center'
  },
  paperHeader:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    padding:theme.spacing(1),
    alignItems:'center',
    [theme.breakpoints.down('xs')]: {
      // flexDirection:'column',
      // justifyContent:'space-between',
      // alignItems:'center'
  },
  },
  headerAvatar:{
    display:'flex',
    flexDirection:'column',
    alignItems:'start',
    
  },
  headerDesc:{
    display:'flex',
    flexDirection:'column',
    marginLeft:theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
     // alignItems:'center',
  },
  },
  headerFunc:{
    width:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'flex-end',
    marginLeft:theme.spacing(1),
  //   [theme.breakpoints.down('xs')]: {
  //    // alignItems:'center',
  // },
  },
  paperContent:{
    display:'flex',
    flexDirection:'column',
    padding:theme.spacing(1)
  },
  paperActions:{
    width:'100%',
    display:'flex',
    flexDirection:'column',
    padding:theme.spacing(1),
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
    padding:theme.spacing(0.5),
    fontWeight:'bold',
    background:'#ff9800',
    width:'auto',
    borderRadius:'2px'
  },
  add:{
    fontWeight:'bold'
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginRight: theme.spacing(2)
},
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
        <div className={classes.paper}>
            <div className={classes.paperHeader}>
              <div className={classes.headerAvatar}>
                <Avatar alt="Remy Sharp" src={`https://backend.nelosoftt.com/image/${props.item._filename}`} className={classes.large} />
              </div>
              
              <div className = {classes.headerDesc}>
                <Typography variant="h6" color="primary" >{`${props.item.name}(${props.item.count})`}</Typography>
                <Typography variant="caption" color="primary" component="span" >
                  <span className = {classes.price}>
                  {`$${props.item.price} `}
                  </span>
                </Typography>
              </div>
              <div className = {classes.headerFunc}>
                <IconButton aria-label="delete">
                  <DeleteIcon color = 'error'/>
                </IconButton>
              </div>
            </div>
            
            {keys.length > 0 ? (
                <>
                  <Divider />
                  <div className={classes.paperContent}>
                    <Typography variant="body2" color="primary" gutterBottom className = {classes.add}>Agregos:</Typography>
                    <div className= {classes.addsBox}>
                      
                          {Object.keys(props.item._idadds).map((item,index) => (
                              <Typography key={`${item}-${index}`} variant="caption" color="primary"> {item}, </Typography>
                              // <Chip size="small" label={item} variant="outlined" className={classes.ChipMarginBottom}/>
                              ))
                          }
                    </div>
                  </div>
              </>
              ):null
              }
            
        </div>
  );
}
