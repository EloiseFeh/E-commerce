import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

export default function ModalCategoriaProduto({ livro }) {
  const [categoriaslivro, setCategoriasLivro] = useState([]);

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

  useEffect(() => {
    getCategoriasLivro();
  }, []);

  console.log("aqui o bookcategorie");
  console.log(categoriaslivro);

  return (
    <div>
      <button
        type="button"
        class="btn btn-warning btn-admProduto"
        data-toggle="modal"
        data-target={`#id${livro.descricao}`}
      >
        Editar
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
              <Form.Floating className="mb-3 mt-3">
                <Form.Control
                  id="descricao"
                  name="descricao"
                  type="text"
                  value={categoriaslivro}
                  // onChange={(e) => setDescricao(e.target.value)}
                  placeholder="descricao"
                />
                <label htmlFor="descricao">Nome da Categoria</label>
              </Form.Floating>
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
