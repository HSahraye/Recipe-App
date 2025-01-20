import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client'
import './index.css';
import App from './App';

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));  // Use createRoot

// Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
