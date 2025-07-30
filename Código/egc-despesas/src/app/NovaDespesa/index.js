import React from 'react';
import { createRoot } from 'react-dom/client';
import NovaDespesa from './src/NovaDespesa.jsx';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<NovaDespesa />, document.getElementById("root"));