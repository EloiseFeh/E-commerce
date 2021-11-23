import React from "react";

import Topbar from "../components/topbar";
import BtnSecaoAdm from "../components/btnSecaoAdm";
import DadosRelatorio from "../components/dadosRelatorio";
import { Container, Row, Col, Stack } from "react-bootstrap";

const RelatoriosGerenciais = () => {
  return (
    <div>
      <Topbar />
      <Container>
        <Stack gap={5}>
          <Row>
            <Col>
              <DadosRelatorio name="Total de Compras" value="159" />
            </Col>
            <Col>
              <DadosRelatorio name="Produtos Faltando" value="05" />
            </Col>
            <Col>
              <DadosRelatorio name="Compras do Dia" value="R$ 458,85" />
            </Col>
          </Row>
          <h3>Baixar Relatórios</h3>
          <Row>
            <Stack gap={4}>
              <BtnSecaoAdm link="/" text="Relatório de Compras" />
              <BtnSecaoAdm link="/" text="Relatório de Estoque" />
              <BtnSecaoAdm link="/" text="Relatório Financeiro" />
            </Stack>
          </Row>
        </Stack>
      </Container>
    </div>
  );
};

export default RelatoriosGerenciais;
