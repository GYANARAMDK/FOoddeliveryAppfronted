// import React from 'react'
// import Card
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cardcomponent from "../components/Cardcomponent";
import './/Homecomponent.css'

export default function Homecomponent() {
  const navigate=useNavigate()
  
  const [product, setproduct] = useState([]);
  const [loaing, setloading] = useState(true);
  const [error, seterror] = useState(null);
  
  useEffect(() => {
    const fetchproducts = async () => {
      try {
        const response = await axios.get(
          "https://webproject-1-707h.onrender.com/api/products"
        );
       
        setproduct(response.data);
       
      } catch (error) {
        seterror(error);
        console.log(error);
       
      } finally {
        setloading(false);
      }
    };
    fetchproducts();
  }, []);

  
  const handlesignleproduct=(e)=>{
    e.stopPropagation();
    const productid=e.currentTarget.getAttribute('data-id')
    
  navigate(`/product/${productid}`);
 
   

  }
  
  return (
    <>
       <div>
        <h1>Product List</h1>
        <ul className="product-grid" >
          {product.map((product) => (
            <li key={product._id} className="product-item"onClick={handlesignleproduct} data-id={product._id} >
               <Cardcomponent product={product} />

           </li>
          ))}
        </ul>
      </div>

    </>
  );
}
