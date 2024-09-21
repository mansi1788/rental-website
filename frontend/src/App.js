// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Login from './components/Login';
// import Subcategories from './components/Subcategories';
// import Signup from './components/Signup';
// import ProductDetail from './components/Productdetail';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Subcategories />} />
//         <Route path="/register" element={<Signup />} />
//         <Route path="/login" element={<Login />} />

//         <Route path="/" element={<Subcategories />} />
//         <Route path="/product/:id" element={<ProductDetail />} />

//         <Route path="/" exact component={Subcategories} />
//         <Route path="/product/:id" render={(props) => <ProductDetail {...props} products={products} />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Subcategories from './components/Subcategories';
import Signup from './components/Signup';
import Productdetail from './components/Productdetail';

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
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Subcategories />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<Productdetail products={products} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
