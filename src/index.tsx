import React from 'react';
import ReactDOM from 'react-dom/client'; // Import correto para React 18
import 'normalize.css';
import './index.css';
import Router from './routes';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
