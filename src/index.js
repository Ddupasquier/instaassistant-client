import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'contexts/themeContext';
import { ModalContextProvider } from 'contexts/modalContext';
import { UserContextProvider } from 'contexts/userContext';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <ThemeProvider>
        <ModalContextProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ModalContextProvider>
      </ThemeProvider>
    </UserContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
