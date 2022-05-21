import { theme } from '../styles/Theme';
import { ThemeProvider } from 'styled-components';

import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

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
