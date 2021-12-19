import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import Topbar from "../components/topbar";

import { Container, Stack, Row, Button, Col } from "react-bootstrap";
import ListarProdutos from "../components/listarProdutos";

const GerenciarProdutos = () => {
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
