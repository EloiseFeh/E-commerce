import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import Topbar from "../components/topbar";
import BtnSecaoAdm from "../components/btnSecaoAdm";
import { Container, Row, Col, Stack } from "react-bootstrap";

const GerenciarClientesProdutos = () => {
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
          <h1>Gerenciar Clientes/Produtos</h1>
          <Row>
            <Col>
              <BtnSecaoAdm
                link="/gerenciarClientes"
                text="Gerenciar Cliente e Compras"
              />
            </Col>
            <Col>
              <BtnSecaoAdm
                link="/gerenciarCategorias"
                text="Gerenciar Categorias"
              />
            </Col>
            <Col>
              <BtnSecaoAdm
                link="/gerenciarProdutos"
                text="Gerenciar Produtos"
              />
            </Col>
          </Row>
        </Stack>
      </Container>
    </div>
  );
};

export default GerenciarClientesProdutos;
