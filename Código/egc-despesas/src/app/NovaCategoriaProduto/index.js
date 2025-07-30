import React from 'react';
import { createRoot } from 'react-dom/client';
import NovaCategoriaProduto from './NovaCategoriaProduto.jsx';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<NovaCategoriaProduto />, document.getElementById("root"));