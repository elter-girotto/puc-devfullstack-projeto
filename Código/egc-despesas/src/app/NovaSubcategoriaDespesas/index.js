import React from 'react';
import { createRoot } from 'react-dom/client';
import UxPinFlexbox from './src/UxPinFlexbox.jsx';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<UxPinFlexbox />, document.getElementById("root"));