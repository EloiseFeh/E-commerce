import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import Topbar from "../components/topbar";
import BtnSecaoAdm from "../components/btnSecaoAdm";
import DadosRelatorio from "../components/dadosRelatorio";
import { Container, Row, Col, Stack } from "react-bootstrap";

const RelatoriosGerenciais = () => {
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

  // if (!adm) {
  //   return <Navigate to="/usuario" />;
  // }

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
