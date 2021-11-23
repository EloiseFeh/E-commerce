import React from "react";
import { Card } from "react-bootstrap";

const DadosRelatorio = (dado) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{dado.name}</Card.Title>
          <Card.Text>{dado.value}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default DadosRelatorio;
