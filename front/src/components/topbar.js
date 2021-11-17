import {Link} from 'react-router-dom';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

export default function Topbar(){
  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
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
    
   
      <Link to="/login" eventKey={2} className="nav-link">
        Login
      </Link>
      
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}