import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Header from '../components/Header';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProductList from '../components/productsList';
import { ListsContext } from '../Context/ItemsContextProvider';
import ItemsContextProvider from '../Context/ItemsContextProvider';
import { Button, Drawer, Grid } from '@material-ui/core';
import drawer from '../components/DrawerLeft/index';
import Hidden from '@material-ui/core/Hidden';
import { useTheme } from '@emotion/react';
import DrawerNav from '../components/DrawerLeft/DrawerNav';
import ItemPurshage from '../components/productItem/ItemPurshage';
import ItemsOrder from '../components/ItemsOrder';
import Order from '../Views/Order';
import IssTracker from '../components/IssTracker';
import SubHeaderProduct from '../components/SubHeaderProduct';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    // width:'100%',
    // height:'100%',
    background:'lightgrey'
  },
  appBar: {
    background:'#ff9800',
    [theme.breakpoints.up('sm')]: {
     // width: `calc(100% - ${drawerWidth}px) !important`,
      marginLeft: `${drawerWidth}px !important`,
    },
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none !important',
    },
  },
  sectionDesktop: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  grow: {
    flexGrow: 1,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(4, 4),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  bageContent: {
    background:'#fff'
  },
}));

const ScrollTop = (props) => {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Layout(props) {
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {

    setMobileOpen(!mobileOpen);
  };
  const container = window !== undefined ? () => window().document.body : undefined;


  return ( 
      <ItemsContextProvider>
        <ListsContext.Consumer>
          {(list, loading,filter, handleFilter,categories,error) => (   
            <>            
              <CssBaseline />
              <Header 
                onClick={() => handleDrawerToggle()} 
                handleFilter = {list.handleFilter} 
                categories = {list.categories} 
                loading = {loading}
                classes = {{appBar:classes.appBar,menuButton:classes.menuButton,sectionDesktop:classes.sectionDesktop,grow:classes.grow,bageContent:classes.bageContent}}
              />
              <div className={classes.drawerHeader} />
              <Grid container spacing={4}>
                <Grid item md = {12}>
                  {/* Subheader */}
                  
                  {/* <SubHeaderProduct /> */}
                </Grid>
              </Grid>
              {/* <DrawerNav mobileOpen={mobileOpen} handleDrawerToggle={() => handleDrawerToggle()} container = {container}/> */}
              {/* <Toolbar id="back-to-top-anchor" /> */}
             
                <Switch>
                  {list.error === '' ?
                    <>
                      <Route exact path='/ordenar' render={props => list && <ProductList context={{ list }} {...props} />} />
                      <Route exact path='/:id/items' render={props => list && <ItemPurshage item={{ list }} {...props} />} />
                      <Route exact path='/order' component ={ItemsOrder} />
                      <Route exact path='/full-order' component ={Order} />
                      <Route exact path='/edit-address' component ={IssTracker} />
                      
                    </>:
                    <p>{list.error}</p>
                  }
                </Switch>
            </>
          )}
        </ListsContext.Consumer>
      </ItemsContextProvider>
  );
}

//47363808