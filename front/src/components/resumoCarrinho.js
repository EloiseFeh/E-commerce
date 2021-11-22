import React from "react";
import BtnFinalCompra from "./btnFinalCompra";
import "../style/resumoCarrinho.css"
export default function ResumoCarrinho(){
    return(
        <div>
            <div className="resumoCarrinho justify-content-center">
         <h5>Resumo</h5>
             <div className="taxas">
                <div className="subtotal">
                    <p>Subtotal</p>
                    <p>R$ 50,00</p>
                </div>
                <div className="taxa">
                    <p>Taxa</p>
                    <p>R$ 10,00</p>
                </div>
             </div>
             <div className="total">
                 <p>Total</p>
                 <p>$ 60,00</p>
             </div>
        </div>  
        <BtnFinalCompra link ="/" texto ="Finalizar compra"/>
        </div>
        
    )
}
