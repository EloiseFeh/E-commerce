import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { getDropdownMenuPlacement } from "react-bootstrap/esm/DropdownMenu";
import CardClientOptions from "../components/cardClientOptions";
import "../style/clientScreens.css";
import "../style/login-cadastro.css";
import { toast } from "react-toastify";

export default function AreaCliente({ setAuth }) {
  const [adm, setAdm] = useState("");
  const [name, setName] = useState("");
  async function isAdm() {
    try {
      const response = await fetch("http://localhost:5000/dashboard/:id", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseRes = await response.json();
      setAdm(parseRes.administrador);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    isAdm();
  });

  useEffect(() => {
    getName();
  });

  if (adm) {
    return <Navigate to="/areaAdmin" />;
  }

  if (!setAuth) {
    return <Navigate to="/login" />;
  }

  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/dashboard/:id", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseRes = await response.json();
      setName(parseRes.nome);
    } catch (err) {
      console.error(err.message);
    }
  }
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
    toast.success("Deslogado com sucesso!");
  };

  return (
    <div className="clientDashboard container">
      <div className="row">
        <div className="col-xl-4">
          <h1>Olá,{name}</h1>
          <button className="btn-submit" onClick={(e) => logout(e)}>
            Logout
          </button>
        </div>
      </div>

      <div className="contentDiv">
        <CardClientOptions
          link="/pedidos"
          titulo="Seus Pedidos"
          descricao="Rastrear, devolver ou comprar produtos novamente"
        />
        <CardClientOptions
          link="/perfil"
          titulo="Perfil"
          descricao="Alterar o login, nome ou celular"
        />
        <CardClientOptions
          link="/carrinho"
          titulo="Carrinho de compras"
          descricao="Confira e efetua a compra do seu carrinho"
        />
      </div>
    </div>
  );
}
