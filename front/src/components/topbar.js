import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import ModalLoginCadastro from "./modalLogCad";

export default function Topbar() {
  const [modalShow, setModalShow] = React.useState(false);
  const [categorias, setCategorias] = useState([]);

  const getCategorias = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/admCategorias/consulta"
      );
      const jsonData = await response.json();
      setCategorias(jsonData);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getCategorias();
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
      className="nav-color"
    >
      <Container>
        <Link to="/" className="nav-link">
          <Navbar.Brand>
            <img
              className="imgLivroGrande"
              alt=""
              src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
            />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
              {categorias.map((categoria, index) => (
                <Link key={categoria.id} to="/" className="nav-link">
                  <NavDropdown.Item>{categoria.descricao}</NavDropdown.Item>
                </Link>
              ))}
            </NavDropdown>
          </Nav>
          <Nav>
            <Link to="/carrinho" className="nav-link">
              Carrinho
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            {/* <div className="nav-link" variant="primary" onClick={() => setModalShow(true)}>
        Login
      </div> */}

            <ModalLoginCadastro
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
