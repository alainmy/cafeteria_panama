import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Button, Menu } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    body: {
        height: '100%',
        width: '100%'
      },
    blockBanner: {
        backgroundImage: `url(${"assets/images/banner.jpg"})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: 675,
      },
      blockBannerMenu: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        color: 'white'
      },
      blockBannerMenu2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly', 
        '& span': {
            marginLeft: 5,
            fontWeight: 'bold'
          },
      },
      buttonClass: {
          background: '#F37500',
        //   borderRadius: 23, 
          width: 136
      },
      blockBannerNews:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 200 
      },
      blockBannerNews2:{
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '& p': {
            fontSize: 55,
            fontWeight: 'bold',
            fontFamily: 'mono',
            color: '#F37500'
          },
          '& span': {
            fontSize: 16,
            // color: '#F37500'
            // fontWeight: 'bold'
          },
      },
      buttonClass2: {
        background: '#885939',
      //   borderRadius: 23, 
        width: 250,
        marginTop: 20
    },
}));

const LandPageIndex = () => {
    const classes = useStyles();

    return (<>
    <div className={classes.body}>
        <div className={classes.blockBanner}>
        <Container maxWidth="lg">
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.blockBannerMenu}>
         <Grid item xs={12} sm={12} md={12} lg={2} className={classes.blockBannerMenu1}>Logo</Grid>
         <Grid item xs={12} sm={12} md={12} lg={8} className={classes.blockBannerMenu2}>
         <span>INICIO</span>
         <span>NOSOTROS</span>
         <span>SEDES</span>
         <span>CONTACTO</span>
         </Grid>
         <Grid item xs={12} sm={12} md={12} lg={2} className={classes.blockBannerMenu3}>
         <Button color='white'
        size="large"
        className={classes.buttonClass}
        aria-controls="simple-menu"
      >
        MENU
      </Button>
         </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.blockBannerNews}>
    
        <Grid item xs={12} sm={12} md={12} lg={8} className={classes.blockBannerNews2}>
           <div style={{marginTop: 143}}> <p>Estamos en varios lugares de Panamá</p>
           {/* <div style={{backgroundColor: 'white', width: '56%', borderRadius: 5}}>  */}
           <span>Es un placer mostrarte la parte gastronomica del pais</span><br/>
            <span>No te arrepentiras</span>
            {/* </div> */}
           </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} className={classes.blockBannerNews1}>
        <Button color='#F37500'
        size="large"
        className={classes.buttonClass2}
        aria-controls="simple-menu"
      >
        VER SEDES
      </Button>
        </Grid>
        </Grid>
        </Container>
        </div>
    </div>
    
    </>);
};

export default LandPageIndex;
