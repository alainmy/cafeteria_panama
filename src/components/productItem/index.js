
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
import { Avatar, ListItem, ListItemAvatar, ListItemText, makeStyles } from '@material-ui/core';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  inblock: {
    display: 'block',
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const item = props.item;
  let match = useRouteMatch();
  
  const { to } = props;
  //alert(to)
  const CustomLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <Link ref={ref} to={to} {...linkProps} />
      )),
    [to],
  );

  return (
    // <Link component={RouterLink}}>
      <li>
        <ListItem  component={RouterLink} to={`${to}`} disabled = {item.state !== 'ENABLE'}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={`https://backend.nelosoftt.com/image/${item._filename}`} />
        </ListItemAvatar>
        <ListItemText
          primary={item.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline }
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
              <Typography
                component="span"
                variant="body2"
                className={classes.inblock }
                color="textPrimary"
              >
                <b>price:</b> ${item.price}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      </li>
    // </Link>

  );
}
