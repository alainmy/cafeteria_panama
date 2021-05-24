
import * as React from 'react';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Avatar, Button, Chip, Divider, Grid, ListItem, ListItemAvatar, ListItemText, makeStyles, Paper } from '@material-ui/core';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  paper:{
    display:'flex',
    flexDirection:'column',
    padding:theme.spacing(2)
  },
  paperHeader:{
    display:'flex',
    flexDirection:'row',
    padding:theme.spacing(2),
  },
  headerAvatar:{
    display:'flex',
    flexDirection:'column',
  },
  headerDesc:{
    width:'100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginLeft:theme.spacing(2),
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
  }
}));

export default function ItemOrder(props) {
  const classes = useStyles();
  const item = props.item;
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
      
    <Grid container justifyContent="center" spacing={2}>
    <Grid item sm={12}>
        <div className={classes.paper}>
            <div className={classes.paperHeader}>
              <div className={classes.headerAvatar}>
                <Avatar alt="Remy Sharp" src={`https://backend.nelosoftt.com/image/${props.item._filename}`} />
              </div>
              
              <div className = {classes.headerDesc}>
                <Typography variant="subtitle1" color="initial" fontWeight='bold' >{`${props.item.name}(${props.item.count})`}</Typography>
                <Typography variant="subtitle1" color="initial" fontWeight='bold' >{`$${props.item.price} `}</Typography>
              </div>
            </div>
            <Divider />
            {props.item._idadds ? (
                <>
                  <div className={classes.paperContent}>
                    <Typography variant="body2" color="initial" gutterBottom>Agregos:</Typography>
                    <div className= {classes.addsBox}>
                      
                          {Object.keys(props.item._idadds).map((item) => (
                              <Chip size="small" label={item} variant="outlined" className={classes.ChipMarginBottom}/>
                              ))
                          }
                      
                    </div>
                  </div>
                  <Divider />
              </>
              ):null
              }
              <div className ={classes.paperActions}>
                <Button size="small" color="error" variant="contained" disableElevation>
                    Eliminar
                </Button>
              </div>
            
        </div>
      </Grid>
      </Grid>
     
   

  );
}
