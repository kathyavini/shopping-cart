import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from './pages/RouteSwitch';
import { HashRouter } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <RouteSwitch />
    </HashRouter>
  </React.StrictMode>
);
