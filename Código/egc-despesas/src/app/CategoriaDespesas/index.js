import React from 'react';
import { createRoot } from 'react-dom/client';
import CategoriaDespesas from './CategoriaDespesas.jsx';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<CategoriaDespesas />, document.getElementById("root"));