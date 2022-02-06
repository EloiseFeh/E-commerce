import React, { useState } from "react";
import "../style/livrosLista.css";
import { Link } from "react-router-dom";

const Livro = ({ livro, handdleAddLivro }) => {
  // const [cart, setCart] = useState([]);

  // const addToCart = (livro) => {
  //   console.log("Foi!");
  //   setCart([...cart, livro]);
  // };

  return (
    <div key={livro._id} className="livro-card">
      {/* <Link to="/produto"> */}
        <div className="livro-card-content">
          <div className="livro-card-image">
            <img
              className=""
              src={
                process.env.PUBLIC_URL + "/assets/images/book-placeholder.png"
              }
              alt="banner"
            />
          </div>
          <div className="livro-card-infos">
            <h6>{livro.descricao}</h6>
            <p>{livro.autor} {livro.ano}</p>
            <h3>R$ {livro.preco}</h3>
          </div>
        </div>
        <div>
          <button onClick={() => handdleAddLivro(livro)}>
            <h6>Compre</h6>
          </button>
        </div>
      {/* </Link> */}
    </div>
  );
};

export default Livro;
