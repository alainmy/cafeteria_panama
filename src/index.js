import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { StaticRouter as Router } from 'react-router-dom';
import App from './App';
import theme from './theme';
const context = {}
ReactDOM.render(
  
  <ThemeProvider theme={theme}>
   
   <Router location={`/`} context={context}>
   {/* <CssBaseline /> */}
      <App /> 
   </Router>
  </ThemeProvider>,
  document.querySelector('#root'),
);
