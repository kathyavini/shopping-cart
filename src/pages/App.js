import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

function App({ cart }) {
  return (
    <div className="app-container">
      <Navbar cart={cart} />
      <Outlet />
    </div>
  );
}

export default App;
