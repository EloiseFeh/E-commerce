import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../style/modal.css'

export default function ModalLoginCadastro (props){
    const [switchToggled,setSwitchToggled] = useState(true);

    return(
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div className="operations-slider">
                        <button 
                        type="button"
                        onClick={() => setSwitchToggled(true)}
                        title="Login"
                        className="">   
                            Login
                        </button>

                        <button 
                        type="button"
                        onClick={() => setSwitchToggled(false)}
                        title="Cadastro"
                        className="">  
                            Cadastro
                        </button>
                    </div>
                    {
                        switchToggled? 
                        <>
                        <div className=" operations-slider-bar button-login"></div> 
                        <Form.Floating className="mb-3 mt-3">
                            <Form.Control
                            id="logemail"
                            type="email"
                            placeholder="nome@exemplo.com"
                            />
                            <label htmlFor="logemail">Nome de usuário</label>
                        </Form.Floating>
                        <Form.Floating>
                            <Form.Control
                            id="logsenha"
                            type="text" //password
                            placeholder="Senha"
                            />
                            <label htmlFor="logsenha">Senha</label>
                        </Form.Floating>
                        <Modal.Footer>
                            <Link to="/usuario"><Button className="modal-submit-button" onClick={props.onHide}>Login Cliente</Button></Link>
                            <Link to="/areaAdmin"><Button className="modal-submit-button" onClick={props.onHide}>Login ADM</Button></Link>
                        </Modal.Footer>
                        </>
                        : 
                        <>
                        <div className=" operations-slider-bar button-cadastro"></div> 
                        <Form.Floating className="mb-3 mt-3">
                            <Form.Control
                            id="cademail"
                            type="email"
                            placeholder="nome@exemplo.com"
                            />
                            <label htmlFor="cademail">Nome de usuário</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3 mt-3">
                            <Form.Control
                            id="cadnome"
                            type="text"
                            placeholder="nome"
                            />
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
                            <Link to="/usuario"><Button className="modal-submit-button" onClick={props.onHide}>Cadastrar</Button></Link>
                        </Modal.Footer>
                        </>
                    }
                    
                </div>
            </Modal.Body>
        </Modal>
    )
}

