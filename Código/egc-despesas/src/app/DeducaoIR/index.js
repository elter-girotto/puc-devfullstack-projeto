import React from 'react';
import { createRoot } from 'react-dom/client';
import DeducaoIR from './DeducaoIR.jsx';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<DeducaoIR />, document.getElementById("root"));