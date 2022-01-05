import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function CadastrarProdutos() {
  const [inputs, setInputs] = useState({
    descricao: "",
    preco: 10,
    foto: "foto aqui",
    quantidade: "",
    autor: "",
    editora: "",
    ano: "",
  });

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const { descricao, preco, foto, quantidade, autor, editora, ano } = inputs;

  const onSubmitForm = async (e) => {
    console.log("entrou no submit");
    e.preventDefault();
    try {
      const body = { descricao, preco, foto, quantidade, autor, editora, ano };
      console.log(body);
      const response = await fetch("http://localhost:5000/admProdutos/novo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      //   window.location = "/gerenciarProdutos";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <h2>Cadastrar novo Produto</h2>

      <form onSubmit={onSubmitForm}>
        <Form.Floating className="mb-3 mt-3">
          <Form.Control
            id="descricao"
            name="descricao"
            type="text"
            placeholder="descricao"
            value={descricao}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="descricao">Descrição</label>
        </Form.Floating>
        <Form.Floating className="mb-3 mt-3">
          <Form.Control
            id="preco"
            name="preco"
            type="number"
            placeholder="preco"
            value={preco}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="preco">Preço do Livro</label>
        </Form.Floating>

        <Form.Floating className="mb-3 mt-3">
          <Form.Control
            id="foto"
            name="foto"
            type="foto"
            placeholder="insira foto"
            value={foto}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="foto">Link para uma capa</label>
        </Form.Floating>

        <Form.Floating className="mb-3 mt-3">
          <Form.Control
            id="quantidade"
            name="quantidade"
            type="number"
            placeholder="Exemplo: 21"
            value={quantidade}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="quantidade">Quantidade em Estoque</label>
        </Form.Floating>

        <Form.Floating>
          <Form.Control
            id="autor"
            name="autor"
            type="text"
            placeholder="Autor"
            value={autor}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="autor">Autor</label>
        </Form.Floating>

        <Form.Floating>
          <Form.Control
            id="editora"
            name="editora"
            type="text"
            placeholder="Editora"
            value={editora}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="editora">Editora</label>
        </Form.Floating>

        <Form.Floating>
          <Form.Control
            id="ano"
            name="ano"
            type="number"
            placeholder="Ano de Lançamento"
            value={ano}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="ano">Ano</label>
        </Form.Floating>

        <button className="modal-submit-button btn-submit">Cadastrar</button>
      </form>
    </div>
  );
}
