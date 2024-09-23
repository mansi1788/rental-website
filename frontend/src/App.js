import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Subcategories from './components/Subcategories';
import Signup from './components/Signup';
import ProductDetail from './components/Productdetail';
import Addtocart from './components/Addtocart';
import { CartProvider } from './context/Cartcontext';
import { FavoritesProvider } from './context/FavoritesContext'; // Import FavoritesProvider
import Favorites from './components/Favorites';
import Shop from './components/Shop';

function App() {
  const [products, setProducts] = useState([]);

  // Fetch data from the fake store API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
      <CartProvider>
        <FavoritesProvider> {/* Wrap the entire app */}
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Subcategories />} />
              <Route path="/shop" element={<Shop/>}/>
              <Route path="/register" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/product/:id" element={<ProductDetail products={products} />} />
              <Route path="/cart" element={<Addtocart />} />
              <Route path="/favorites" element={<Favorites />} /> {/* No need to pass props */}
            </Routes>
            <Footer />
          </Router>
        </FavoritesProvider>
      </CartProvider>
    );
}

export default App;
