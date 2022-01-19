import React, { useState, useRef } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function CadastrarProdutos() {
  const [inputs, setInputs] = useState({
    descricao: "",
    preco: "",
    foto: null,
    quantidade: "",
    autor: "",
    editora: "",
    ano: "",
  });

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const { descricao, preco, foto, quantidade, autor, editora, ano } = inputs;

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const dadosForm = new FormData();
      dadosForm.append("descricao", descricao);
      dadosForm.append("preco", preco);
      dadosForm.append("quantidade", quantidade);
      dadosForm.append("autor", autor);
      dadosForm.append("editora", editora);
      dadosForm.append("ano", ano);
      dadosForm.append("productImage", foto.files[0]);

      console.log(dadosForm);

      // const body = { descricao, preco, foto, quantidade, autor, editora, ano };
      console.log(dadosForm);
      const response = await fetch("http://localhost:5000/admProdutos/novo", {
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        body: dadosForm,
      });
      console.log(response);
      // window.location = "/gerenciarProdutos";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <h2>Cadastrar novo produto</h2>

      <form
        id="formCadProduto"
        name="formCadProduto"
        encType="multipart/form-data"
        onSubmit={onSubmitForm}
      >
        <div className="row g2">
          <div className="col-xl">
            <Form.Floating className="mt-3">
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
          </div>
        </div>

        <div className="row g2">
          <div className="col-xl-2">
            <Form.Floating className="mt-3">
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
          </div>
          <div className="col-xl-6">
            <Form.Floating className="mt-3">
              <Form.Control
                id="foto"
                name="foto"
                type="file"
                placeholder="insira foto"
                value={foto}
                onChange={(e) => onChange(e)}
              />
            </Form.Floating>
          </div>
          <div className="col-xl-4">
            <Form.Floating className="mt-3">
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
          </div>
        </div>
        <div className="col-xl-6">
          <Form.Floating className=" mt-3">
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
        </div>

        <div className="col-xl-4">
          <Form.Floating className="mb-3 mt-3">
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
        </div>

        <div className="row g2">
          <div className="col-xl-2">
            <Form.Floating className="mt-3">
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
          </div>
        </div>

        <button className="modal-submit-button btn-submit">Cadastrar</button>
      </form>
    </div>
  );
}
