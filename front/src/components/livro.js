import React from 'react';
import '../style/livrosLista.css'
import {Link} from 'react-router-dom';

const Livro = ({livro}) => {
    return ( 
        <div key={livro._id} className="livro-card">
            <Link to="/produto">
                <div className="livro-card-content">
                    <div className="livro-card-image">
                        <img
                        className=""
                        src={
                            process.env.PUBLIC_URL + "/assets/images/capaLivro.jpg"
                        }
                        alt="banner"
                        />  
                    </div>
                    <div className="livro-card-title">
                        <h5>{livro.title}</h5>
                    </div>
                    <div className="livro-card-infos">
                        <h6>{livro.autor}</h6>
                        <p>Descricao</p>
                        <h3>{livro.preco}</h3>
                    </div>
                </div>
                <div>
                    <button>
                        <h6>Compre</h6>
                    </button>
                </div>
            </Link>
        </div>
    );
}
 
export default Livro;