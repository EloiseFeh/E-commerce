import "../style/clientScreens.css";
import PedidoLine from "../components/pedidoLine";
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function Pedidos() {
  const [adm, setAdm] = useState("");

  async function isAdm() {
    try {
      const response = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseRes = await response.json();
      setAdm(parseRes.administrador);
      console.log(parseRes);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    isAdm();
  });

  if (adm) {
    return <Navigate to="/areaAdmin" />;
  }
  return (
    <div className="clientDashboard">
      <h1>Seus Pedidos</h1>

      <div className="contentDivEdit">
        <div className="pedidoInfoTitles">
          <label>ID</label>
          <label>Produtos</label>
          <label>Total</label>
          <label>Status</label>
        </div>
      </div>

      <div className="PedidosList">
        <PedidoLine
          datahora="20 Outubro 2021 14:21:03"
          id="123"
          produto="Duna, Messsias de Duna, Herege de duna, livro 2"
          valor="R$ 100,00"
          status="Entregue"
        />
        <PedidoLine
          datahora="20 Outubro 2021 14:21:03"
          id="123"
          produto="Duna, Messsias de Duna, Herege de duna, livro 2"
          valor="R$ 100,00"
          status="Entregue"
        />
        <PedidoLine
          datahora="20 Outubro 2021 14:21:03"
          id="123"
          produto="Duna, Messsias de Duna, Herege de duna, livro 2"
          valor="R$ 100,00"
          status="Entregue"
        />
        <PedidoLine
          datahora="20 Outubro 2021 14:21:03"
          id="123"
          produto="Duna, Messsias de Duna, Herege de duna, livro 2"
          valor="R$ 100,00"
          status="Entregue"
        />
      </div>
    </div>
  );
}
