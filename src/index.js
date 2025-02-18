import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
// index.js
import  App  from './App.js';  // Use named import since it's a named export


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
    <App />
    </StrictMode>

);

