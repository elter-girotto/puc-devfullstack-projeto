import React from 'react';
import { createRoot } from 'react-dom/client';
import Despesas from './Despesas.jsx';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Despesas />, document.getElementById("root"));