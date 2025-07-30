import React from 'react';
import { createRoot } from 'react-dom/client';
import NovaSubcategoriaProduto from './NovaSubcategoriaProduto.jsx';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<NovaSubcategoriaProduto />, document.getElementById("root"));