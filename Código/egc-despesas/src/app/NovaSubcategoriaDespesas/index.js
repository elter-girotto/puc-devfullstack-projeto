import React from 'react';
import { createRoot } from 'react-dom/client';
import NovaSubcategoriaDespesas from './src/NovaSubcategoriaDespesas.jsx';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<NovaSubcategoriaDespesas />, document.getElementById("root"));