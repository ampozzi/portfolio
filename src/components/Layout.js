import { useTheme,createTheme,ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React, {useState,useMemo} from 'react';
import NavBar from './Navbar';
import { ColorModeContext } from './ColorModeContext';

const Layout =({ pageTitle,children }) => {
  const [mode, setMode] = React.useState('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  )

  return(
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <title>{pageTitle}</title>
          <NavBar />
          { children }
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default Layout;