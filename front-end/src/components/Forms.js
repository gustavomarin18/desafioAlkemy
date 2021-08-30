import React, {Fragment, useState} from 'react'

const Forms = () => {


    const [data, setDatos] = useState ({
        concept : '',
        amount: ''
     
     



    })
    const handleInputChange = (e) =>{
        
        setDatos ({
            ...data,
            [e.target.name] : e.target.value
         

        })
        {console.log ("a verrrr")
        console.log (data.concept)}
    }
    const enviarDatos = (e)=>{
        e.preventDefault();
     

     
        
        var url = 'http://localhost:3000/api/movements';
var data = {concept: "gustavo"
};

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));



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
                onChange = {handleInputChange}
                
                ></input>
                </div>
                <div className= "col-md-3">
                <button className= "btn btn-primary" type= "submit">Enviar</button>
                </div>
               </form>
               <h3>{data.concept} - {data.amount}</h3>






            </Fragment>
    )
}


export default Forms;