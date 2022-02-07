import React from "react";
export default function ModalCategoriaProduto({livro}){
    return(
        <div>
        <button
           type="button"
           class="a"
           data-toggle="modal"
           data-target={`#id${livro.id}`}
         >
           Editar
         </button>
         </div>
    )
}