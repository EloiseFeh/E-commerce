import React from "react";

import Topbar from "../components/topbar";
import BtnSecaoAdm from "../components/btnSecaoAdm";
import { Container, Row, Col, Stack } from "react-bootstrap";

const AreaAdmin = () => {
  return (
    <div>
      <Topbar />
      <Container>
        <Stack gap={5}>
          <Row>
            <Col>
              <h1>Área Administrativa</h1>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <BtnSecaoAdm link="/relatoriosGerenciais" text="Relatorios Gerenciais" />
            </Col>
            <Col sm={6}>
              <BtnSecaoAdm link="/gerenciarClientesProdutos" text="Gerenciar Cliente/Produto" />
            </Col>
          </Row>
        </Stack>
      </Container>
    </div>
  );
};

export default AreaAdmin;
