import React from 'react';
import { createRoot } from 'react-dom/client';
import Produtos from './Produtos.jsx';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Produtos />, document.getElementById("root"));