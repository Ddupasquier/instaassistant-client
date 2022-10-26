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
        myColorInvert: 'rgba(255, 255, 255, .7)',
        menu: 'rgb(34, 34, 34)',
        font: '#fff',
        font9: 'rgba(255, 255, 255, 0.9)',
        font6: 'rgba(255, 255, 255, 0.6)',
        font4: 'rgba(255, 255, 255, 0.4)',
        font1: 'rgba(255, 255, 255, 0.1)',
        solid: '#000000',
        configButton: 'rgba(165, 0, 255, 0.7)',
        tableLines: 'rgba(0, 0, 0, .2)',
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
        myColorInvert: 'rgba(95, 95, 95, 0.55)',
        menu: 'rgb(212, 212, 212)',
        font: '#000',
        font9: 'rgba(0, 0, 0, 0.9)',
        font6: 'rgba(0, 0, 0, 0.6)',
        font4: 'rgba(0, 0, 0, 0.4)',
        font1: 'rgba(0, 0, 0, 0.1)',
        solid: '#ffffff',
        configButton: 'rgba(125, 0, 255, 0.7)',
        tableLines: 'rgba(0, 0, 0, .2)',
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
