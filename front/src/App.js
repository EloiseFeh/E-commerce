import "./style/App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import { toast } from "react-toastify";
import "./style/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/topbar";

import Home from "./views/home";
import Cart from "./views/cart";
import ClientDashboard from "./views/clientDashboard";
import ProdutoUnico from "./views/produtoUnico";
import Perfil from "./views/perfil";
import Pedidos from "./views/pedidos";
import AreaAdmin from "./views/areaAdmin";
import GerenciarClientesProdutos from "./views/gerenciarClientesProdutos";
import RelatoriosGerenciais from "./views/relatoriosGerenciais";
import GerenciarClientes from "./views/gerenciarClientes";
import DadosCliente from "./views/dadosCliente";
import GerenciarCategorias from "./views/gerenciarCategorias";
import GerenciarProdutos from "./views/gerenciarProdutos";
import Login from "./views/login";
import Cadastro from "./views/cadastro";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/usuario" element={<ClientDashboard />} />
        <Route path="/produto" element={<ProdutoUnico />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/areaAdmin" element={<AreaAdmin />} />
        <Route
          path="/gerenciarClientesProdutos"
          element={<GerenciarClientesProdutos />}
        />
        <Route
          path="/relatoriosGerenciais"
          element={<RelatoriosGerenciais />}
        />
        <Route path="/gerenciarClientes" element={<GerenciarClientes />} />
        <Route path="/dadosCliente" element={<DadosCliente />} />
        <Route path="/gerenciarCategorias" element={<GerenciarCategorias />} />
        <Route path="/gerenciarProdutos" element={<GerenciarProdutos />} />

        <Route
          path="/login"
          // element={(props) =>
          //   !isAuthenticated ? (
          //     <Login {...props} setAuth={setAuth} />
          //   ) : (
          //     <Navigate to="/usuario" />
          //   )
          // }
          element={<Login />}
        />
        <Route
          path="/cadastro"
          element={(props) =>
            !isAuthenticated ? (
              <Cadastro {...props} setAuth={setAuth} />
            ) : (
              <Navigate to="/perfil" />
            )
          }
        />
      </Routes>
      <Topbar />
    </Router>
  );
}

export default App;
