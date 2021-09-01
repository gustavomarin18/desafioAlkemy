/*import React, {Fragment, useState} from 'react'

const Forms = () => {


    const [data, setDatos] = useState ({
        concept : '',
        amount: '',
        date: '',
        type: ''
     
     



    })
    const handleInputChange = (e) =>{
        
        setDatos ({
            ...data,
            [e.target.name] : e.target.value
         

        })
    
    }
    const enviarDatos = (e)=>{
        e.preventDefault()
        console.log ("enviando datos")
        console.log (data.concept + "" + data.amount)
 
    
    }
    





        




    






    
    
    
    






    return (
     <Fragment>
            <h1>Formularios</h1>
            <form className= "row" onSubmit={enviarDatos}>
                <div className= "col-md-3">
                <input 
                placeholder = "ingrese concepto"
                className= "form-control"
                type= "text"
                name= "concept"
                onChange = {handleInputChange}
                
                >
             </input>
                </div>
                <div className= "col-md-3">
                <input
                placeholder= "ingrese monto"
                className= "form-control"
                type= "number"
                name= "amount"
                onChange = {handleInputChange}>

                </input>
                </div>
               
                <div className= "col-md-3">
                <input
                placeholder= "ingrese dia de la compra"
                className= "form-control"
                type= "date"
                name= "date"
                onChange = {handleInputChange}></input>
                </div>

                
               
                
                
                
                
                
                
                
                <div className= "col-md-3">
                <button className= "btn btn-primary" type= "submit">Enviar</button>
                </div>
               </form>
               <h3>{data.concept} - {data.amount} {data.date} {data.type}</h3>






            </Fragment>
    )
}


export default Forms;*/
import React, { useState, } from "react";

function Forms() {
  
  const [inputs, setInputs] = useState({});

  //Get Method


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
     
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="concept"
            placeholder="concepto"
            onChange={handleChange}
          />{" "}
          <br />
          <input
            type="number"
            name="amount"
            placeholder="amount"
            onChange={handleChange}
          />
          <br />
          <input
            type="date"
            name="date"
            placeholder="date"
            onChange={handleChange}
          />
          <br /> <input
            type="text"
            name="type"
            placeholder="operación"
            onChange={handleChange}
          /> <br /> 
          





          <input type="submit" value="enviar" onChange={handleChange} />
        </form>
      </div>
    </div>
  );
}

export default Forms;


