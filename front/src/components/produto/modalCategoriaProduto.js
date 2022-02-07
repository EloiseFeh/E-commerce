import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Button, Modal, Table } from "react-bootstrap";
export default function ModalCategoriaProduto({ livro }) {
  const [categoriaslivro, setCategoriasLivro] = useState([]);
  const [inputs, setInputs] = useState({
    id_categoria: ""
  });
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }
  const {id_categoria} = inputs;
  const getCategoriasLivro = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/admProdutos/categoria/${livro.id}`,
        {
          method: "GET",
        }
      );

      const jsonData = await response.json();
      setCategoriasLivro(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.log(err.message);
    }
  };

  const ApagarCategoria= async (id) => {
    // e.preventDefault();
    try {
      const body = {id_categoria};
      const response = await fetch(
        `http://localhost:5000/admProdutos/categoria/excluir/${id}`,
        {
          method: "DELETE",
          body: JSON.stringify(body),
        }
      );
      // função para apagar visualmente o livro
      //setLivros(livros.filter((livro) => livro.id !== id));
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };
  // useEffect(() => {
  //   getCategoriasLivro();
  // }, []);

  console.log("aqui o bookcategorie");
  //console.log(categoriaslivro);

  return (
    <div>
      <button
        type="button"
        class="btn btn-info "
        data-toggle="modal"
        data-target={`#id${livro.descricao}`}
        onClick={getCategoriasLivro}
      >
        Editar categoria
      </button>

      <div
        class="modal"
        id={`id${livro.descricao}`}
        // onClick={() => setDescricao(livro.descricao)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Editar categoria</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                // onClick={() => setDescricao(livro.descricao)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
            <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome da categoria</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {categoriaslivro.map((categoria, index) => (
              <tr key={categoria.id}>
                <td>{categoria.id}</td>
                <td>{categoria.categoria}</td>
                  <td>
            </td> 
              </tr>
            ))}
          </tbody>
        </Table>
        <div>
          <form onSubmit={ApagarCategoria}>
          <Form.Floating className="mb-3 mt-3">
                <Form.Control
                  id="id_categoria"
                  name="id_categoria"
                  type="number"
                  value={id_categoria}
                  onChange={(e) => onChange(e)}
                  placeholder="descricao"
                />
                <label htmlFor="descricao">Nome da Categoria</label>
              </Form.Floating>
              <button>excluir</button>
          </form>
        
        </div>
            
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                // onClick={(e) => updateProduto(e)}
              >
                Editar
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                // onClick={() => setDescricao(livro.descricao)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
