import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function CadastrarCategorias() {
    const [descricao, setDescricao] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { descricao};
            console.log(body);
            const response = await fetch("http://localhost:5000/admCategorias/novo", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body),
            });
            console.log(response);
            window.location = "/gerenciarCategorias";
          } catch (err) {
            console.error(err.message)
            
        }
    }

  return (
    <div>
 <h2>Cadastrar nova categoria</h2>

    <form onSubmit={onSubmitForm}>
    <Form.Floating className="mt-3">
          <Form.Control
            id="descricao"
            name="descricao"
            type="text"
            placeholder="descricao"
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
          />
          <label htmlFor="descricao">Descrição</label>
        </Form.Floating>
        <button className="modal-submit-button btn-submit">Cadastrar</button>
    </form>
    </div>
  );
}
