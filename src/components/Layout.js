import { createTheme,ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import NavBar from './Navbar';
import HeroSection from "./HeroSection";


const darkTheme=createTheme({
    palette:{
      mode: 'dark'
    }
  })

const Layout =({ pageTitle,children }) => {
    return(
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <title>{pageTitle}</title>
            <NavBar />
                { children }
        </ThemeProvider>
    )
}

export default Layout;