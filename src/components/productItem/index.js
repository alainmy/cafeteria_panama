
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
import Rating from '@material-ui/lab/Rating';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { FormatColorReset } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  title: {
    fontWeight: 'bold',
  },
  inblock: {
    display: 'block',
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginRight: theme.spacing(2)
  },
  functions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const item = props.item;
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const [favorite, setFavorite] = React.useState(false);
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
    <>
      <ListItem disabled={item.state !== 'ENABLE'}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={`https://backend.nelosoftt.com/image/${item._filename}`} className={classes.large} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <div className={classes.info}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  className={classes.title}
                  color="primary"
                >
                  {item.name}
                </Typography>
                <IconButton component={RouterLink} to={`${to}`}>
                  {favorite ?
                    <><FavoriteIcon color="error" /></> : <><FavoriteBorderIcon color="error" /></>
                  }

                </IconButton>
              </div>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inblock}
                color="primary"
              >
                <b>price:</b> ${item.price}
              </Typography>
              <div className={classes.functions}>
                <Rating
                  name="hover-feedback"
                  size="small"
                  value={value}
                  precision={0.5}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                />
                <IconButton component={RouterLink} to={`${to}`}>
                  <AddShoppingCartIcon color="primary" />
                </IconButton>
              </div>
            </React.Fragment>
          }
        />
      </ListItem>
    </>
    // </Link>

  );
}
