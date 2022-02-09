import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
export default function CompRelatorioEstoque(){

    const [estoque, setEstoque]= useState([]);
    const getEstoque= async () => {
        try {
          const response = await fetch("http://localhost:5000/AdmVendas/relatorioEstoque0", {
            method: "GET",
          });
        const jsonData = await response.json();
        //console.log(jsonData)
        setEstoque(jsonData)
       
        } catch (err) {
          console.log(err.message);
        }
      };
      useEffect(() => {
        getEstoque();
      }, []);
      console.log(estoque)
    return(
        <div>
            <h1>Relatório de Estoque zerado</h1>
                <div>
              <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome(Descrição)</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {estoque.map((livro) => (
            <tr key={livro.id}>
              <td>{livro.id}</td>
              <td>{livro.descricao}</td>
              <td>{livro.preco}</td>
            </tr>
          ))}
        </tbody>
      </Table>
        </div>
        </div>
        
    )
}