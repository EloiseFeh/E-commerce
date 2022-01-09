import "../style/clientScreens.css";
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Perfil({ setAuth }) {
  const [user, setUser] = useState([]);
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const getUser = async () => {
    try {
      const response = await fetch("http://localhost:5000/perfil/", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const jsonData = await response.json();

      setUser(jsonData);
      setNome(jsonData.nome);
      setEndereco(jsonData.endereco);
      setEmail(jsonData.email);
      setSenha(jsonData.senha);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  console.log(user);
  console.log(nome);
  // Função para ATUALIZAR dados do cliente

  const UpdateUser = async (e) => {
    e.preventDefault();
    try {
      const bodyNome = { nome };
      const bodyEndereco = { endereco };
      const bodyEmail = { email };
      const bodySenha = { senha };

      // Atualizando Nome
      const responseNome = await fetch(`http://localhost:5000/perfil/nome`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.token,
        },
        body: JSON.stringify(bodyNome),
      });

      // Atualizando Endereco
      const responseEndereco = await fetch(
        `http://localhost:5000/perfil/endereco`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.token,
          },
          body: JSON.stringify(bodyEndereco),
        }
      );

      // Atualizando Email
      const responseEmail = await fetch(`http://localhost:5000/perfil/email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.token,
        },
        body: JSON.stringify(bodyEmail),
      });

      // Atualizando Senha
      const responseSenha = await fetch(`http://localhost:5000/perfil/senha`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.token,
        },
        body: JSON.stringify(bodySenha),
      });

      window.location = "/perfil";
    } catch (err) {
      console.error(err.message);
    }
  };

  // função de apagar conta

  const ApagarConta = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/perfil/excluir/",
        {
          method: "DELETE",
          headers: { token: localStorage.token },
        }
      );
     
      window.location= "/login";
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Conta deletada com sucesso!");
     // setLivros(livros.filter((livro) => livro.id !== id));
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };




  return (
    <div className="clientDashboard">
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1>Perfil</h1>
      </div>

      <form onSubmit={UpdateUser}>
        <Form.Floating className="mb-3 mt-3">
          <Form.Control
            id="cadnome"
            name="nome"
            type="text"
            placeholder="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <label htmlFor="cadnome">Nome</label>
        </Form.Floating>
        <Form.Floating className="mb-3 mt-3">
          <Form.Control
            id="cadendereco"
            name="endereco"
            type="text"
            placeholder="endereco"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
          <label htmlFor="cadendereco">Seu endereço</label>
        </Form.Floating>

        <Form.Floating className="mb-3 mt-3">
          <Form.Control
            id="cademail"
            name="email"
            type="email"
            placeholder="nome@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="cademail">E-mail</label>
        </Form.Floating>

        <Form.Floating>
          <Form.Control
            id="cadsenha"
            name="senha"
            type="text" //password
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <label htmlFor="cadsenha">Senha</label>
        </Form.Floating>

        <button className="modal-submit-button btn-submit">Atualizar</button>
      </form>

      <button className="ButtonDeletaAcc"  onClick={() => ApagarConta()}>Deletar Conta</button>
    </div>
  );
}
