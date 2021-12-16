import React from "react";
import '../style/login-cadastro.css';
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Login(){
    return(
        <div className="container">
            <div className="row align-items-center login">
            <div className="title col-xl-6 justify-content-center text-center">
            <img className="logo-img" src={process.env.PUBLIC_URL + "/assets/images/ilustra.png"} />
            </div>
                <div className="title col-xl-6 ">
                    <h1>Bem-vindo(a) de volta!</h1>
                    <Form.Floating className="input-form">
                            <Form.Control
                            id="logemail"
                            type="email"
                            placeholder="nome@exemplo.com"
                            />
                            <label htmlFor="logemail">Nome de usuário</label>
                        </Form.Floating>
                        <Form.Floating className="input-form">
                            <Form.Control
                            id="logsenha"
                            type="text" //password
                            placeholder="Senha"
                            />
                            <label htmlFor="logsenha">Senha</label>
                        </Form.Floating>
                        <Modal.Footer>
                            <Link to="/usuario"><Button className="modal-submit-button">Login Cliente</Button></Link>
                            <Link to="/areaAdmin"><Button className="modal-submit-button">Login ADM</Button></Link>
                            
                        </Modal.Footer>
                        <div className=" troca d-flex troca justify-content-end">
                        <p>Não tem conta?</p>
                        <Link to="/cadastro">Registrar-se</Link>
                        </div>
                        
                    </div> 

                       
                
            </div>
        </div>
    )
}