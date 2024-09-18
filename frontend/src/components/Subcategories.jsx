import React from 'react'
import logo from '../assests/happysell.png';
import logo2 from '../assests/order.png';
import logo3 from '../assests/promotion.png';
import logo4 from '../assests/savemoney.png';
import logo5 from '../assests/support.png';
import logo6 from '../assests/shipping.png';



const Subcategories = () => {
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


      {/* FEATURED PRODUCT */}

      <h1 className='text-6xl justify-center flex mt-14'>FEATURED PRODUCT</h1>
      <h4 className='justify-center flex text-2x'>Summer Collection New Modern Design</h4>


    </>
  )
}

export default Subcategories;
