import { createTheme } from '@mui/material/styles';

const blueTheme = createTheme({
  id: 'blue',
  palette: {
    test: '#00bcd4',
  },
});

const redTheme = createTheme({
  id: 'red',
  palette: {
    test: '#00bcd4',
  },
});

const themes = [blueTheme, redTheme];
export default themes;
