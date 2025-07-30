import React from 'react';
import { createRoot } from 'react-dom/client';
import NovoEstabelecimento from './NovoEstabelecimento.jsx';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<NovoEstabelecimento />, document.getElementById("root"));