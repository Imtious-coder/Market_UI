import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import ShopContextProvider from './strore/useStore';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
);
