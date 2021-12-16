import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import ModalLoginCadastro from './modalLogCad';

export default function Topbar(){
  const [modalShow, setModalShow] = React.useState(false);
  return(
    <Navbar collapseOnSelect expand="lg"  variant="dark" fixed="top" className="nav-color">
    <Container>

  <Link to="/" className="nav-link">
    <Navbar.Brand>Logo aqui</Navbar.Brand>
  </Link>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />

  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavDropdown title="Categorias" id="collasible-nav-dropdown">
        <Link to="/" className="nav-link">
        <NavDropdown.Item>Categoria 1</NavDropdown.Item>
        </Link>
        <Link to="/" className="nav-link">
        <NavDropdown.Item>Categoria 2</NavDropdown.Item>
        </Link>
        <Link to="/" className="nav-link">
        <NavDropdown.Item>Categoria 3</NavDropdown.Item>
        </Link>
        <Link to="/" className="nav-link">
        <NavDropdown.Item>Categoria 4</NavDropdown.Item>
        </Link>
        <Link to="/" className="nav-link">
        <NavDropdown.Item>Categoria 5</NavDropdown.Item>
        </Link>
        <Link to="/" className="nav-link">
        <NavDropdown.Item>Categoria 6</NavDropdown.Item>
        </Link>
        
        
      </NavDropdown>
    </Nav>
    <Nav>
    
    <Link to="/carrinho" className="nav-link">Carrinho</Link>
    <Link to="/login" className="nav-link">Login</Link>
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
  )
}