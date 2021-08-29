import React, {useState,useEffect} from 'react'
import { Home } from '../Home'


import "./Container.css"

export const Container = () => {
    const [item, setItem] = useState([])


        useEffect ( ()=> {
            data()
        }, [])

      const data = async () => {
          await fetch('http://localhost:3000/api/movements/')
            .then(response => response.json())
            .then(receivedData => setItem(receivedData.data))
         

           
      };
      

    
    return (
        <div>
           <Home item={item}/>          
        </div>
    )
}


