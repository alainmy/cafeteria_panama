import React from 'react';
import { AppBar, Badge, Button, IconButton, makeStyles, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { AccountCircle } from '@material-ui/icons';

const Header = (props) => {
  const classes = props.classes;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (item) => {
    setAnchorEl(null);
    props.handleFilter(item);
  };
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

        <Button aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="primary" variant="contained" onClick={handleClick}>
          Categorías
          </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {!props.loading ?
            props.categories.map((item, index) => (
              <MenuItem key={`${item}-${index}`} onClick={event => handleClose(item)}>{item}</MenuItem>
            )) :
            <p>Loading ..</p>
          }
        </Menu>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          {/* <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton> */}
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon />
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

export default Header;
