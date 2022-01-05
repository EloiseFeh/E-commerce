import React, { useState } from "react";
import { Form } from "react-bootstrap";

const EditarProduto = ({ livro }) => {
  console.log(livro);

  const [descricao, setDescricao] = useState(livro.descricao);

  //   Editar Nome (descricao)

  const updateDescricao = async (e) => {
    e.preventDefault();
    try {
      const body = { descricao };
      const response = await fetch(
        `http://localhost:5000/admProdutos/descricao/${livro.id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/gerenciarProdutos";
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${livro.id}`}
      >
        Editar
      </button>

      <div
        class="modal"
        id={`id${livro.id}`}
        onClick={() => setDescricao(livro.descricao)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Editar Livro</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setDescricao(livro.descricao)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <Form.Floating className="mb-3 mt-3">
                <Form.Control
                  id="descricao"
                  name="descricao"
                  type="text"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  placeholder="descricao"
                />
                <label htmlFor="descricao">Nome</label>
              </Form.Floating>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateDescricao(e)}
              >
                Editar
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescricao(livro.descricao)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarProduto;
