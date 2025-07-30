import React from 'react';
import { createRoot } from 'react-dom/client';
import Estabelecimentos from './Estabelecimentos.jsx';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Estabelecimentos />, document.getElementById("root"));