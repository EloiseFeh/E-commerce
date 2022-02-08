import React from "react";
import "../style/resumoCarrinho.css";
export default function BtnFinalCompra({texto, finishPurchase}) {
  return (
    <button className="btnFinalCompra" onClick={() => {finishPurchase()}}>
      <p>{texto}</p>
    </button>
  );
}
