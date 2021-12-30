import React from "react";
import '../style/produtoCarrinho.css'
export default function ProdutoCarrinho(props){
    return(
        <div>
            <div className="row produtoCarrinho">
                    <div className="Livro col-xl-7">
                    <img className="imgLivro" alt="" src={
                    process.env.PUBLIC_URL + "/assets/images/CapaLivro.jpg"}  
                    />
                    <div className="infoLivro">
                    <h5>Fallen</h5>
                        <p>Autor: lauren Kate</p>
                        <p>Categoria: Romance</p>
                        <p>Editora: Editorial Record</p>
                    </div> 
                    </div>
                    <div className="col-xl-2 infosCompra qtd">
                        <form>
                            <input className="input-qtd" type="number" min="0"  placeholder="1"></input>
                        </form>
                    </div>
                    <div className="col-xl-1 infosCompra">
                        <p>R$50,00</p>
                    </div>
            </div>
        </div>
    )
}