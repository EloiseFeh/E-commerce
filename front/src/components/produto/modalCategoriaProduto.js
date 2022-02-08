import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Button, Modal, Table } from "react-bootstrap";
export default function ModalCategoriaProduto({ livro }) {
  const [categoriaslivro, setCategoriasLivro] = useState([]);
  const [inputs, setInputs] = useState({
    id_categoria:"",
    id_categoria:""
  });
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }
   const {id_categoria,id_categoria2} = inputs;

   const onSubmitForm = async (id) => {
    // console.log("entrou no submit");
    // e.preventDefault();
    try {
      const body = { id_categoria};
      // console.log(body);
      const response = await fetch(`http://localhost:5000/admProdutos/categoria/add/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      // console.log(response);
      // window.location = "/gerenciarProdutos";
    } catch (err) {
      console.error(err.message);
    }
  };
  const onSubmitForm2 = async (id) => {
    // console.log("entrou no submit");
    // e.preventDefault();
    try {
      const body = { id_categoria2};
      // console.log(body);
      const response = await fetch(`http://localhost:5000/admProdutos/categoria/excluir/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      // console.log(response);
      // window.location = "/gerenciarProdutos";
    } catch (err) {
      console.error(err.message);
    }
  };

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


  return (
    <div>
      <div>
       
      </div>
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
        <form onSubmit={()=>onSubmitForm(livro.id)}>
          <h5>Adicionar Categoria</h5>
        <Form.Floating className="mt-3">
          <Form.Control
            id="id_categoria"
            name="id_categoria"
            type="text"
            placeholder="descricao"
            value={id_categoria}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="descricao">Descrição</label>
        </Form.Floating>
        <button className="btn btn-info">Adicionar</button>
        </form>   
        


        <form onSubmit={()=>onSubmitForm2(livro.id)}>
          <h5>Excluir Categoria</h5>
        <Form.Floating className="mt-3">
          <Form.Control
            id="id_categoria2"
            name="id_categoria2"
            type="text"
            placeholder="descricao"
            value={id_categoria2}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="descricao">Descrição</label>
        </Form.Floating>
        <button  className="btn btn-danger" >Excluir</button>
        </form>   
        
            </div>

            <div class="modal-footer">
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
