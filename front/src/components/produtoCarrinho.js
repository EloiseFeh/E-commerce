import React from "react";
import "../style/produtoCarrinho.css";
export default function ProdutoCarrinho({ item, handdleAddLivro, handdleRemoveLivro }) {
  
  const totalPriceItem = item.quantity * item.preco;
  console.log(item);

  return (
    <div className="row produtoCarrinho">
      <div className="Livro col-xl-5">
        <img className="imgLivro" alt="" src={process.env.PUBLIC_URL + "/assets/images/CapaLivro.jpg"} />
        <div className="infoLivro">
          <h5>{item.descricao}</h5>
          <p>{item.autor}</p>
          <p>
            Categoria: {item.categoria} {item.ano}
          </p>
          <p>Editora: Editorial Record</p>
        </div>
      </div>
      {/* <div className="col-xl-2 infosCompra">
        <form>
          <input className="input-qtd" type="number" min="0" placeholder="1"></input>
        </form>
      </div> */}
      <div className="col-xl-1 infosCompra">
        <p>R${item.preco}</p>
      </div>
      <div className="col-xl-4 infosCompra">
          <button onClick={() => handdleRemoveLivro(item)}>
            <h6> - </h6>
          </button>
          <p>{item.quantity}</p>
          <button onClick={() => handdleAddLivro(item)}>
            <h6> + </h6>
          </button>
      </div>
      <div className="col-xl-1 infosCompra">
        <p>R${totalPriceItem}</p>
      </div>
    </div>
  );
}
