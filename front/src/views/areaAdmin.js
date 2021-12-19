import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Topbar from "../components/topbar";
import BtnSecaoAdm from "../components/btnSecaoAdm";
import { Container, Row, Col, Stack } from "react-bootstrap";

const AreaAdmin = () => {
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
          <Row>
            <Col>
              <h1>Área Administrativa</h1>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <BtnSecaoAdm
                link="/relatoriosGerenciais"
                text="Relatorios Gerenciais"
              />
            </Col>
            <Col sm={6}>
              <BtnSecaoAdm
                link="/gerenciarClientesProdutos"
                text="Gerenciar Cliente/Produto"
              />
            </Col>
          </Row>
        </Stack>
      </Container>
    </div>
  );
};

export default AreaAdmin;
