// import React from 'react'
import Cardcomponent from './Cardcomponent'
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function Singleproduct() {
  const [product, setProduct] = useState(null);
  const [loading,setLoading]=useState(true)
  const [error,seterror]=useState()
  const { productid } = useParams();
  useEffect(() => {
   
    const fetchproduct = async () => {
     
      try {
        const responce = await axios.get(
          `https://webproject-1-707h.onrender.com/api/product/${productid}`
        );
         
        if (responce.data) {
          setProduct(responce.data);
          
        }
      } catch (error) {
        console.log(error);
        seterror(error)
      }finally{
        setLoading(false)
      }
    };
    if (productid) {
      fetchproduct();
    }
  }, [productid]);
    if(loading){
      return <div>
        loading....
      </div>
    }
    if(!product)
    {
      return <div>
        no product found
      </div>
    }
  console.log({product})

  return (
    <div className=' rounded flex flex-col m-3 bg-yellow-200 p-2'>
      <h1>product details</h1>
      <div>
        <h2>{product.product.name}</h2>
        <h2>{product.product.description}</h2>
      </div>
      <div className='flex gap-2'>
        
      <button className='bg-red-400 rounded p-2'> add to cart</button>
      <button className='bg-red-400 rounded p-2'>order</button>
      </div>
      </div>
  );
 }
//category
// : 
// "Pizza"
// createdAt
// : 
// "2024-10-11T14:09:31.163Z"
// description
// : 
// "Loaded with fresh vegetables, olives, and mozzarella cheese."
// imageUrl
// : 
// "http://example.com/images/vegetarian.jpg"
// name
// : 
// "Vegetarian Pizza"
// price
// : 
// 11
// stock
// : 
// 90
// updatedAt
// : 
// "2024-10-11T14:09:31.163Z"
// _id
// : 
// "66fe7
