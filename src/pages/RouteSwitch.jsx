import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import { Shop } from './Shop';
import { Home } from './Home';
import { Cart } from './Cart';
import { items } from '../constants/items';

import { useState } from 'react';

const RouteSwitch = () => {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App cart={cart} />}>
          <Route index element={<Home />} />
          <Route
            path="/shop"
            element={<Shop cart={cart} setCart={setCart} items={items} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} items={items} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
