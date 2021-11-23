import React from "react";

import Topbar from "../components/topbar";

import { Container, Stack } from "react-bootstrap";
import ListaClientes from "../components/listaClientes";

const GerenciarClientes = () => {
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
