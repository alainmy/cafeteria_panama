
import { makeStyles } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    menuBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
        color: 'black',
        fontWeight:'bold',
        textDecoration: 'none'
    },
    noBackground: {
        background: 'inherit',
    },
    background: {
        background: 'black',
        color: '#fff',
        border: '1px solid #ff9800',
        borderRadius: '4px'
    },
}));


const Menu = (props) => {
    const classes = useStyles();
    console.log(props)
    const { menu } = props;
    return (
        <div className={classes.menuBox}>
            {
                menu.map((item, index) => (
                    <Link
                    key={`${item}-${index}`}
                        to={`/${item.url}`}
                        className={`${classes[item.class]} ${classes.toolbarLink}`}
                    >
                        { item.name}
                    </Link>
                ))
            }
        </div>
    );
};

Menu.propTypes = {
    menu : PropTypes.array.isRequired,
};

export default Menu;
