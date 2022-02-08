import { toast } from "react-toastify";
import HeaderCarrinho from "../components/headerCarrinho";
import ProdutoCarrinho from "../components/produtoCarrinho";
import ResumoCarrinho from "../components/resumoCarrinho";
import "../style/cart.css";
export default function Cart({ cartItems, setCartItems, handdleAddLivro, handdleRemoveLivro, handdleCartClear }) {

  const totalPrice = cartItems.reduce((preco, item) => preco + item.quantity * item.preco, 0);

  const finishPurchase = async () => {
    //e.preventDefault();
    try {
      const body = {cartItems};
      console.log(body);
      const response = await fetch("http://localhost:5000/clienteCompras/comprar", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', token: localStorage.token },
        body: JSON.stringify(body),
      });
      const jsonData = await response.json();
      cartItems(jsonData);
    } catch (err) {
      handdleCartClear();
      toast.success("Compra feita com sucesso!");
      console.error(err.message);
    }
  };

  return (
    <div>
      <HeaderCarrinho name="Carrinhos de Produtos" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div class="titulosCarrinho row">
              <div className="col-xl-7 p1">
                <p>Produto</p>
              </div>
              <div className="col-xl-2 p2 unidades">
                <p>Unidades</p>
              </div>
              <div className="col-xl-1 p2 ">
                <p className="subt">Subtotal</p>
              </div>
            </div>
            {cartItems.length === 0 && <p>Nenhum item adicionado ao carrinho ainda!</p>}
            {cartItems.map((item) => (
              <div key={item.id}>
                <ProdutoCarrinho item={item} cartItems={cartItems} handdleAddLivro={handdleAddLivro} handdleRemoveLivro={handdleRemoveLivro}/>
              </div>
            ))}
          </div>
          <div className="col-xl-4">
            <ResumoCarrinho finishPurchase={finishPurchase} totalPrice={totalPrice} handdleCartClear={handdleCartClear} />
          </div>
        </div>
      </div>
    </div>
  );
}
