import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './components/topbar';
// Importando páginas
//import App from './App';
import Home from './views/home';
import Cart from './views/cart';
import ClientDashboard from './views/clientDashboard';
import ProdutoUnico from './views/produtoUnico';
import Perfil from './views/perfil';
import Pedidos from './views/pedidos';
import AreaAdmin from './views/areaAdmin';
import GerenciarClientesProdutos from './views/gerenciarClientesProdutos';
import RelatoriosGerenciais from './views/relatoriosGerenciais';
import GerenciarClientes from './views/gerenciarClientes';
import DadosCliente from './views/dadosCliente';
import GerenciarCategorias from './views/gerenciarCategorias';
import GerenciarProdutos from './views/gerenciarProdutos';


ReactDOM.render(
  <Router>
  <Routes>
      <Route path='/' exact={true} element={<Home/>}/>
      <Route path='/carrinho' element={<Cart/>}/>
      <Route path='/usuario' element={<ClientDashboard/>}/>
      <Route path='/produto' element={<ProdutoUnico/>}/>
      <Route path='/perfil' element={<Perfil/>}/>
      <Route path='/pedidos' element={<Pedidos/>}/>
      <Route path='/areaAdmin' element={<AreaAdmin/>}/>
      <Route path='/gerenciarClientesProdutos' element={<GerenciarClientesProdutos/>}/>
      <Route path='/relatoriosGerenciais' element={<RelatoriosGerenciais/>}/>
      <Route path='/gerenciarClientes' element={<GerenciarClientes/>}/>
      <Route path='/dadosCliente' element={<DadosCliente/>}/>
      <Route path='/gerenciarCategorias' element={<GerenciarCategorias/>}/>
      <Route path='/gerenciarProdutos' element={<GerenciarProdutos/>}/>

  </Routes>
  <Topbar/>
  </Router>,
  document.getElementById('root')
);
