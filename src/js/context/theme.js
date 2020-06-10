import { createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';

const theme = createMuiTheme({
  palette: {
    primary: {
        lighter: cyan[100],
        light: cyan[200],
        main: cyan[800],
        dark: cyan[900]
    },
    table: {
        heading: {
            background: cyan[700],
            color: "#fff"
        }
    }
  }
});

export default theme;
