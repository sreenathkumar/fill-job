import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/css/popup.css';
import SignIn from '../../components/SignIn';
import PopupContents from './PopupContents';


const container: HTMLElement = document.createElement('div');
container.setAttribute('id', 'popup-container');
document.body.appendChild(container);
const root = createRoot(container);

root.render(
   <>
      <PopupContents />
   </>
);