import React from "react";
import BtnFinalCompra from "./btnFinalCompra";
import "../style/resumoCarrinho.css"
export default function ResumoCarrinho({ totalPrice, finishPurchase, handdleCartClear }){
    return(
        <div>
            <div className="resumoCarrinho justify-content-center">
         <h5>Resumo</h5>
             <div className="taxas">
                <div className="subtotal">
                    <p>Subtotal</p>
                    <p>R$ {totalPrice}</p>
                </div>
                <div className="taxa">
                    <p>Taxa</p>
                    <p>R$ {totalPrice === 0 ? "0,00" : "20,00"}</p>
                </div>
             </div>
             <div className="total">
                 <p>Total</p>
                 <p>$ {totalPrice === 0 ? "0,00" : totalPrice + 20}</p>
             </div>
        </div>
        {totalPrice !==0 && (<button className="btnCartClear" onClick={() => {handdleCartClear()}}>Limpar Carrinho</button>)}
        {totalPrice !== 0 && <BtnFinalCompra finishPurchase={finishPurchase} texto ="Finalizar compra"/>}
        </div>
        
    )
}
