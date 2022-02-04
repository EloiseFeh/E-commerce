import React, { useEffect, useState } from "react";
import { Button,Form, Table } from "react-bootstrap";
export default function ListarClientes(){
    const [clientes, setClientes]= useState([]);

    const getClientes = async () => {
        try {
          const response = await fetch("http://localhost:5000/admVendas/listaClientes", {
            method: "GET",
            headers: { token: localStorage.token },
          });
        const jsonData = await response.json();
        //console.log(jsonData)
        setClientes(jsonData)
        
        } catch (err) {
          console.log(err.message);
        }
      };
      useEffect(() => {
        getClientes();
        
      }, []);
      console.log(clientes)
   return(
       <div>
           <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome(Descrição)</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((usuario) => (
            <tr key={usuario.id}>
                <td>{usuario.id}</td>
              <td>{usuario.nome}</td>
            </tr>
          ))}
        </tbody>
      </Table>
       </div>
   )
    
}