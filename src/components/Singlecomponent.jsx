// import React from 'react'

import { useEffect, useState } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom";
export default function Singleproduct() {
  const [product,setproduct]=useState(null);
  const {productid} =useParams();
  useEffect(()=>{
      const fetchproduct = async ()=>{
            console.log(productid);
          try {
            const responce = await axios.get(`https://webproject-1-707h.onrender.com/api/product/${productid}`)
     
            if(responce){
             setproduct(responce.data)
             console.log(product)
            }
              
      
           } catch (error) {
            console.log(error)
            console.log('hello')
          }
        }
      fetchproduct();
  },[productid,product])
  return (
    <div>
       <h1>project details we get</h1>
       <h1>p</h1>
    </div>
  )
}
