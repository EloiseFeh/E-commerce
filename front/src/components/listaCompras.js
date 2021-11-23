import React from "react";
import { Link } from "react-router-dom"
import { Button, Table } from "react-bootstrap";

const ListaCompras = () => {
  const compras = [
    {id: "465454", data: "01/01/1999", valor: "R$ 55,00"},
    {id: "465454", data: "01/01/1999", valor: "R$ 55,00"},
    {id: "465454", data: "01/01/1999", valor: "R$ 55,00"},
    {id: "465454", data: "01/01/1999", valor: "R$ 55,00"},
    {id: "465454", data: "01/01/1999", valor: "R$ 55,00"},
    {id: "465454", data: "01/01/1999", valor: "R$ 55,00"},
    {id: "465454", data: "01/01/1999", valor: "R$ 55,00"},
    {id: "465454", data: "01/01/1999", valor: "R$ 55,00"},
  ];

  const renderCompras = (compra, index) => {
    return (
      <tr key={index}>
        <td>{compra.id}</td>
        <td>{compra.data}</td>
        <td>{compra.valor}</td>
        <td><Link to="/"><Button variant="secondary">Editar</Button></Link></td>
      </tr>
    );
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Data</th>
          <th>Valor Total</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
          {compras.map(renderCompras)}
      </tbody>
    </Table>
  );
};

export default ListaCompras;
