import React from "react";
import { Button, Table } from "react-bootstrap";

const ListarCategorias = () => {
  const categorias = [{ nome: "Categoria 1" }, { nome: "Categoria 2" }, { nome: "Categoria 3" }, { nome: "Categoria 4" }];

  const renderCategorias = (categoria, index) => {
    return (
      <tr key={index}>
        <td>{categoria.nome}</td>
        <td>
          <Button variant="secondary" size="sm">
            Editar
          </Button>
          <Button variant="danger" size="sm">
            Deletar
          </Button>
        </td>
      </tr>
    );
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>{categorias.map(renderCategorias)}</tbody>
    </Table>
  );
};

export default ListarCategorias;
