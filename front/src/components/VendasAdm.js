import React, { useEffect, useState } from "react";
import { Button,Form, Table } from "react-bootstrap";
export default function VendasAdm(){
    const [vendas, setVendas]= useState([]);
    const [inputs, setInputs] = useState({
        id_usuario: ""
      });
    
      const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
      }
      
      const {id_usuario} = inputs;
      const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = {id_usuario};
            const response = await fetch("http://localhost:5000/admVendas/cliente", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body),
            }
            );
            const jsonData = await response.json();
            console.log(jsonData)
            setVendas(jsonData)
            console.log(response);

          } catch (err) {
            console.error(err.message)
            
        }
    }

    //exclusão de uma compra

    const ApagarVenda = async (id) => {
        try {
          const response = await fetch(
            `http://localhost:5000/admVendas/cliente/excluirVenda/${id}`,
            {
              method: "DELETE",
            }
          );
          // função para apagar visualmente a categoria
          setVendas(vendas.filter((venda) => venda.id !== id));
          //console.log(response);
        } catch (err) {
          console.error(err.message);
        }
      };
    

    return(
     <div>
         <form onSubmit={onSubmitForm}>
         <Form.Floating className="mb-3 mt-3">
              <Form.Control
                id="id_usuario"
                name="id_usuario"
                type="number"
                placeholder="Id do cliente"
               value={id_usuario}
                onChange={(e) => onChange(e)}
              />
              <label htmlFor="cadnome">Id do cliente</label>
            </Form.Floating>
            <button className="modal-submit-button btn-submit">
              Consultar
            </button>
         </form>
         <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome(Descrição)</th>
            <th>Preço total </th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {vendas.map((venda) => (
            <tr key={venda.id}>
              <td>{venda.id}</td>
              <td>{venda.livros}</td>
              <td>{venda.total}</td>
            
              <button
              className="btn btn-danger btn-admProduto"
                onClick={() => ApagarVenda(venda.id)}
              >
                Excluir
              </button>
            </tr>
          ))}
        </tbody>
      </Table>
     </div>
    )
}