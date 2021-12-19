import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Topbar from "./components/topbar";
import "./style/App.css";
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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RedirectPage from "./views/redirectPage";

toast.configure();
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
        <Route path="/produto" element={<ProdutoUnico />} />
        <Route
          path="/perfil"
          element={
            isAuthenticated ? (
              <Perfil setAuth={setAuth} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/redirect" element={<RedirectPage />} />
        {/* Area adm */}
        <Route
          path="/areaAdmin"
          element={
            isAuthenticated ? (
              <AreaAdmin setAuth={setAuth} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
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
          element={
            !isAuthenticated ? (
              <Login setAuth={setAuth} />
            ) : (
              <Navigate to="/usuario" />
            )
          }
        />
        <Route
          path="/cadastro"
          element={
            !isAuthenticated ? (
              <Cadastro setAuth={setAuth} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/usuario"
          element={
            isAuthenticated ? (
              <ClientDashboard setAuth={setAuth} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
      <Topbar />
    </Router>
  );
}

export default App;
