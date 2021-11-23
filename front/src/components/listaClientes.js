import React from "react";
import { Link } from "react-router-dom"
import { Button, Table } from "react-bootstrap";

const ListaClientes = () => {
  const clientes = [
    { nome: "Martins", email: "email.com" },
    { nome: "Elo", email: "email.com" },
    { nome: "Alice", email: "email.com" },
    { nome: "Caio", email: "email.com" },
  ];

  const renderClientes = (cliente, index) => {
    return (
      <tr key={index}>
        <td>{cliente.nome}</td>
        <td>{cliente.email}</td>
        <td><Link to="/dadosCliente"><Button variant="secondary">Editar</Button></Link></td>
      </tr>
    );
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Email</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
          {clientes.map(renderClientes)}
      </tbody>
    </Table>
  );
};

export default ListaClientes;
