import React from 'react';
import { createRoot } from 'react-dom/client';
import SignUp from '../../components/Signup';


const container = document.createElement('div');
container.setAttribute('id', 'root');
document.body.appendChild(container);
const root = createRoot(container);
root.render(
   <>
      <SignUp />
   </>
);