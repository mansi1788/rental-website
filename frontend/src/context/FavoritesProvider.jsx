import React from 'react';
import { FavoritesProvider } from './context/FavoritesContext'; // Import the provider
import { CartProvider } from './context/Cartcontext'; // Ensure you are also providing the CartContext
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
// other imports...

const App = () => {
  return (
    <Router>
      <CartProvider>
        <FavoritesProvider> {/* Wrap with FavoritesProvider */}
          <Routes>
            <Route path="/product/:id" element={<ProductDetail />} />
            {/* Add other routes */}
          </Routes>
        </FavoritesProvider>
      </CartProvider>
    </Router>
  );
};

export default App;
