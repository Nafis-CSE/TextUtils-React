import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // 🆕 React Router import
import './index.css';
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter> {/* 👈 Router wrapper */}
      <App />
    </HashRouter>
  </StrictMode>
);
