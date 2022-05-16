import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { StyledButton } from './styles/StyledButton';
import { theme } from './styles/Theme';
import { ThemeProvider } from 'styled-components';
import { CartSummary } from './components/CartSummary';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <ThemeProvider theme={theme}>
        <StyledButton>Default Button</StyledButton>
        <StyledButton filled>Filled Button</StyledButton>
        <CartSummary />
      </ThemeProvider>
    </div>
  );
}

export default App;
