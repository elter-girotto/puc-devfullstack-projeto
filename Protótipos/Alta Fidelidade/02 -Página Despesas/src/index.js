import React from 'react';
import { createRoot } from 'react-dom/client';
import UXPinFab from './UXPinFab.jsx';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<UXPinFab />, document.getElementById("root"));