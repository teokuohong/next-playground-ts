import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        },
        background: {
            default: '#1a1c33'
        }
    },
    typography: {
        fontFamily: 'Consolas',
        body1: {
            color: '#FFFFFF',
            fontSize: '18px'
        }
    }
});

export default theme;