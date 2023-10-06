import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/css/popup.css';
import SignIn from '../../components/SignIn';


const container = document.createElement('div');
container.setAttribute('id', 'popup-container');
document.body.appendChild(container);
const root = createRoot(container);
root.render(
   <>
      <SignIn />
   </>
);