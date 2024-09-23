

import React, { useState, useEffect } from 'react';
import logo from '../assests/happysell.png';
import logo2 from '../assests/order.png';
import logo3 from '../assests/promotion.png';
import logo4 from '../assests/savemoney.png';
import logo5 from '../assests/support.png';
import logo6 from '../assests/shipping.png';
import { Link } from 'react-router-dom'; 


function len(d){

  const words = d.split("");
  if(words.length>30){
  return words.slice(0,30).join("")+"...";
}

return d;
  }

const Subcategories = () => {

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
      {/* Subcategories Section */}
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

      {/* Carousel Section */}
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1503340588524-222d094c7066?w=800&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFkdmVydGlzZW1lbnQlMjBjbG90aGVzfGVufDB8fDB8fHww"
              className="d-block w-full h-96 object-cover"
              alt="Ad 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGFkdmVydGlzZW1lbnQlMjBjbG90aGVzfGVufDB8fDB8fHww"
              className="d-block w-full h-96 object-cover"
              alt="Ad 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGFkdmVydGlzZW1lbnQlMjBjbG90aGVzfGVufDB8fDB8fHww"
              className="d-block w-full h-96 object-cover"
              alt="Ad 3"
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Boxes Section */}
      <div className='flex flex-wrap justify-center gap-6 p-24'>
<div className='box w-48 h-48 flex flex-col justify-center items-center bg-blue-200 shadow-lg hover:animate-shake transition-transform duration-300 rounded-md'>
<img src={logo} alt='logo1' className='w-32 h-32 mb-2' />
<p className='text-center text-blue-800'><button className='bg-blue-400 text-white py-1 px-3 rounded-md hover:bg-blue-500'>Happy Sell</button></p>
</div>
<div className='box w-48 h-48 flex flex-col justify-center items-center bg-green-200 shadow-lg hover:animate-shake transition-transform duration-300 rounded-md'>
<img src={logo2} alt='logo2' className='w-32 h-32 mb-2' />
<p className='text-center text-green-800'><button className='bg-green-400 text-white py-1 px-3 rounded-md hover:bg-green-500'>Online Order</button></p>
</div>
<div className='box w-48 h-48 flex flex-col justify-center items-center bg-yellow-200 shadow-lg hover:animate-shake transition-transform duration-300 rounded-md'>
<img src={logo3} alt='logo3' className='w-32 h-32 mb-2' />
<p className='text-center text-yellow-800'><button className='bg-yellow-400 text-white py-1 px-3 rounded-md hover:bg-yellow-500'>Promotions</button></p>
</div>
<div className='box w-48 h-48 flex flex-col justify-center items-center bg-pink-200 shadow-lg hover:animate-shake transition-transform duration-300 rounded-md'>
<img src={logo4} alt='logo4' className='w-32 h-32 mb-2' />
<p className='text-center text-pink-500'><button className='bg-pink-300 text-white py-1 px-3 rounded-md hover:bg-pink-300'>Save Money</button></p>
</div>
<div className='box w-48 h-48 flex flex-col justify-center items-center bg-purple-200 shadow-lg hover:animate-shake transition-transform duration-300 rounded-md'>
<img src={logo5} alt='logo5' className='w-32 h-32 mb-2' />
<p className='text-center text-purple-800'><button className='bg-purple-400 text-white py-1 px-3 rounded-md hover:bg-purple-500'>F24/7 Support</button></p>
</div>
<div className='box w-48 h-48 flex flex-col justify-center items-center bg-teal-200 shadow-lg hover:animate-shake transition-transform duration-300 rounded-md'>
<img src={logo6} alt='logo6' className='w-32 h-32 mb-2' />
<p className='text-center text-teal-800'><button className='bg-teal-500 text-white py-1 px-3 rounded-md hover:bg-teal-300'>Free Shipping</button></p>
</div>
</div>

      {/* Featured Product Section */}
<div>
        <h1 className='text-6xl text-center font-serif mt-14 mb-6'>FEATURED PRODUCT</h1>
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

      {/* Men's and Women's Section */}
      <div className='menandwomen'>
        {/* Men's Section */}
        <div className='men flex justify-between items-center p-8'>
          <div className='men-text flex-1'>
            <h2 className='text-3xl font-bold'>Men's Collection</h2>
            <p className='mt-4'>Discover the latest styles in men's fashion. From casual wear to formal outfits.</p>
          </div>
          <div className='men-image flex-1'>
            <img src='https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shampoo.jpg' alt='Men Fashion' className='w-full h-auto object-cover rounded-md' />
          </div>
        </div>

        {/* Women's Section */}
        <div className='women flex justify-between items-center p-8'>
          <div className='women-image flex-1'>
            <img src='https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shirt-1.jpg' alt='Women Fashion' className='w-full h-auto object-cover rounded-md' />
          </div>
          <div className='women-text flex-1'>
            <h2 className='text-3xl font-bold'>Women's Collection</h2>
            <p className='mt-4'>Explore a wide range of clothing and accessories tailored for women.</p>
          </div>
        </div>
      </div>


      {/* hot offers */}

      
      <div>
        <h1 className='text-6xl text-center font-bold mt-14 mb-6'>HOT OFFERS</h1>
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
      <div className='mt-7'></div>
    </>
  );
};

export default Subcategories;
