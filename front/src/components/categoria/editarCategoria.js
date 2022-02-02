import React, { useState } from "react";
import { Form } from "react-bootstrap";

const EditarCategoria = ({categoria}) => {
    const [descricao, setDescricao] = useState(categoria.descricao);
console.log(categoria);



const updateCategoria = async (e) => {
    e.preventDefault();
    try {
        const body = { descricao };
        const response = await fetch(
            `http://localhost:5000/admCategorias/descricao/${categoria.id}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body),
            }
          );
        console.log(response);
        window.location = "/gerenciarCategorias";
    } catch (err) {
        console.error(err.message);
    }

}
  return (
    <div>
        <button
                type="button"
                class="btn btn-warning btn-admProduto"
                data-toggle="modal"
                data-target={`#id${categoria.id}`}
            >
                Editar
            </button>

        <div 
        id={`id${categoria.id}`}
        onClick={() => setDescricao(categoria.descricao)} 
        class="modal fade" 
        role="dialog">
        <div class="modal-dialog">

            <div class="modal-content">
            <div class="modal-header">
                    <h4 class="modal-title">Editar categoria</h4>
                    <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        onClick={() => setDescricao(categoria.descricao)}
                    >
                        &times;
                    </button>
                    </div>
            <div class="modal-body">
                <form>
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
                </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateCategoria(e)}
              >
                Editar
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescricao(categoria.descricao)}
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

export default EditarCategoria;
