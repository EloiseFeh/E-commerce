import React from "react";
import "../style/headerCarrinho.css"
export default function HeaderCarrinho(){
    var Texto = "Carrinho de produtos"
    return(
        <div>
            <div className="container HeaderCarrinho justify-content-center d-block">
                <div className="row ">
                <div className="col-xl-8">
                    <h1>{Texto}</h1>
                </div>
                <div className="col-xl-4">
                    <button><p>Continuar comprando</p></button>
                </div>
                </div>
            </div>
        </div>
    )
}