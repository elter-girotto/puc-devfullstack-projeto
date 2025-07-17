import React from 'react';
import { createRoot } from 'react-dom/client';
import UXPinAutocomplete from './src/UXPinAutocomplete.jsx';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<UXPinAutocomplete />, document.getElementById("root"));