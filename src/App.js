import * as React from 'react';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { HashRouter, Routes, Route } from "react-router-dom";

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage theme={theme} colorMode={colorMode} />} />
        <Route path="/about" element={<AboutPage theme={theme} colorMode={colorMode} />} />
      </Routes>
    </HashRouter>

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

