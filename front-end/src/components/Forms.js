
import React, { useState, } from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


function Forms() {
  
  const [inputs, setInputs] = useState({});

  


  //Post Method
  const apiPost = async () => {
    await fetch("http://localhost:3000/api/movements/", {
      method: "POST",
      body: JSON.stringify({
        concept: inputs.concept,
        amount: inputs.amount,
        date: inputs.date,
        type: inputs.type,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  const handleChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,

      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    apiPost();
    console.log(inputs);
  };

  //   useEffect(() => {
  //     apiGet();
  //   }, []);

  return (
    <div>
     <h1>Ingrese su operación</h1>
      <div>
        <form onSubmit={handleSubmit}>
        <div class="form-floating mb-3">
          <input 
          class="form-control" id="floatingInput"
            type="text"
            name="concept"
            placeholder="concepto"
            onChange={handleChange}
          />{" "}
            <label for="floatingInput">Concepto</label>
          </div>
          <br />
          <div class="form-floating mb-3">
          <input
          class="form-control" id="floatingInput"
            type="number"
            name="amount"
            placeholder="amount"
            onChange={handleChange}
          />
          <label for="floatingInput">Monto</label>
          </div>
          <br />
          <div class="form-floating mb-3">
          <input
          class="form-control" id="floatingInput"
            type="date"
            name="date"
            placeholder="date"
            onChange={handleChange}
          />
          <label for="floatingInput">fecha</label>
          </div>
          <br /> 
          
         
       
        <Label for="exampleSelect">Tipo de operación</Label>
        <Input class="form-control" type="select"  name="type" id="floatingInput" onChange={handleChange}>
          <option>ingreso</option>
          <option>egreso</option>
       
        </Input>
        <br /> 
 


  
          





          <input class="btn btn-primary" type="submit" value="enviar" onChange={handleChange} />
        </form>
      </div>
    </div>
  );
}

export default Forms;


