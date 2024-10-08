// import React from 'react'
// import Card
import axios from "axios";
import { useEffect, useState } from "react";
import Cardcomponent from "../components/Cardcomponent";
import './/Homecomponent.css'
export default function Homecomponent() {
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
  return (
    <>
      
      <Cardcomponent product={product} />
    </>
  );
}
