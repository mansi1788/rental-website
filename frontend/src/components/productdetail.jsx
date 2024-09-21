// import React from 'react'; 
// import { useParams } from 'react-router-dom';

// // Simulate fetching product details by ID
// const fetchProductById = (id, products) => {
//   return products.find((product) => product.id === parseInt(id));
// };

// const Productdetail = ({ products = [] }) => {
//   const { id } = useParams();  // Get product id from URL params

//   // If no products are available, show a message
//   if (!products.length) {
//     return <h2 className="text-center mt-5">No products available</h2>;
//   }

//   // Fetch product based on ID
//   const product = fetchProductById(id, products);

//   // If no product is found (e.g., invalid ID), show an error
//   if (!product) {
//     return <h2 className="text-center mt-5">Product not found</h2>;
//   }

//   // Destructure product details
//   const { title, description, image, category, price } = product;

//   return (
//     <div className="container mt-5">
//       <div className="row mt-28">
//         <div className="col-md-6">
//           <img 
//             src={image || 'https://via.placeholder.com/400'} 
//             className="img-fluid rounded" 
//             alt={title} 
//             style={{ borderRadius: '10px' }} 
//           />
//         </div>
//         <div className="col-md-6">
//           <h2 className="mt-3 text-3xl">{title}</h2>
//           <p className="text-muted">Category: {category}</p>
//           <p>{description}</p>
//           <h4 className="mt-3">Price: ${price}</h4>
//           <button className="btn btn-primary mt-3">Add to Cart</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Productdetail;






// //   {/* Featured Product Section */}
// //   <div>
// //   <h1 className='text-6xl text-center font-bold mt-14 mb-6'>FEATURED PRODUCT</h1>
// //   <h4 className='text-center text-2xl mb-10 text-gray-600'>Summer Collection New Modern Design</h4>

// //   <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-orange-200'>
// //     {products.slice(0, 8).map((product) => (
// //       <Link to={`/product/${product.id}`} key={product.id}>
// //         <div className='flex flex-col items-center bg-white p-4 shadow-xl rounded-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-3'>
// //           <img
// //             src={product.image}
// //             alt={product.title}
// //             className='w-40 h-40 mb-4 object-contain'
// //           />
// //           <h3 className='text-lg font-bold mb-2'>{product.title}</h3>
// //           <p className='text-gray-600 text-xl font-semibold mb-4'>${product.price}</p>
// //           <button className='bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-300'>
// //             Add to Cart
// //           </button>
// //         </div>
// //       </Link>
// //     ))}
// //   </div>
// // </div>
import React from 'react'; 
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'; 


const fetchProductById = (id, products) => {
  return products.find((product) => product.id === parseInt(id));
};

const ProductDetail = ({ products = [] }) => {
  const { id } = useParams();

  if (!products.length) {
    return <h2 className="text-center mt-5">No products available</h2>;
  }

  const product = fetchProductById(id, products);

  if (!product) {
    return <h2 className="text-center mt-5">Product not found</h2>;
  }

  const { title, description, image, category, price } = product;

  return (
    <>
    <div className="container mx-auto p-4 mt-40">

      <div className="flex flex-col md:flex-row items-center">
            
           
        <div className="md:w-1/2">
          <img 
            src={image || 'https://via.placeholder.com/400'} 
            className="img-fluid rounded-lg shadow-lg w-96 h-96" 
            alt={title} 
          />

        </div>
        <div className="md:w-1/2 md:pl-8">

          <h2 className="mt-3 text-4xl font-semibold">{title} </h2>
          
          <p className="text-gray-600 text-lg mt-1">Category: <span className="font-bold">{category}</span></p>
          <i className="fa-regular fa-heart text-3xl text-red-600"></i>
          <p className="mt-4 text-gray-800">{description}</p>
          <h4 className="mt-6 text-2xl font-bold text-blue-600">Price: ${price}</h4>
          <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Add to Cart
          </button>
          <button className="mt-4 bg-blue-600 ml-10 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
           Buy Now
          </button>
        </div>
      </div>
      <div className="flex">
      <div className='w-12 h-12 flex border-red-700'></div>
      <div className='w-12 h-12 flex border-red-700'></div>

      <div className='w-12 h-12 flex border-red-700'></div>

      <div className='w-12 h-12 flex border-red-700'></div>
      </div>


    </div>

{/* similar products */}

    <div>
        <h1 className='text-4xl text-center font-serif mt-14 mb-6'>SIMILAR PRODUCT</h1>
        <h4 className='text-center text-lg mb-10 text-gray-600'>Summer Collection New Modern Design</h4>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-orange-200'>
          {products.slice(0, 8).map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <div className='flex flex-col items-center bg-white p-4 shadow-xl rounded-lg
               transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-3
                border-black border-solid'>
                                   

                <img
                  src={product.image}
                  alt={product.title}
                  className='w-24 h-24 mb-4 object-contain'
                />
                <h3 className='text-lg font-bold mb-2'>{product.title}</h3>
                <p className='text-gray-600 text-xl font-semibold mb-4'>${product.price}</p>
                <button className='bg-blue-600 text-white py-2 px-4 rounded-lg 
                text-sm font-semibold hover:bg-blue-700 transition-colors duration-300'>
                  Add to Cart
                </button>
              </div>      
            </Link>
          ))}
        </div>
      </div>
      </>
  );
};

export default ProductDetail;
