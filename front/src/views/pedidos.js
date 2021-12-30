import '../style/clientScreens.css';
import PedidoLine from '../components/pedidoLine';

export default function Pedidos(){
    return(
        <div className="clientDashboard">
        <h1>Seus Pedidos</h1>


            <div className="contentDivEdit">
                <div className="pedidoInfoTitles">
                    <label>ID</label>
                    <label>Produtos</label>
                    <label>Total</label>
                    <label>Status</label>
                </div>
            </div>

            <div className="PedidosList">
                <PedidoLine datahora="20 Outubro 2021 14:21:03" id="123" produto="Duna, Messsias de Duna, Herege de duna, livro 2" valor="R$ 100,00" status="Entregue" />
                <PedidoLine datahora="20 Outubro 2021 14:21:03" id="123" produto="Duna, Messsias de Duna, Herege de duna, livro 2" valor="R$ 100,00" status="Entregue" />
                <PedidoLine datahora="20 Outubro 2021 14:21:03" id="123" produto="Duna, Messsias de Duna, Herege de duna, livro 2" valor="R$ 100,00" status="Entregue" />
                <PedidoLine datahora="20 Outubro 2021 14:21:03" id="123" produto="Duna, Messsias de Duna, Herege de duna, livro 2" valor="R$ 100,00" status="Entregue" />
            </div>

        </div>

        
        
    )
}