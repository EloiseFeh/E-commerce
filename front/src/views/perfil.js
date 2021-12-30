import '../style/clientScreens.css';

export default function Perfil(){
    return(
        <div className="clientDashboard">
            <div style={{display:'flex', alignItems: 'center'}}>
            <h1>Perfil</h1>
            <button className="logout" style={{marginLeft:'3%'}}>Logout</button>
            </div>

            <div className="contentDivEdit">

                <div className="EditOptions">

                    <div className="EditInput">
                        <h4>Nome</h4>
                        <input></input>
                    </div>

                    <button className="ButtonEditar">Editar</button>
                </div>

                <div className="EditOptions">

                    <div className="EditInput">
                        <h4>Telefone</h4>
                        <input></input>
                    </div>

                    <button className="ButtonEditar">Editar</button>
                </div>

                <div className="EditOptions">

                    <div className="EditInput">
                        <h4>E-mail</h4>
                        <input></input>
                    </div>

                    <button className="ButtonEditar">Editar</button>
                </div>

                <div className="EditOptions">

                    <div className="EditInput">
                        <h4>Senha</h4>
                        <input></input>
                    </div>

                    <button className="ButtonEditar">Editar</button>
                </div>

            </div>

            <button className="ButtonDeletaAcc">Deletar Conta</button>
        </div>

        
        
    )
}