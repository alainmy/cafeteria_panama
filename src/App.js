import React, { PureComponent } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import ProductList from './components/productsList.js';
import getItems from './api.js';
import Layout from './layouts/layout';
import { CssBaseline, makeStyles } from '@material-ui/core';



const App = () => {
  
    return (
          <Layout/>
    );
  
}

App.propTypes = {

};

export default App;