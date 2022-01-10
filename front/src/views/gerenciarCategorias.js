import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Topbar from "../components/topbar";
import { Container, Stack, Row, Button, Col } from "react-bootstrap";
import CadastrarCategorias from "../components/categoria/cadastrarCategoria";
import ListarCategorias from "../components/categoria/listarCategorias";
const GerenciarCategorias = () => {
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

  return (
    <div>
      <Topbar />
      <Container>
        <Stack gap={5}>
          <Stack>
            <h1>Gerenciar Categorias</h1>
          </Stack>
          <Stack gap={3}>
            <CadastrarCategorias/>
            <ListarCategorias/>
            {/* <Row>
              <Col>
                <h4>Categorias Cadastradas</h4>
              </Col>
              <Col>
                <Button variant="primary">Cadastrar nova Categoria</Button>
              </Col>
            </Row>
            <ListarCategorias /> */}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default GerenciarCategorias;
