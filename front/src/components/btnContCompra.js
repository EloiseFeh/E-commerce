import React from "react";
import {Link} from 'react-router-dom';
import '../style/btnContCompra.css';
export default function BtnContCompra(props){
    return(
        <Link to= {props.link}>
            <div className="btnCont"><button ><p>{props.texto}</p></button></div>
         </Link>
    )
}