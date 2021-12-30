import '../style/pedidoComponent.css';

export default function PedidoLine(props){
    return(
        <div className="pedido">
            <div className="pedidoDataHora">
                {props.datahora}
            </div>

            <div class="pedidoInfo">
                <span className="pedidoID">{props.id}</span>
                <span className="pedidoProd">{props.produto}</span>
                <span className="pedidoValor">{props.valor}</span>
                <span className="pedidoStatus">{props.status}</span>
            </div>

        </div>
    )
}