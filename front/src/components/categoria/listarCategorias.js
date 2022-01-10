import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import EditarCategoria from "./editarCategoria"
const ListarCategorias = () => {
const [categorias, setCategorias]= useState([]);

const ApagarCategoria = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/admCategorias/excluir/${id}`,
        {
          method: "DELETE",
        }
      );
      // função para apagar visualmente a categoria
      setCategorias(categorias.filter((categoria) => categoria.id !== id));
      //console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };



  const getCategorias = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/admCategorias/consulta"
      );
      const jsonData = await response.json();
     setCategorias(jsonData)
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getCategorias();
  }, []);

 // console.log(categorias);

  return (
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome(Descrição)</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        {categorias.map((categoria, index) => (
          <tr key={categoria.id}>
            <td>{categoria.id}</td>
            <td>{categoria.descricao}</td>
            <td>
            <button
              className="btn btn-danger btn-admProduto"
                onClick={() => ApagarCategoria(categoria.id)}
              >
                Excluir
              </button>
              <EditarCategoria categoria={categoria}/>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ListarCategorias;