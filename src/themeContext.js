import React, { createContext, useState } from 'react';
// Context has been created
const ThemeContext = createContext(false);
// Provider
const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleFunction = () => {
    setIsDark(!isDark);
  };
  return (
    <ThemeContext.Provider value={{ isDark, toggleFunction }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContext, ThemeProvider };
