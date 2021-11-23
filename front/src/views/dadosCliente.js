import React from "react";

import Topbar from "../components/topbar";

import { Container, Stack, Form } from "react-bootstrap";
import ListaCompras from "../components/listaCompras";

const DadosCliente = () => {
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
