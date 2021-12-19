import React, { useState } from "react";
import "../style/login-cadastro.css";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login({ setAuth }) {
  // let history = useNavigate();

  const [inputs, setInputs] = useState({
    login: "",
    senha: "",
  });

  const { login, senha } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { login, senha };
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        console.log(parseRes);
        toast.success("Logado com sucesso!");
        setAuth(true);
      } else {
        toast.error("Usuário ou senha incorretos.");
        setAuth(false);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="container">
      <div className="row align-items-center login">
        <div className="title col-xl-6 justify-content-center text-center">
          <img
            className="logo-img"
            alt=""
            src={process.env.PUBLIC_URL + "/assets/images/ilustra.png"}
          />
        </div>
        <div className="title col-xl-6 ">
          <h1>Bem-vindo(a) de volta!</h1>

          <form onSubmit={onSubmitForm}>
            <Form.Floating className="mb-3 mt-3">
              <Form.Control
                id="login"
                name="login"
                type="text"
                value={login}
                placeholder="user"
                onChange={(e) => onChange(e)}
              />
              <label htmlFor="login">Login</label>
            </Form.Floating>
            <Form.Floating className="mb-3 mt-3">
              <Form.Control
                id="senha"
                name="senha"
                type="password" //password
                value={senha}
                placeholder="Senha"
                onChange={(e) => onChange(e)}
              />
              <label htmlFor="senha">Senha</label>
            </Form.Floating>
            <button className="modal-submit-button btn-submit">Entrar</button>
          </form>
          <div className=" troca d-flex troca justify-content-end">
            <p>Não tem conta?</p>
            <Link to="/cadastro">Registrar-se</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
