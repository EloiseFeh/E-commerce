import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './components/topbar';
// Importando páginas
import App from './App';
import Cart from './views/cart';
import ClientDashboard from './views/clientDashboard';
import ProdutoUnico from './views/produtoUnico';
import Perfil from './views/perfil';
import Pedidos from './views/pedidos';


ReactDOM.render(
  <Router>
  <Routes>
      <Route path='/' exact={true} element={<App/>}/>
      <Route path='/carrinho' element={<Cart/>}/>
      <Route path='/usuario' element={<ClientDashboard/>}/>
      <Route path='/produto' element={<ProdutoUnico/>}/>
      <Route path='/perfil' element={<Perfil/>}/>
      <Route path='/pedidos' element={<Pedidos/>}/>

  </Routes>
  <Topbar/>
  </Router>,
  document.getElementById('root')
);
