import React from 'react';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';

const DrawerLet = (props) =>(
    <div>
      <div className={props.toolbar} />
      <Divider />
      <List>
        {[{name: 'Inicio',url: '/'},{name:'Carta',url:'/ordenar'}, {name: 'Pedidos',url: '/order'}].map((text, index) => (
          <li>
            <ListItem key={text.name} component={RouterLink} to={`${text.url}`} >
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text.name} />
          </ListItem>
          </li>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  export default DrawerLet;