import React from "react";
import DescricaoLivro from "./descricaoLivro";
import '../style/sobreLivro.css'
export default function SobreLivro(props){
return(
    <div className="sobreLivroGeral">
        <h2>{props.titulo}</h2>
        <div className="sobreLivro">
            <p>{props.autor}, {props.ano}, {props.editora}, {props.categoria}</p>
        </div>
        <div className="livroCompra">
            <h3>{props.preço}</h3>
            <form>
                <label for="qtd" >Quantidade:</label>
                <input className="input-qtd" id="qtd"type="Number" placeholder='1' min='0'></input>
            </form>
        </div>
        
    </div>
    
)
}