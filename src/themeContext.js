import React, { createContext, useState } from 'react';
import { createTheme, NextUIProvider } from '@nextui-org/react';

const ThemeContext = createContext(false);

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleFunction = () => {
    setIsDark(!isDark);
  };

  const darkTheme = createTheme({
    type: 'dark',
    theme: {
      colors: {
        gradient:
          'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
        link: '#af6eff',
        myColor: 'rgba(95, 95, 95, 0.55)',
        menu: 'rgb(34, 34, 34)',
        font: '#fff',
        solid: '#000000',
        invert: 'invert(0)',
      },
    },
  });

  const lightTheme = createTheme({
    type: 'light',
    theme: {
      colors: {
        gradient:
          'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
        link: '#5E1DAD',
        myColor: 'rgba(255, 255, 255, .7)',
        menu: 'rgb(212, 212, 212)',
        font: '#000',
        solid: '#ffffff',
        invert: 'invert(1)',
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ isDark, toggleFunction }}>
      <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
        {children}
      </NextUIProvider>
    </ThemeContext.Provider>
  );
};
export { ThemeContext, ThemeProvider };
