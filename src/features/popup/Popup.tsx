import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/css/popup.css';
import App from './App';


const container: HTMLElement = document.createElement('div');
container.setAttribute('id', 'popup-container');
document.body.appendChild(container);
const root = createRoot(container);

root.render(
   <>
      <App />
   </>
);