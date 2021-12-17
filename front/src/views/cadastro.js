import React,{ useState}  from "react";
import "../style/login-cadastro.css";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Cadastro({setAut}) {
    const [inputs, setInputs] = useState({
      nome: "oi",
      endereco: "",
      email: "pig",
      login:"",
      senha: "",
      adm:false,
      
    });
    const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    const { nome, endereco,email,login,senha,adm } = inputs;
   const onSubmitForm = async(e) =>{
     e.preventDefault();
     try{
      const body = { nome, endereco,email,login,senha,adm};
      const response = await fetch(
          "http://localhost:5000/authentication/register",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify(body)
          });
          const parseRes = await response.json();
          console.log(parseRes);
        
     }
     catch(err){
     
       console.error(err.message)
     }
   }

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
          <form onSubmit={onSubmitForm}>
          <Form.Floating className="mb-3 mt-3">
            <Form.Control 
            id="cadnome" 
            name="nome"
            type="text" 
            placeholder="nome" 
            value={nome}
            onChange = {e => onChange(e)}
            />
            <label htmlFor="cadnome">Seu nome completo</label>
          </Form.Floating>
          <Form.Floating className="mb-3 mt-3">
            <Form.Control 
            id="cadendereco" 
            name="endereco"
            type="text" 
            placeholder="endereco" 
            value={endereco}
            onChange = {e => onChange(e)}
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
              onChange = {e => onChange(e)}
            />
            <label htmlFor="cademail">E-mail</label>
          </Form.Floating>

          <Form.Floating className="mb-3 mt-3">
            <Form.Control
              id="cadlogin  "
              name="login"
              type="text"
              placeholder="user123"
              value={login}
              onChange = {e => onChange(e)}
            />
            <label htmlFor="cademail">Login</label>
          </Form.Floating>
          <Form.Floating>
            <Form.Control
              id="cadsenha"
              name="senha"
              type="password" //password
              placeholder="Senha"
              value={senha}
              onChange = {e => onChange(e)}
            />
            <label htmlFor="cadsenha">Senha</label>
          </Form.Floating>
          <Form.Floating>
            <Form.Control
              id="cadadm"
              name="adm"
              type="text" //password
              placeholder="adm"
              value={adm}
              onChange = {e => onChange(e)}
            />
            <label htmlFor="adm">adm</label>
          </Form.Floating>




          <button className="modal-submit-button">Cadastrar</button>
          {/* <Modal.Footer>
            <Link to="/usuario">
              <Button className="modal-submit-button">Cadastrar</Button>
            </Link>
          </Modal.Footer> */}
          </form>
        
          <div className=" troca d-flex troca justify-content-end">
            <p>Já tem conta?</p>
            <Link to="/login">Entrar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
