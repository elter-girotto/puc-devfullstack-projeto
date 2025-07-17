import React from 'react';
import { createRoot } from 'react-dom/client';
import UXPinButton from './src/UXPinButton.jsx';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<UXPinButton />, document.getElementById("root"));