import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './css/globalStyles.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/pizza-shop/">
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
