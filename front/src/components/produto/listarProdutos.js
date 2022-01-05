import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

const ListarProdutos = () => {
  // const produtos = [
  //   { id: "5745", nome: "Design Sprint", descricao: "Lorem Ipsum", preco: "R$ 49,90", foto: "", quantidade: "5" },
  //   { id: "8365", nome: "O Essencialismo", descricao: "Lorem Ipsum", preco: "R$ 69,90", foto: "", quantidade: "5" },
  //   { id: "4593", nome: "Growth Hack", descricao: "Lorem Ipsum", preco: "R$ 59,90", foto: "", quantidade: "5" },
  //   { id: "7451", nome: "Como Fazer Amigos e Influenciar Pessoas", descricao: "Lorem Ipsum", preco: "R$ 39,90", foto: "", quantidade: "5" }
  // ];

  // const renderProdutos = (produto, index) => {
  //   return (
  //     <tr key={index}>
  //       <td>{produto.id}</td>
  //       <td>{produto.nome}</td>
  //       <td>{produto.descricao}</td>
  //       <td>{produto.preco}</td>
  //       <td>{produto.quantidade}</td>
  //       <td>
  //         <Button variant="secondary" size="sm">
  //           Editar
  //         </Button>
  //         <Button variant="danger" size="sm">
  //           Excluir
  //         </Button>
  //       </td>
  //     </tr>
  //   );
  // };

  const [livros, setLivros] = useState([]);

  // função apagar livro 
  const ApagarLivro = async (id) =>{
    try {
      const response = await fetch(`http://localhost:5000/admProdutos/excluir/${id}`,{
        method:"DELETE"
      });
      // função para apagar visualmente o livro
      setLivros(livros.filter(livro => livro.id !==id));
      console.log(response);
      
    } catch (err) {
      console.error(err.message)
    }
  }

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
              <Button variant="secondary" size="sm">
                Editar
              </Button>
              <Button  onClick={()=> ApagarLivro(livro.id)} variant="danger" size="sm">
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
