// AddToCart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/Cartcontext';

const Addtocart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  if (cart.length === 0) {
    return <h2 className="text-center text-2xl mt-36">Your cart is empty</h2>;
  }

  return (
    <div className="container mx-auto p-4 mt-40">
      <h2 className="text-4xl font-semibold mb-4">Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg 
        shadow-lg mb-4">
          <div className="flex items-center">
            <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-lg" />
            <div className="ml-4">
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="text-gray-600">Price: ${item.price}</p>
            </div>
          </div>
          
          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
          >
            Remove from Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Addtocart;
