import React from 'react';
import { createRoot } from 'react-dom/client';
import UXPinLayout from './src/UXPinLayout.jsx';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<UXPinLayout />, document.getElementById("root"));