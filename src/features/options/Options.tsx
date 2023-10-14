import React from 'react';
import { createRoot } from 'react-dom/client';
import '../../assets/css/app.css';
import EditJobProfile from './EditJobProfile';
import './assets/css/options.css';


const container = document.createElement('div');
container.setAttribute('id', 'options-container');
document.body.appendChild(container);
const root = createRoot(container);

root.render(<EditJobProfile />);