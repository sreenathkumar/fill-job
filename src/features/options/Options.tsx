import React from 'react';
import { createRoot } from 'react-dom/client';
import SignUp from '../../components/SignUp';


const container = document.createElement('div');
container.setAttribute('id', 'options-container');
document.body.appendChild(container);
const root = createRoot(container);

root.render(
   <>
      <SignUp />
   </>
);