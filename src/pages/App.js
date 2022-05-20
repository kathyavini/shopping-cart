import styled from 'styled-components';
import { theme } from '../styles/Theme';
import { ThemeProvider } from 'styled-components';

import { useState } from 'react';

import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Shop } from './Shop';
import { Cart } from './Cart';
import { ThanksMessage } from '../components/ThanksMessage';

function App({ cart }) {
  return (
    <ThemeProvider theme={theme}>
      <div className="app-container">
        <Navbar cart={cart} />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
