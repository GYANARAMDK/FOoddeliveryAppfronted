// import React from 'react'

export default function cardcomponent({ product }) {
  return (
    <>
      <div>
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <p>{product.description}</p>
        <img src={product.imageUrl} alt={product.name} />
      </div>
    </>
  );
}
