
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
        color: 'white',
        textDecoration: 'none'
    },
    noBackground: {
        background: 'inherit',
    },
    background: {
        background: 'white',
        color: '#ff9800',
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
