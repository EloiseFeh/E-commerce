import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import Topbar from "../components/topbar";

import { Container, Stack } from "react-bootstrap";
import ListaClientes from "../components/listaClientes";

const GerenciarClientes = () => {
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

  if (!adm) {
    return <Navigate to="/usuario" />;
  }

  return (
    <div>
      <Topbar />
      <Container>
        <Stack>
          <h1>Gerenciar Clientes</h1>
        </Stack>
        <Stack>
          <h4>Clientes Cadastrados</h4>
          <ListaClientes />
        </Stack>
      </Container>
    </div>
  );
};

export default GerenciarClientes;
