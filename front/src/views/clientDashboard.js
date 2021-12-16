import React from "react";
import CardClientOptions from "../components/cardClientOptions";
import "../style/clientScreens.css";

export default function ClientDashboard({ setAuth }) {
  return (
    <div className="clientDashboard">
      <h1>Sua conta</h1>
      <button>Logout</button>
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
