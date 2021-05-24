import React from 'react';
import { AppBar, Badge, Button, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';

const Header = (props) => {
  const classes = props.classes;
  
  const menuId = 'primary-search-account-menu';
  return (

    <AppBar position="fixed" className={classes.appBar}>
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
        <div className={classes.sectionDesktop}>
          {/* <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton> */}
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={props.itemsCount} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          {/* <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            // onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton> */}
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
