import React from "react";
import { Navigate } from "react-router-dom";
import CardClientOptions from "../components/cardClientOptions";
import "../style/clientScreens.css";

export default function ClientDashboard({ setAuth }) {
  if (!setAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="clientDashboard">
      <h1>Sua conta</h1>
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
