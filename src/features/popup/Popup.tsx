import React from 'react';
import { createRoot } from 'react-dom/client';
import SignUp from '../../components/Signup';
import './assets/css/popup.css'

const container = document.createElement('div');
container.setAttribute('id', 'popup-container');
document.body.appendChild(container);
const root = createRoot(container);
root.render(
   <>
      <SignUp />
   </>
);