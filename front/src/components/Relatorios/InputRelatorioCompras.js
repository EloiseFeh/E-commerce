import React, { useEffect, useState } from "react";
import { Button,Form, Table } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css' 
export default function InputRelatorioCompras(){
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [vendas, setVendas]= useState([]);
    const [inputs, setInputs] = useState({
        data_inicio: new Date(),
        data_fim: new Date()
      });
      const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
      }
     
    //   const onSubmitForm = async (e) => {
    //     e.preventDefault();
    //     console.log("inicio"+startDate)
    //     console.log(endDate)
    // }

return(
    <div>
        <form>
            <Form.Floating className="mb-3 mt-3">
              <Form.Control
                id="id_usuario"
                name="id_usuario"
                type="date"
                placeholder="Id do cliente"
               value={data_inicio}
                onChange={(e) => onChange(e)}
              />
            
            </Form.Floating>
            {/* <Form.Floating className="mb-3 mt-3">
            <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="dd/MM/yyyy"
            />
            </Form.Floating>
            <Form.Floating className="mb-3 mt-3">
            <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            dateFormat="dd/MM/yyyy"
      />
            </Form.Floating>
            {/* <Form.Floating class
            {/* <Form.Floating className="mb-3 mt-3">
            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
            </Form.Floating> */} 
            <button className="modal-submit-button btn-submit">Cadastrar</button>
        </form>
    </div>
)
}