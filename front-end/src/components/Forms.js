import React, {Fragment, useState} from 'react'

const Forms = () => {

    const [data, setDatos] = useState ({
        concept: "",
        amount: "",



    })
    const handleInputChange = (e) =>{

       
        setDatos ({
            ...data,
            [e.target.name] : e.target.value


        })

    }
    const enviarDatos = (e)=>{
        e.preventDefault();
        console.log (data.concept + " " + data.amount)



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