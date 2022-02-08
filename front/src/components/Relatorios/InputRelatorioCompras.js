import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";

export default function InputRelatorioCompras() {
  const [vendas, setVendas] = useState([]);
  const [inputs, setInputs] = useState({
    data_inicio: "",
    data_fim: "",
  });

  const { data_inicio, data_fim } = inputs;
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  console.log(inputs.data_inicio);
  console.log(inputs.data_fim);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { data_inicio, data_fim };
      const response = await fetch(
        "http://localhost:5000/admVendas/relatorioClientes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      const jsonData = await response.json();
      console.log(jsonData);
      setVendas(jsonData);
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  const PrintRelatorio = async (e) => {
    window.print();
  };

  return (
    <div className="mt-5">
      <form onSubmit={onSubmitForm}>
        <Form.Floating className="mb-3 mt-3">
          <Form.Control
            id="data_inicio"
            name="data_inicio"
            type="date"
            placeholder="Id do cliente"
            value={setInputs.data_inicio}
            onChange={(e) => onChange(e)}
          />
        </Form.Floating>
        <Form.Floating className="mb-3 mt-3">
          <Form.Control
            id="data_fim"
            name="data_fim"
            type="date"
            placeholder="Id do cliente"
            value={setInputs.data_fim}
            onChange={(e) => onChange(e)}
          />
        </Form.Floating>
        <button className="modal-submit-button btn-submit">
          Gerar Relatório
        </button>
      </form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID cliente</th>
            <th>Nome do Cliente</th>
            <th>Quantidade de Compras</th>
          </tr>
        </thead>
        <tbody>
          {vendas.map((venda) => (
            <tr key={venda.id_usuario}>
              <td>{venda.id_usuario}</td>
              <td>{venda.nome}</td>
              <td>{venda.vezes}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button
        className="modal-submit-button btn-submit"
        onClick={(e) => PrintRelatorio(e)}
      >
        Imprimir Relatório
      </button>
    </div>
  );
}
