import React from 'react';
import { render } from 'react-dom';

import './styles/main.css';

import App from './App';


const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);

render(<App />, root);