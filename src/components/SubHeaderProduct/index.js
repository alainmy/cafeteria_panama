import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(assets/images/images.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    [theme.breakpoints.down('md')]: {
      width:'100%'
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

const SubHeaderProduct = (props) => {
    const classes = useStyles();
  const { post } = props;
    return (
        // style={{ backgroundImage: `url(${post.image})` }}
        <Paper className={classes.mainFeaturedPost} >
        {/* Increase the priority of the hero background image */}
       
        <div className={classes.overlay} />
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                {/* {post.title} */}
                asasas
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {/* {post.description} */}
                asasas
              </Typography>
              <Link variant="subtitle1" href="#">
                {/* {post.linkText} */}
                asas
              </Link>
            </div>
          </Grid>
        </Grid>
      </Paper>
    );
};

SubHeaderProduct.propTypes = {

};

export default SubHeaderProduct;
