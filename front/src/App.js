import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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

const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem("cartItems") || "[]");

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartItems, setCartItems] = useState(cartItemsFromLocalStorage);

  const [livros, setLivros] = useState([]);

  const getLivros = async () => {
    try {
      const response = await fetch("http://localhost:5000/produtos/");
      const jsonData = await response.json();

      setLivros(jsonData);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getLivros();
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems]);

  const handdleAddLivro = (product) => {
    const ProductExists = cartItems.find((item) => item.id === product.id);
    if (ProductExists) {
      setCartItems(
        cartItems.map((item) => 
          item.id === product.id
           ? {...ProductExists, quantity: ProductExists.quantity + 1}
           : item
        )
      )
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}])
    }
  }

  const handdleRemoveLivro = (product) => {
    const ProductExists = cartItems.find((item) => item.id === product.id);
    if (ProductExists.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((item) => item.id === product.id
          ? {...ProductExists, quantity: ProductExists.quantity - 1}
          : item
        )
      )
    }
  }

  const handdleCartClear = () => {
    setCartItems([]);
  }

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
        <Route path="/" exact={true} element={<Home livros={livros} handdleAddLivro={handdleAddLivro} />} />
        <Route path="/carrinho" element={<Cart cartItems={cartItems} setCartItems={setCartItems} handdleAddLivro={handdleAddLivro} handdleRemoveLivro={handdleRemoveLivro} handdleCartClear={handdleCartClear} />} />
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
        <Route path="/areaAdmin" element={isAuthenticated ? <AreaAdmin setAuth={setAuth} /> : <Navigate to="/login" />} />
        <Route path="/gerenciarClientesProdutos" element={<GerenciarClientesProdutos />} />
        <Route path="/relatoriosGerenciais" element={<RelatoriosGerenciais />} />
        <Route path="/gerenciarClientes" element={<GerenciarClientes />} />
        <Route path="/dadosCliente" element={<DadosCliente />} />
        <Route path="/gerenciarCategorias" element={<GerenciarCategorias />} />
        <Route path="/gerenciarProdutos" element={<GerenciarProdutos />} />
        <Route path="/editarProduto" element={<EditarProduto />} />
        <Route path="/inserirProduto" element={<InserirProduto />} />
        <Route path="/perfilAdm" element={<PerfilAdm />} />
        <Route path="/login" element={!isAuthenticated ? <Login setAuth={setAuth} /> : <Navigate to="/usuario" />} />
        <Route path="/cadastro" element={!isAuthenticated ? <Cadastro setAuth={setAuth} /> : <Navigate to="/login" />} />
        <Route path="/usuario" element={isAuthenticated ? <AreaCliente setAuth={setAuth} /> : <Navigate to="/login" />} />
      </Routes>
      <Topbar cartItems={cartItems} />
      {/* <Cart cartItems={cartItems}/> */}
    </Router>
  );
}

export default App;
