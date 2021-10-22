import { createTheme } from '@mui/material/styles';
import grey from '@mui/material/colors/grey';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#b98f50',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000'
    },
    grey: {
      light: grey[300],
      main: grey[500],
      dark: grey[700]
    }
  },
  spacing: 4,
  typography: {
    h1: {
      letterSpacing: '0em',
      fontWeight: 400,
      fontFamily: 'Prata'
    }
  }
});
