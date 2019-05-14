import React from 'react';
import './App.css';

import Layout from './components/Layout'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: blue,
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
          <Layout />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
