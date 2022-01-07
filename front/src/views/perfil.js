import "../style/clientScreens.css";
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Perfil({ setAuth }) {
  const [nome, setnome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");



  async function getUsuario (){
      
  }
  // Função para ATUALIZAR dados do cliente

  // const onSubmitForm = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const body = { nome, endereco, email, senha };
  //     const response = await fetch("http://localhost:5000/auth/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify(body),
  //     });
  //     const parseRes = await response.json();
  //     if (parseRes.token) {
  //       toast.success("Cadastrado com sucesso!");
  //       localStorage.setItem("token", parseRes.token);
  //       //console.log(parseRes);
  //       setAuth(true);
  //     } else {
  //       toast.error("Login já existente!");
  //       setAuth(false);
  //     }
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  return (
    <div className="clientDashboard">
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1>Perfil</h1>
      </div>

      <form>
        <Form.Floating className="mb-3 mt-3">
          <Form.Control
            id="cadnome"
            name="nome"
            type="text"
            placeholder="nome"
            // value={nome}
            // onChange={(e) => onChange(e)}
          />
          <label htmlFor="cadnome">{nome}</label>
        </Form.Floating>
        <Form.Floating className="mb-3 mt-3">
          <Form.Control
            id="cadendereco"
            name="endereco"
            type="text"
            placeholder="endereco"
            // value={endereco}
            // onChange={(e) => onChange(e)}
          />
          <label htmlFor="cadendereco">Seu endereço</label>
        </Form.Floating>

        <Form.Floating className="mb-3 mt-3">
          <Form.Control
            id="cademail"
            name="email"
            type="email"
            placeholder="nome@exemplo.com"
            // value={email}
            // onChange={(e) => onChange(e)}
          />
          <label htmlFor="cademail">E-mail</label>
        </Form.Floating>

        <Form.Floating>
          <Form.Control
            id="cadsenha"
            name="senha"
            type="password" //password
            placeholder="Senha"
            // value={senha}
            // onChange={(e) => onChange(e)}
          />
          <label htmlFor="cadsenha">Senha</label>
        </Form.Floating>

        <button className="modal-submit-button btn-submit">Atualizar</button>
      </form>

      <button className="ButtonDeletaAcc">Deletar Conta</button>
    </div>
  );
}
