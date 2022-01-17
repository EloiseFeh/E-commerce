import React, { useState } from "react";
import { Form } from "react-bootstrap";

const EditarProduto = ({ livro }) => {
  // console.log(livro);

  const [descricao, setDescricao] = useState(livro.descricao);
  const [preco, setPreco] = useState(livro.preco);
  const [foto, setFoto] = useState(livro.foto);
  const [quantidade, setQuantidade] = useState(livro.quantidade);
  const [autor, setAutor] = useState(livro.autor);
  const [editora, setEditora] = useState(livro.editora);
  const [ano, setAno] = useState(livro.ano);

  //   Editar Nome (descricao)

  const updateProduto = async (e) => {
    e.preventDefault();
    try {
      const body = { descricao };
      const bodyPreco = { preco };
      const bodyFoto = { foto };
      const bodyQuantidade = { quantidade };
      const bodyAutor = { autor };
      const bodyEditora = { editora };
      const bodyAno = { ano };

      // Atualizando Descrição
      const response = await fetch(
        `http://localhost:5000/admProdutos/descricao/${livro.id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      // Atualizando Preco
      const responsePreco = await fetch(
        `http://localhost:5000/admProdutos/preco/${livro.id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bodyPreco),
        }
      );

      // Atualizando Foto
      const responseFoto = await fetch(
        `http://localhost:5000/admProdutos/foto/${livro.id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bodyFoto),
        }
      );

      // Atualizando Quantidade
      const responseQuantidade = await fetch(
        `http://localhost:5000/admProdutos/quantidade/${livro.id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bodyQuantidade),
        }
      );

      // Atualizando Autor
      const responseAutor = await fetch(
        `http://localhost:5000/admProdutos/autor/${livro.id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bodyAutor),
        }
      );

      // Atualizando Editora
      const responseEditora = await fetch(
        `http://localhost:5000/admProdutos/editora/${livro.id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bodyEditora),
        }
      );

      // Atualizando Ano
      const responseAno = await fetch(
        `http://localhost:5000/admProdutos/ano/${livro.id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bodyAno),
        }
      );

      window.location = "/gerenciarProdutos";
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-warning btn-admProduto"
        data-toggle="modal"
        data-target={`#id${livro.id}`}
      >
        Editar
      </button>

      <div
        className="modal"
        id={`id${livro.id}`}
        onClick={() => setDescricao(livro.descricao)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Editar Livro</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setDescricao(livro.descricao)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
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

              <Form.Floating className="mb-3 mt-3">
                <Form.Control
                  id="preco"
                  name="preco"
                  type="number"
                  value={preco}
                  onChange={(e) => setPreco(e.target.value)}
                  placeholder="preco"
                />
                <label htmlFor="preco">Preço</label>
              </Form.Floating>

              <Form.Floating className="mb-3 mt-3">
                <Form.Control
                  id="foto"
                  name="foto"
                  type="text"
                  value={foto}
                  onChange={(e) => setFoto(e.target.value)}
                  placeholder="foto"
                />
                <label htmlFor="foto">Capa</label>
              </Form.Floating>

              <Form.Floating className="mb-3 mt-3">
                <Form.Control
                  id="quantidade"
                  name="quantidade"
                  type="number"
                  value={quantidade}
                  onChange={(e) => setQuantidade(e.target.value)}
                  placeholder="Exemplo: 21"
                />
                <label htmlFor="quantidade">Quantidade</label>
              </Form.Floating>

              <Form.Floating className="mb-3 mt-3">
                <Form.Control
                  id="autor"
                  name="autor"
                  type="text"
                  value={autor}
                  onChange={(e) => setAutor(e.target.value)}
                  placeholder="Autor"
                />
                <label htmlFor="autor">Autor</label>
              </Form.Floating>

              <Form.Floating className="mb-3 mt-3">
                <Form.Control
                  id="editora"
                  name="editora"
                  type="text"
                  value={editora}
                  onChange={(e) => setEditora(e.target.value)}
                  placeholder="Editora"
                />
                <label htmlFor="editora">Editora</label>
              </Form.Floating>

              <Form.Floating className="mb-3 mt-3">
                <Form.Control
                  id="ano"
                  name="ano"
                  type="number"
                  value={ano}
                  onChange={(e) => setAno(e.target.value)}
                  placeholder="ano"
                />
                <label htmlFor="ano">Ano</label>
              </Form.Floating>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateProduto(e)}
              >
                Editar
              </button>
              <button
                type="button"
                className="btn btn-danger"
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
