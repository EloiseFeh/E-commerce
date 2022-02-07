import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import EditarProduto from "./editarProduto";
import ModalCategoriaProduto from "./modalCategoriaProduto";
import "../../style/AdmProduto.css"
const ListarProdutos = () => {
  const [livros, setLivros] = useState([]);
  const [categorias, setCategorias] = useState([]);
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

  const getTheCategories = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/admProdutos/categorias"
      );
      const jsonData = await response.json();
     setCategorias(jsonData)
    } catch (err) {
      console.log(err.message);
    }
  };


  useEffect(() => {
    getLivros();
    getTheCategories();
  }, []);

  console.log(livros);
  console.log(categorias)
  return (
    <div>
      <h2>Listagem de todas as categorias</h2>
       <div>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome(Descrição)</th>
        </tr>
      </thead>
      <tbody>
        {categorias.map((categoria, index) => (
          <tr key={categoria.id}>
            <td>{categoria.id}</td>
            <td>{categoria.descricao}</td>
            {/* <td>
              <EditarProduto livro={livro} /> 
              <button
              className="btn btn-danger btn-admProduto"
                onClick={() => ApagarLivro(livro.id)}
              >
                Excluir
              </button> 
            </td> */}
          </tr>
        ))}
      </tbody>
    </Table>
       </div>
      <div>
      <h2>Listagem de todos os livros</h2>
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
              <button
              className="btn btn-danger btn-admProduto"
                onClick={() => ApagarLivro(livro.id)}
              >
                Excluir
              </button>
              
               <ModalCategoriaProduto livro={livro}/>
            </td>
            
          </tr>
        ))}
      </tbody>
    </Table>
      </div>
    </div>



    
  );
};

export default ListarProdutos;
