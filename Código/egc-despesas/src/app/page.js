"use client";

import React from 'react';
import NovaCategoriaProduto from './NovaCategoriaProduto/NovaCategoriaProduto.jsx';
import NovaCategoriaDespesas from './NovaCategoriaDespesas/NovaCategoriaDespesas.jsx';
import CategoriaDespesas from './CategoriaDespesas/CategoriaDespesas.jsx';
import DeducaoIR from './DeducaoIR/DeducaoIR.jsx';
import Despesas from './Despesas/Despesas.jsx';
import Estabelecimentos from './Estabelecimentos/Estabelecimentos.jsx';
import Financeiro from './Financeiro/Financeiro.jsx';
import NovaDespesa from './NovaDespesa/NovaDespesa.jsx';
import NovaSubcategoriaDespesas from './NovaSubcategoriaDespesas/NovaSubcategoriaDespesas.jsx';
import NovaSubcategoriaProduto from './NovaSubcategoriaProduto/NovaSubcategoriaProduto.jsx';
import NovoEstabelecimento from './NovoEstabelecimento/NovoEstabelecimento.jsx';
import NovoProduto from './NovoProduto/NovoProduto.jsx';
import Principal from './Principal/Principal.jsx';
import Produtos from './Produtos/Produtos.jsx';
import SubcategoriaDespesas from './SubcategoriasDespesas/SubcategoriaDespesas.jsx';


//const container = document.getElementById('root');
//const root = createRoot(container);
//root.render(<UXPinLayout />, document.getElementById("root"));

export default function Home() {
  return (
    <div>
      <SubcategoriaDespesas />      
    </div>
  );
}
