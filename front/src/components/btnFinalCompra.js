import React from "react";
import {Link} from 'react-router-dom';
import '../style/resumoCarrinho.css'
export default function BtnFinalCompra(props){
    function confirmaCompra(){
        alert('Compra finalizada');
    }
    return(
        <Link to= {props.link}>
         <button className="btnFinalCompra" onClick={confirmaCompra}><p>{props.texto}</p></button>   
         </Link>
    )
}