import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext'; // Import FavoritesContext
import { CartContext } from '../context/Cartcontext';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductDetail = ({ products = [] }) => {
  const { id } = useParams();
  const { cart, addToCart } = useContext(CartContext);
  const { favorites, addToFavorites } = useContext(FavoritesContext); // Use favorites context
  const navigate = useNavigate();

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center mt-5">Product not found</h2>;
  }

  const { title, description, image, category, price } = product;
  const isProductInCart = cart.some((cartItem) => cartItem.id === product.id);
  const isProductInFav = favorites.some((favItem) => favItem.id === product.id); // Check against favorites

  const handleAddToCart = () => {
    if (!isProductInCart) {
      addToCart(product);
      navigate('/cart');
    }
  };

  return (
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
              onClick={() => addToFavorites(product)} // Add to favorites
              className={`mt-4 bg-red-600 text-white py-2 px-6 rounded-lg shadow-lg
               hover:bg-red-400 transition duration-300 
               ${isProductInCart ? 'cursor-not-allowed opacity-50' : ''}`}
              disabled={isProductInFav}
            >
            
              <i className="fa-regular fa-heart"></i> 
            
              {isProductInFav ? 'Added to Favourite' : 'Add to Favourite'}
            </button>
          </div>

          <p className="text-gray-600 text-lg mt-1">
            Category: <span className="font-bold">{category}</span>
          </p>
          <p className="mt-4 text-gray-800">{description}</p>
          <h4 className="mt-6 text-2xl font-bold text-blue-600">Price: ${price}</h4>

          <button
            onClick={handleAddToCart}
            className={`mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg
             hover:bg-blue-700 transition duration-300 ${
              isProductInCart ? 'cursor-not-allowed opacity-50' : ''
            }`}
            disabled={isProductInCart}
          >
            {isProductInCart ? 'Already in Cart' : 'Add to Cart'}
          </button>

          <button className="mt-4 bg-blue-600 ml-10 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
