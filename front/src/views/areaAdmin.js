import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Topbar from "../components/topbar";
import BtnSecaoAdm from "../components/btnSecaoAdm";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { toast } from "react-toastify";
import "../style/login-cadastro.css";

const AreaAdmin = ({ setAuth }) => {
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

  // if (!adm) {
  //   return <Navigate to="/usuario" />;
  // }

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
    toast.success("Deslogado com sucesso!");
  };
  return (
    <div>
      <Topbar />
      <Container>
        <Stack gap={5}>
          <Row>
            <Col>
              <h1>Área Administrativa</h1>
              <button
                className="btn btn-primary btn-submit"
                onClick={(e) => logout(e)}
              >
                Logout
              </button>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <BtnSecaoAdm
                link="/relatoriosGerenciais"
                text="Relatorios Gerenciais"
              />
            </Col>
            <Col sm={4}>
              <BtnSecaoAdm
                link="/gerenciarClientesProdutos"
                text="Compras, categorias e produtos"
              />
            </Col>
            <Col sm={4}>
              <BtnSecaoAdm
                link="/perfilAdm"
                text="Perfil"
              />
            </Col>
          </Row>
        </Stack>
      </Container>
    </div>
  );
};

export default AreaAdmin;
