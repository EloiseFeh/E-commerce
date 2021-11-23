import React from "react";
import { Button, Table } from "react-bootstrap";

const ListarProdutos = () => {
  const produtos = [
    { id: "5745", nome: "Design Sprint", descricao: "Lorem Ipsum", preco: "R$ 49,90", foto: "", quantidade: "5" },
    { id: "8365", nome: "O Essencialismo", descricao: "Lorem Ipsum", preco: "R$ 69,90", foto: "", quantidade: "5" },
    { id: "4593", nome: "Growth Hack", descricao: "Lorem Ipsum", preco: "R$ 59,90", foto: "", quantidade: "5" },
    { id: "7451", nome: "Como Fazer Amigos e Influenciar Pessoas", descricao: "Lorem Ipsum", preco: "R$ 39,90", foto: "", quantidade: "5" }
  ];

  const renderProdutos = (produto, index) => {
    return (
      <tr key={index}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>{produto.descricao}</td>
        <td>{produto.preco}</td>
        <td>{produto.quantidade}</td>
        <td>
          <Button variant="secondary" size="sm">
            Editar
          </Button>
        </td>
      </tr>
    );
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>{produtos.map(renderProdutos)}</tbody>
    </Table>
  );
};

export default ListarProdutos;
