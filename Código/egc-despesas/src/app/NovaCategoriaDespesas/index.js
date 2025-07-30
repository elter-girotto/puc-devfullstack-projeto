import React from 'react';
import { createRoot } from 'react-dom/client';
import NovaCategoriaDespesas from './NovaCategoriaDespesas.jsx';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<NovaCategoriaDespesas />, document.getElementById("root"));