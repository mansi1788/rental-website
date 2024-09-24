import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext'; // Import the context

const Favorites = () => {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext); // Use the context

  if (!favorites || favorites.length === 0) {
    return <h2 className="text-center text-2xl mt-36">NO FAVOURITES ITEMS ARE ADDED</h2>;
  }
  

  return (
    <div className="container mx-auto p-4 mt-40">
      <h2 className="text-4xl font-semibold mb-4">Your Favorites({favorites.length})</h2>
      <ul>
        {favorites.map((product) => (
          <div key={product.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg 
          shadow-lg mb-4">
             <div className="flex items-center">
            <img src={product.image} alt={product.title} className="w-20 h-20 object-cover rounded-lg" />
            <div className="ml-4">
              <h4 className="text-xl font-semibold">{product.title}</h4>
              <p className="text-gray-600">Price: ${product.price}</p>
            </div>
           
         </div>

              <button onClick={() => removeFromFavorites(product.id)}  className="bg-red-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
          >
                Remove from Favorites
              </button>
           
            </div>
                ))}
         
    
      </ul>
    </div>
  );
};

export default Favorites;
