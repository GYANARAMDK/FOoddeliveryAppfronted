// import React from 'react'

export default function cardcomponent({ product }) {
  return (
    <>
      <div>
        <h1>Product List</h1>
        <ul className="product-grid">
          {product.map((product) => (
            <li key={product._id} className="product-item">
              <h2>{product.name}</h2>
              <p>Price: ${product.price}</p>
              <p>{product.description}</p>
              <img src={product.imageUrl} alt={product.name} />
              <div>
                <button className="bg-slate-500 p-2  rounded">
                  add to cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="  flex ">
        <div className=" bg-blue-500 m-3 p-2 flex flex-col w-[20vw] ">
          <div >
            <img src="another.png" alt="" className="size-cover" />
          </div>
          <div className="flex justify-evenly items-center mt-2  ">
            <div className=" bg-gray-400 ">
              <p className="px-2  ">  sharp counmean    </p>
            </div>
            <div>
              <button className="bg-slate-500 p-2  rounded">add to cart</button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
