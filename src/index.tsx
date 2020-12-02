import React from 'react';
import ReactDOM from 'react-dom';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core';

import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
