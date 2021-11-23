import React from "react";

import Topbar from "../components/topbar";

import { Container, Stack, Row, Button, Col } from "react-bootstrap";
import ListarProdutos from "../components/listarProdutos";

const GerenciarProdutos = () => {
  return (
    <div>
      <Topbar />
      <Container>
        <Stack gap={5}>
          <Stack>
            <h1>Gerenciar Produtos</h1>
          </Stack>
          <Stack gap={3}>
            <Row>
              <Col>
                <h4>Produtos Cadastradas</h4>
              </Col>
              <Col>
                <Button variant="primary">Cadastrar novo Produto</Button>
              </Col>
            </Row>
            <ListarProdutos />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default GerenciarProdutos;
