import "../style/clientScreens.css";
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
export default function Perfil({ setAuth }) {
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
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1>Perfil</h1>
        <button className="logout" style={{ marginLeft: "3%" }}>
          Logout
        </button>
      </div>

      <div className="contentDivEdit">
        <div className="EditOptions">
          <div className="EditInput">
            <h4>Nome</h4>
            <input></input>
          </div>

          <button className="ButtonEditar">Editar</button>
        </div>

        <div className="EditOptions">
          <div className="EditInput">
            <h4>Telefone</h4>
            <input></input>
          </div>

          <button className="ButtonEditar">Editar</button>
        </div>

        <div className="EditOptions">
          <div className="EditInput">
            <h4>E-mail</h4>
            <input></input>
          </div>

          <button className="ButtonEditar">Editar</button>
        </div>

        <div className="EditOptions">
          <div className="EditInput">
            <h4>Senha</h4>
            <input></input>
          </div>

          <button className="ButtonEditar">Editar</button>
        </div>
      </div>

      <button className="ButtonDeletaAcc">Deletar Conta</button>
    </div>
  );
}
