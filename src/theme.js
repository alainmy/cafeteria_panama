import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(0, 0, 0, 0.87)',
      light: '#ffb74d'
    },
    secondary: {
      main: '#ff9800',
    },
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f'
    },
    background: {
      default: '#fff',
    },
  },
});
    
export default theme;
