import React from "react";
import "../style/login-cadastro.css";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Cadastro() {
  //   const [inputs, setInputs] = useState({
  //     nome: "",
  //     email: "pig",
  //     senha: "",
  //   });

  //   const { email, password, nome } = inputs;

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
          <h1>Bem-vindo(a)!</h1>
          <Form.Floating className="mb-3 mt-3">
            <Form.Control
              id="cademail"
              type="email"
              placeholder="nome@exemplo.com"
              name="cademail"
            />
            <label htmlFor="cademail">E-mail</label>
          </Form.Floating>

          <Form.Floating className="mb-3 mt-3">
            <Form.Control id="cadnome" type="text" placeholder="nome" />
            <label htmlFor="cadnome">Seu nome completo</label>
          </Form.Floating>

          <Form.Floating>
            <Form.Control
              id="cadsenha"
              type="text" //password
              placeholder="Senha"
            />
            <label htmlFor="cadsenha">Senha</label>
          </Form.Floating>

          <Modal.Footer>
            <Link to="/usuario">
              <Button className="modal-submit-button">Cadastrar</Button>
            </Link>
          </Modal.Footer>
          <div className=" troca d-flex troca justify-content-end">
            <p>Já tem conta?</p>
            <Link to="/login">Entrar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
