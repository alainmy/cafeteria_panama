import React from 'react';
import { Divider, List, ListItem, ListItemIcon, ListItemText, Paper } from '@material-ui/core';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import ListAltIcon from '@material-ui/icons/ListAlt';
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link as RouterLink } from 'react-router-dom';
const menu = [
    [
        {
            name: "Incicio",
            url: "/",
            class: 'noBackground',
            icon: <HomeIcon color="secondary"/>
        },
        {
            name: "Carta",
            url: "/carta",
            class: 'background',
            icon: <RestaurantMenuIcon color="secondary"/>
        },
        {
            name: "MIS PEDIDOS",
            url: "/pedidos",
            class: 'background',
            icon: <ListAltIcon color="secondary"/>
        },
    ],
    [
        {
            name: "Ubicación",
            url: "/edit-address",
            class: 'noBackground',
            icon: <LocationOnIcon color="secondary"/>
        },
        {
            name: "Carta",
            url: "/carta",
            class: 'background',
            icon: <RestaurantMenuIcon color="secondary"/>
        },
        {
            name: "MIS PEDIDOS",
            url: "/pedidos",
            class: 'background',
            icon: <ListAltIcon color="secondary"/>
        },
    ]
]
const SideMenu = (props) => {

    //const classes = useStyles();
    // const { menu } = props;
    return (
        <Paper elevation={0}>
            <List>
                {menu.map((text, index) => (
                    <>
                        {menu[index].map((item, ind) => (
                        <li key={`${item}-${ind}`}>
                            <ListItem key={`${item}-${ind}-${ind}`} component={RouterLink} to={`${item.url}`} >
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItem>
                            
                        </li>
                    ))}
                    {index < menu.length - 1 ? <Divider /> : null}
                    </>
                ))}
            </List>
            {/* <Divider />
                      <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                          <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                          </ListItem>
                        ))}
                      </List> */}
        </Paper>
    );
};

SideMenu.propTypes = {
    // menu : PropTypes.array.isRequired,
};

export default SideMenu;
