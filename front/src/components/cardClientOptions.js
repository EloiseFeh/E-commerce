import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../style/clientScreens.css";

export default function CardClientOptions(props) {
  return (
    <Card className="cardClienteOpt">
      <Link to={props.link}>
        <Card.Body>
          <Card.Title>{props.titulo}</Card.Title>
          <Card.Text>{props.descricao}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
}
