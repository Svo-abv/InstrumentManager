import { CssBaseline } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './Auth';
import Panel from './Panel';

const mdTheme = createTheme();


function App() {
  return (
    <ThemeProvider theme={mdTheme}>
      <CssBaseline enableColorScheme />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/panel" element={<Panel />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
