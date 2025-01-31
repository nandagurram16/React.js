import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
// index.js
import  App  from './App.js';  // Use named import since it's a named export
import { Provider } from 'react-redux';
import { store } from './Redxtoolkit/Store.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
    <StrictMode>
    <App />
    </StrictMode>
</Provider>

);

