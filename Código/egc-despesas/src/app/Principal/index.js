import React from 'react';
import { createRoot } from 'react-dom/client';
import Principal from './Principal.jsx';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Principal />, document.getElementById("root"));