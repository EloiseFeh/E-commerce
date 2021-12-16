import "./style/App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
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
      <Switch>
        <Route path="/" exact={true} render={Home} />
        <Route path="/carrinho" render={Cart} />
        <Route path="/usuario" render={ClientDashboard} />
        <Route path="/produto" render={ProdutoUnico} />
        <Route path="/perfil" render={Perfil} />
        <Route path="/pedidos" render={Pedidos} />
        <Route path="/areaAdmin" render={AreaAdmin} />
        <Route
          path="/gerenciarClientesProdutos"
          render={GerenciarClientesProdutos}
        />
        <Route path="/relatoriosGerenciais" render={RelatoriosGerenciais} />
        <Route path="/gerenciarClientes" render={GerenciarClientes} />
        <Route path="/dadosCliente" render={DadosCliente} />
        <Route path="/gerenciarCategorias" render={GerenciarCategorias} />
        <Route path="/gerenciarProdutos" render={GerenciarProdutos} />

        <Route
          path="/login"
          render={(props) =>
            !isAuthenticated ? (
              <Login {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/usuario" />
            )
          }
          // render={<Login />}
        />
        <Route
          path="/cadastro"
          render={(props) =>
            !isAuthenticated ? (
              <Cadastro {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/perfil" />
            )
          }
        />
      </Switch>
      <Topbar />
    </Router>
  );
}

export default App;
