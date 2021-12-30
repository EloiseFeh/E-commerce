import HeaderCarrinho  from "../components/headerCarrinho"
import ImgLivroGrande from "../components/imgLivroGrande"
import SobreLivro from "../components/sobreLivro"
import DescricaoLivro from "../components/descricaoLivro"
import BtnContCompra from "../components/btnContCompra";
import '../style/produtoUnico.css'
export default function ProdutoUnico(){
 return(
     <div>
         <HeaderCarrinho name="Livro"/> 
         <div className="container">
             <div className="row ProdutoUnico">
             <div className="col-xl-4 justify-content-center">
             <ImgLivroGrande />
             </div>
             <div className="col-xl-8">
                 <div className="row">
                 <div className="col-xl-12">
                 <SobreLivro titulo="Fallen" autor="Lauren Kate" categoria="romance" ano="2009" 
                    editora="Editorial Record" preço="R$ 50,00"/>
                 </div>
                 </div>
                 <div className="row">
                     <div className="col-xl-6">
                         <span></span>
                     </div>
                     <div className="col-xl-6">
             <BtnContCompra link="/carrinho" texto="Adicionar ao carrinho"/>
             </div>
                 </div>
             
             
            <div>
             </div>
             </div>
                <DescricaoLivro/>
            </div>
         </div>
     </div>
 )
}