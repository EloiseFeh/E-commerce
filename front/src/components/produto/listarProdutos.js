import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import EditarProduto from "./editarProduto";

const ListarProdutos = () => {
  const [livros, setLivros] = useState([]);

  // função apagar livro
  const ApagarLivro = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/admProdutos/excluir/${id}`,
        {
          method: "DELETE",
        }
      );
      // função para apagar visualmente o livro
      setLivros(livros.filter((livro) => livro.id !== id));
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getLivros = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/admProdutos/consulta"
      );
      const jsonData = await response.json();

      setLivros(jsonData);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getLivros();
  }, []);

  console.log(livros);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome(Descrição)</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        {livros.map((livro, index) => (
          <tr key={livro.id}>
            <td>{livro.id}</td>
            <td>{livro.descricao}</td>
            <td>{livro.preco}</td>
            <td>{livro.quantidade}</td>
            <td>
              <EditarProduto livro={livro} />
              <Button
                onClick={() => ApagarLivro(livro.id)}
                variant="danger"
                size="sm"
              >
                Excluir
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ListarProdutos;
