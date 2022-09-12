// import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import { Router } from './router/Router';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter >
    </ThemeProvider>
    // <ChakraProvider theme={theme}>

    // </ChakraProvider>
  );
}

export default App;
