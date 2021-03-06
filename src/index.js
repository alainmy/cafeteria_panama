import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
  // Redirect,
  // useHistory,
  // useLocation
} from "react-router-dom";
import App from './App';
import theme from './theme';
import { Typography } from '@material-ui/core';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import orderReducer from './Redux/OrederRecer';
import IssTracker from './components/IssTracker/index';

const context = {}

const store = createStore(orderReducer);

ReactDOM.render(
  <Provider store={store}>
  <ThemeProvider theme={theme}>
   
   <Router context={context}>
   {/* <CssBaseline /> */}
   
      <App /> 
   </Router>
  </ThemeProvider></Provider>,
  document.querySelector('#root'),
);
