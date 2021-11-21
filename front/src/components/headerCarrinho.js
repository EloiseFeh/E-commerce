import React from "react";
import "../style/headerCarrinho.css";
import BtnContCompra from "./btnContCompra";
export default function HeaderCarrinho(props){
    return(
        <div>
            <div className="container HeaderCarrinho justify-content-center d-block">
                <div className="row ">
                <div className="col-xl-8">
                    <h1>{props.name}</h1>
                </div>
                <div className="col-xl-4">
                   <BtnContCompra link="/" texto ="Continuar comprando"/>
                </div>
                </div>
            </div>
        </div>
    )
}