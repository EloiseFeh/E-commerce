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
                <label for="qtd">Quatidade</label>
                <input id="qtd"type="Number"></input>
            </form>
        </div>
        
    </div>
    
)
}