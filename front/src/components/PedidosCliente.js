import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
export default function PedidoCliente(){
    const [compras, setCompras]= useState([]);
    const getCompras = async () => {
        try {
          const response = await fetch("http://localhost:5000/clienteCompras", {
            method: "GET",
            headers: { token: localStorage.token },
          });
        const jsonData = await response.json();
        //console.log(jsonData)
        setCompras(jsonData)
        console.log(compras)
        } catch (err) {
          console.log(err.message);
        }
      };
      useEffect(() => {
        getCompras();
      }, []);
    return(
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome(Descrição)</th>
            <th>Preço total </th>
          </tr>
        </thead>
        <tbody>
          {compras.map((venda) => (
            <tr key={venda.id}>
              <td>{venda.id}</td>
              <td>{venda.livros}</td>
              <td>{venda.total}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
}