import styled from 'styled-components';
import { theme } from './styles/Theme';
import { ThemeProvider } from 'styled-components';

import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Shop } from './pages/Shop';
import { Cart } from './pages/Cart';

import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app-container">
        <Navbar />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
