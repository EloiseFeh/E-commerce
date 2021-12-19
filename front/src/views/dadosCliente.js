import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Topbar from "../components/topbar";

import { Container, Stack, Form } from "react-bootstrap";
import ListaCompras from "../components/listaCompras";

const DadosCliente = () => {
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
        <Stack gap={5}>
          <Stack>
            <h1>Gerenciar Cliente</h1>
            <Stack gap={3}>
              <Form.Control placeholder="Nome" />
              <Form.Control placeholder="Sobrenome" />
              <Form.Control placeholder="Email" />
              <Form.Control placeholder="Senha" />
            </Stack>
          </Stack>
          <Stack>
            <h4>Compras Realizadas</h4>
            <ListaCompras />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default DadosCliente;
