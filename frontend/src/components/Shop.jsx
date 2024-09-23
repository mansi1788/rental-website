import React from 'react'
import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 


function len(d){

  const words = d.split("");
  if(words.length>30){
  return words.slice(0,30).join("")+"...";
}
return d;
}

  const Shop = () => {

    const [products, setProducts] = useState([]);
  
    // Fetch data from the fake store API
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
  return (
   <>

<div className='subcategories p-4 rounded-md shadow-md bg-white mt-20'>
        <ul className='flex space-x-6 justify-center'>
          <li className='hover:bg-gray-200 px-4 py-2 rounded cursor-pointer'>Men's</li>
          <li className='hover:bg-gray-200 px-4 py-2 rounded cursor-pointer'>Women's</li>
          <li className='hover:bg-gray-200 px-4 py-2 rounded cursor-pointer'>Jewelry</li>
          <li className='hover:bg-gray-200 px-4 py-2 rounded cursor-pointer'>Perfume</li>
          <li className='hover:bg-gray-200 px-4 py-2 rounded cursor-pointer'>Blog</li>
          <li className='hover:bg-gray-200 px-4 py-2 rounded cursor-pointer'>Hot Offers</li>
        </ul>
      </div>


      <div>
        <h1 className='text-6xl text-center font-serif mt-14 mb-6'>PRODUCTS</h1>
        <h4 className='text-center text-2xl mb-10 text-gray-600'>Summer Collection New Modern Design</h4>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-orange-200'>
          {products.slice(0, 8).map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <div className='flex flex-col items-center bg-white p-4 shadow-xl rounded-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-3'>
                <img
                  src={product.image}
                  alt={product.title}
                  className='w-40 h-40 mb-4 object-contain'
                />
                <h3 className='text-lg font-bold mb-2'>{len(product.title)}</h3>
                <p className='text-gray-600 text-xl font-semibold mb-4'>${product.price}</p>
                <button className='bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-300'>
                  Add to Cart
                </button>
              </div>      
            </Link>
          ))}
        </div>
      </div>



     
       

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-orange-200'>
          {products.slice(0, 8).map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <div className='flex flex-col items-center bg-white p-4 shadow-xl rounded-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-3'>
                <img
                  src={product.image}
                  alt={product.title}
                  className='w-40 h-40 mb-4 object-contain'
                />
                <h3 className='text-lg font-bold mb-2'>{len(product.title)}</h3>
                <p className='text-gray-600 text-xl font-semibold mb-4'>${product.price}</p>
                <button className='bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-300'>
                  Add to Cart
                </button>
              </div>      
            </Link>
          ))}
        </div>
     


   </>
  )
}

export default Shop;