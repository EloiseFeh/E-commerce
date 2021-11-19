import HeaderCarrinho from "../components/headerCarrinho";
import ProdutoCarrinho from "../components/produtoCarrinho";
import ResumoCarrinho from "../components/resumoCarrinho";
import "../style/cart.css"
export default function Cart(){
    return(
        <div>
          <HeaderCarrinho/> 
          <div className="container">
              <div className="row">
                <div className="col-xl-8">
                <div class="titulosCarrinho row">
                  <div className="col-xl-5 p1">
                  <p>Produto</p>
                  </div>
                  <div className="col-xl-2 p2 unidades">
                  <p>Unidades</p>
                  </div>
                  <div className="col-xl-1 p2 ">
                  <p className="subt">Subtotal</p>
                  </div>
                </div>
                <ProdutoCarrinho/>
                <ProdutoCarrinho/>
                </div>
                <div className="col-xl-4">
                 <ResumoCarrinho/>
                </div>
              </div>
          </div>
          <form>
          </form>
        </div>
    )
}