import React, { useState, useEffect } from "react";
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
import AreaCliente from "./views/areaCliente";
import ProdutoUnico from "./views/produtoUnico";
import Perfil from "./views/perfil";
import Pedidos from "./views/pedidos";
import AreaAdmin from "./views/areaAdmin";
import GerenciarClientesProdutos from "./views/gerenciarClientesProdutos";
import RelatoriosGerenciais from "./views/relatoriosGerenciais";
import RelatorioEstoque from "./views/relatorioEstoque";
import GerenciarClientes from "./views/gerenciarClientes";
import DadosCliente from "./views/dadosCliente";
import GerenciarCategorias from "./views/gerenciarCategorias";
import GerenciarProdutos from "./views/gerenciarProdutos";
import EditarProduto from "./views/editarProduto";
import InserirProduto from "./views/inserirProduto";
import PerfilAdm from "./views/perfilAdm";
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

  async function isAuth() {
    try {
      const response = await fetch("http://localhost:5000/auth/is-verify", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();
      //console.log("PARSE RES AQ",parseRes)
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  }
  useEffect(() => isAuth());

  return (
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/produto" element={<ProdutoUnico />} />
        {/* <Route
          path="/perfil"
          element={
            isAuthenticated ? (
              <Perfil setAuth={setAuth} />
            ) : (
              <Navigate to="/login" />
            )
          }
        /> */}
        <Route path="/perfil" element={<Perfil />} />
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
         <Route
          path="/relatorioEstoque"
          element={<RelatorioEstoque />}
        />
        <Route path="/gerenciarClientes" element={<GerenciarClientes />} />
        <Route path="/dadosCliente" element={<DadosCliente />} />
        <Route path="/gerenciarCategorias" element={<GerenciarCategorias />} />
        <Route path="/gerenciarProdutos" element={<GerenciarProdutos />} />
        <Route path="/editarProduto" element={<EditarProduto />} />
        <Route path="/inserirProduto" element={<InserirProduto />} />
        <Route path="/perfilAdm" element={<PerfilAdm />} />
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
              <AreaCliente setAuth={setAuth} />
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
