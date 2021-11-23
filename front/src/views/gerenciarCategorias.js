import React from "react";

import Topbar from "../components/topbar";

import { Container, Stack, Row, Button, Col } from "react-bootstrap";
import ListarCategorias from "../components/listarCategorias";

const GerenciarCategorias = () => {
  return (
    <div>
      <Topbar />
      <Container>
        <Stack gap={5}>
          <Stack>
            <h1>Gerenciar Categorias</h1>
          </Stack>
          <Stack gap={3}>
            <Row>
              <Col>
                <h4>Categorias Cadastradas</h4>
              </Col>
              <Col>
                <Button variant="primary">Cadastrar nova Categoria</Button>
              </Col>
            </Row>
            <ListarCategorias />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default GerenciarCategorias;
