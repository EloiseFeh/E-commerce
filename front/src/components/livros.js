import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Livro from "./livro";

const Livros = ({ livros }) => {
  return (
    <Container className="mt-5">
      <div>
        <h2>Todos os Livros</h2>
      </div>
      <Row>
        {livros.map((livro) => (
          <Col key={livro.id} lg={3} md={4} sm={6} xs={6} className="mb-3">
            <Livro livro={livro} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Livros;
