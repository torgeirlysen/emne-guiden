import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material/';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import { EmneListe, FullWidthTextField } from './components/EmneListe';
import { HomePage } from './pages/HomePage';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <HomePage theme={theme} colorMode={colorMode} />
  );
}

export default function ToggleColorMode() {
  var defaultTheme = "light";
  if (localStorage.getItem("theme")) {
    defaultTheme = localStorage.getItem("theme")
  }
  const [mode, setMode] = React.useState(defaultTheme);
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {

        setMode((prevMode) => {
          localStorage.setItem("theme", (prevMode === 'light' ? 'dark' : 'light'))
          return (prevMode === 'light' ? 'dark' : 'light')
        });

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
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

