import React, { useState, useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import { CartContext } from '../context/Cartcontext';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import axios from 'axios';

function len(d) {
  const words = d.split("");
  if (words.length > 30) {
    return words.slice(0, 30).join("") + "...";
  }
  return d;
}

const ProductDetail = ({ products = [], userId }) => {
  const { id } = useParams();
  const { cart, addToCart } = useContext(CartContext);
  const { favorites, addToFavorites } = useContext(FavoritesContext); 
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
  
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center mt-5">Product not found</h2>;
  }

  const { title, description, image, category, price } = product;
  const isProductInCart = cart.some((cartItem) => cartItem.id === product.id);
  const isProductInFav = favorites.some((favItem) => favItem.id === product.id); 

  const handleAddToCart = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/cart', {
        userId: userId || localStorage.getItem('id'),
        productId: product.id,
        quantity,
      });

      console.log('Request payload:', { userId: userId || localStorage.getItem('id'), productId: product.id, quantity });
      console.log('Response data:', response.data);

      if (response.data.success) {
        setMessage('Item added to cart successfully!');
        addToCart(product);
      } else {
        setMessage('Error adding item to cart.');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      setMessage('Error adding item to cart.');
    }
  };

  const handleAddToWishlist = async () => { 
    try {
      const response = await axios.post('http://localhost:8000/api/wishlist', {
        userId: userId || localStorage.getItem('id'),
        productId: product.id,
      });

      console.log('Request payload:', { userId: userId || localStorage.getItem('id'), productId: product.id });
      console.log('Response data:', response.data);

      if (response.data.success) {
        setMessage('Item added to wishlist successfully!');
        addToFavorites(product);
      } else {
        setMessage('Error adding item to wishlist.');
      }
    } catch (error) {
      console.error('Error adding to wishlist:', error);
      setMessage('Error adding item to wishlist.');
    }
  };

  const similarProducts = products.filter(
    (prod) => prod.category === category && prod.id !== product.id
  );

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
            <h2 className="mt-3 text-4xl font-semibold">{title}</h2>
            <div>
              <button
                onClick={handleAddToWishlist}
                className={`mt-4 bg-red-600 text-white py-2 px-6 rounded-lg shadow-lg
                 hover:bg-red-400 transition duration-300 
                 ${isProductInFav ? 'cursor-not-allowed opacity-50' : ''}`}
                disabled={isProductInFav}
              >
                <i className="fa-regular fa-heart"></i>
                {isProductInFav ? 'Added to Favourite' : 'Add to Favourite'}
              </button>
            </div>
            <p className="mt-4 text-gray-800">{description}</p>
            <h4 className="mt-6 text-2xl font-bold text-blue-600">
              Price: <i className="fa fa-inr" aria-hidden="true"> {price * 50}</i>
            </h4>
            <button
              onClick={handleAddToCart}
              className={`mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg
               hover:bg-blue-700 transition duration-300 $(
                isProductInCart ? 'cursor-not-allowed opacity-50' : ''
              }`}
              disabled={isProductInCart}
            >
              {isProductInCart ? 'Already in Cart' : 'Add to Cart'}
            </button>
            <button className="mt-4 bg-blue-600 ml-10 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              Buy Now
            </button>
            {message && <p className="text-green-600 mt-3">{message}</p>}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-6xl text-center font-serif mt-14 mb-6">SIMILAR PRODUCTS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-orange-200">
          {similarProducts.slice(0, 8).map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <div className="flex flex-col items-center bg-white p-4 shadow-xl rounded-lg
               transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-40 h-40 mb-4 object-contain"
                />

                <h3 className="text-lg font-bold mb-2">{len(product.title)}</h3>
                <p className="text-gray-600 text-xl font-semibold mb-4">
                  <i className="fa fa-inr" aria-hidden="true"> {product.price * 50}</i>
                </p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-3"></div>
    </>
  );
};

export default ProductDetail;

// import React, { useState, useEffect, useContext } from 'react';
// import { FavoritesContext } from '../context/FavoritesContext';
// import { CartContext } from '../context/Cartcontext';
// import { useNavigate, useParams, Link } from 'react-router-dom';
// import axios from 'axios';

// function len(d) {
//   if (!d) return '';
//   const words = d.split("");
//   if (words.length > 30) {
//     return words.slice(0, 30).join("") + "...";
//   }
//   return d;
// }

// const ProductDetail = ({ userId }) => {
//   const { id } = useParams();
//   const { cart, addToCart } = useContext(CartContext);
//   const { favorites, addToFavorites } = useContext(FavoritesContext); 
//   const [product, setProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [message, setMessage] = useState('');
//   const [similarProducts, setSimilarProducts] = useState([]);
//   const navigate = useNavigate();

//   // Fetch the product details from your API
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {

//         const response = await axios.get(`http://localhost:8000/product/${id}`);
//         const productData = response.data;
//         setProduct(productData);
        
//         // Fetch similar products based on category (assuming the response has 'category')
//         // const similarResponse = await axios.get(`http://localhost:8000/products/${productData.category}`);
//         // setSimilarProducts(similarResponse.data.filter(prod => prod.id !== productData.id));

//       } catch (error) {

//         console.error('Error fetching product details:', error);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (!product) {
//     return <h2 className="text-center mt-5">Loading product...</h2>;
//   }

//   const { title, description, image, category, price } = product;
//   const isProductInCart = cart.some((cartItem) => cartItem.id === product.id);
//   const isProductInFav = favorites.some((favItem) => favItem.id === product.id); 

//   const handleAddToCart = async () => {
//     try {
//       const response = await axios.post('http://localhost:8000/api/cart', {
//         userId: userId || localStorage.getItem('id'),
//         productId: product.id,
//         quantity,
//       });
//       if (response.data.success) {
//         setMessage('Item added to cart successfully!');
//         addToCart(product);
//       } else {
//         setMessage('Error adding item to cart.');
//       }
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       setMessage('Error adding item to cart.');
//     }
//   };
//   const handleAddToWishlist = async () => { 
//     try {
//       const response = await axios.post('http://localhost:8000/api/wishlist',{
//         userId: userId || localStorage.getItem('id'),
//         productId: product.id,
//       });

//       if (response.data.success) {
//         setMessage('Item added to wishlist successfully!');
//         addToFavorites(product);
//       } else {
//         setMessage('Error adding item to wishlist.');
//       }
//     } catch (error) {
//       console.error('Error adding to wishlist:', error);
//       setMessage('Error adding item to wishlist.');
//     }
//   };

//   return (
//     <>
//       <div className="container mx-auto p-4 mt-40">
//         <div className="flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2">
//             <img
//               src={image || 'https://via.placeholder.com/400'}
//               className="img-fluid rounded-lg shadow-lg w-96 h-96"
//               alt={title}
//             />
//           </div>
//           <div className="md:w-1/2 md:pl-8">
//             <h2 className="mt-3 text-4xl font-semibold">{title}</h2>
//             <div>
//               <button
//                 onClick={handleAddToWishlist}
//                 className={`mt-4 bg-red-600 text-white py-2 px-6 rounded-lg shadow-lg
//                  hover:bg-red-400 transition duration-300 
//                  ${isProductInFav ? 'cursor-not-allowed opacity-50' : ''}`}
//                 disabled={isProductInFav}
//               >
//                 <i className="fa-regular fa-heart"></i>
//                 {isProductInFav ? 'Added to Favourite' : 'Add to Favourite'}
//               </button>
//             </div>
//             <p className="mt-4 text-gray-800">{description}</p>
//             <h4 className="mt-6 text-2xl font-bold text-blue-600">
//               Price: <i className="fa fa-inr" aria-hidden="true"> {price * 50}</i>
//             </h4>
//             <button
//               onClick={handleAddToCart}
//               className={`mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg
//                hover:bg-blue-700 transition duration-300 ${isProductInCart ? 'cursor-not-allowed opacity-50' : ''}`}
//               disabled={isProductInCart}
//             >
//               {isProductInCart ? 'Already in Cart' : 'Add to Cart'}
//             </button>
//             <button className="mt-4 bg-blue-600 ml-10 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
//               Buy Now
//             </button>
//             {message && <p className="text-green-600 mt-3">{message}</p>}
//           </div>
//         </div>
//       </div>

//       {/* Similar Products Section */}
//       <div>
//         <h1 className="text-6xl text-center font-serif mt-14 mb-6">SIMILAR PRODUCTS</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-orange-200">
//           {similarProducts.slice(0, 8).map((similarProduct) => (
//             <Link to={`/product/${similarProduct.id}`} key={similarProduct.id}>
//               <div className="flex flex-col items-center bg-white p-4 shadow-xl rounded-lg
//                transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-3">
//                 <img
//                   src={similarProduct.image}
//                   alt={similarProduct.title}
//                   className="w-40 h-40 mb-4 object-contain"
//                 />
//                 <h3 className="text-lg font-bold mb-2">{len(similarProduct.title)}</h3>
//                 <p className="text-gray-600 text-xl font-semibold mb-4">
//                   <i className="fa fa-inr" aria-hidden="true"> {similarProduct.price * 50}</i>
//                 </p>
//                 <button className="bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-300">
//                   Add to Cart
//                 </button>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductDetail;

