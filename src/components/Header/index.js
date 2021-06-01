import React from 'react';
import { AppBar, Badge, Button, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';
import Menu from '../Menu';

const menu = [
  {
      name: "Incicio",
      url: "incio",
      class: 'noBackground'
  },
  {
      name: "Quines Somos",
      url: "quienes-somos",
      class: 'noBackground'
  },
  {
      name: "Contactenos",
      url: "contactenos",
      class: 'noBackground'
  },
  {
      name: "ORDENAR",
      url: "ordenar",
      class: 'background'
  },
]

const Header = (props) => {
  const classes = props.classes;
  
  const menuId = 'primary-search-account-menu';
  return (

    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.onClick}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.grow} />
        <Menu 
          menu = {menu}/>
        <div className={classes.sectionDesktop}>
          <IconButton aria-label="show 17 new notifications" color="inherit" to={`/order`} component={RouterLink}>
            <Badge badgeContent={props.itemsCount} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {

};

const mapStateToProps = (state, ownProps) => {
  return {
    itemsCount: state.itemsCount
  }
}

export default connect(mapStateToProps)(Header) ;
