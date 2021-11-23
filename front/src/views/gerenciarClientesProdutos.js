import React from "react";

import Topbar from "../components/topbar";
import BtnSecaoAdm from "../components/btnSecaoAdm";
import { Container, Row, Col, Stack } from "react-bootstrap";

const GerenciarClientesProdutos = () => {
  return (
    <div>
      <Topbar />
      <Container>
        <Stack gap={5}>
        <h1>Gerenciar Clientes/Produtos</h1>
        <Row>
          <Col>
            <BtnSecaoAdm link="/gerenciarClientes" text="Gerenciar Cliente e Compras" />
          </Col>
          <Col>
            <BtnSecaoAdm link="/gerenciarCategorias" text="Gerenciar Categorias" />
          </Col>
          <Col>
            <BtnSecaoAdm link="/gerenciarProdutos" text="Gerenciar Produtos" />
          </Col>
        </Row>
        </Stack>
      </Container>
    </div>
  );
};

export default GerenciarClientesProdutos;
