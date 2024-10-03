import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function len(d) {
  const words = d.split("");
  if (words.length > 20) {
    return words.slice(0, 20).join("") + "...";
  }
  return d;
}

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch data from the fake store API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Initially display all products
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleFilterChange = (category) => {
    setSelectedCategory(category);

    if (category === '') {
      setFilteredProducts(products); // Reset to all products
    } else {
      const filtered = products.filter((product) =>
        product.category.toLowerCase().includes(category.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };


  const handleFilterPriceChange = (minPrice, maxPrice) => {
    if (!minPrice || !maxPrice) {
      setFilteredProducts(products); // Reset to all products if no price range is selected
    } else {
      const filtered = products.filter((product) =>
        product.price * 50 >= minPrice && product.price * 50 <= maxPrice
      );
      setFilteredProducts(filtered);
    }
  };

  
  return (
    <>
      <div className='subcategories p-4 rounded-md shadow-md bg-white mt-20'>
        <ul className='flex space-x-6 justify-center'>
          <li className='hover:bg-gray-200 px-4 py-2 rounded cursor-pointer' onClick={() => handleFilterChange('men')}>Men's</li>
          <li className='hover:bg-gray-200 px-4 py-2 rounded cursor-pointer' onClick={() => handleFilterChange('women')}>Women's</li>
          <li className='hover:bg-gray-200 px-4 py-2 rounded cursor-pointer' onClick={() => handleFilterChange('jewelery')}>Jewelry</li>
          <li className='hover:bg-gray-200 px-4 py-2 rounded cursor-pointer' onClick={() => handleFilterChange('perfume')}>Perfume</li>
          <li className='hover:bg-gray-200 px-4 py-2 rounded cursor-pointer' onClick={() => handleFilterChange('blog')}>Blog</li>
          <li className='hover:bg-gray-200 px-4 py-2 rounded cursor-pointer' onClick={() => handleFilterChange('hot offers')}>Hot Offers</li>
        </ul>
      </div>
      <div>
        <h1 className='text-6xl text-center font-serif mt-14 mb-6'>PRODUCTS</h1>
        <h4 className='text-center text-2xl mb-10 text-gray-600'> Summer Collection New Modern Design </h4>
        <div className='flex'>
          <div className='flex flex-col w-72 bg-slate-200 p-4 rounded-lg shadow-md mr-3 ml-3'>
            <h3 className='text-lg font-semibold mb-4'>Filter</h3>
            <h5 className='text-lg font-semibold mb-4'>Category</h5>
            <div className='flex flex-col space-y-3'>
              <label className='flex items-center'>
                <input type='radio' name='category' className='mr-2' onClick={() => handleFilterChange('men')} />
                <span>Men</span>
              </label>
              <label className='flex items-center'>
                <input type='radio' name='category' className='mr-2' onClick={() => handleFilterChange('women')} />
                <span>Women</span>
              </label>
              <label className='flex items-center'>
                <input type='radio' name='category' className='mr-2' onClick={() => handleFilterChange('jewelery')} />
                <span>Jewelry</span>
              </label>
              <label className='flex items-center'>
                <input type='radio' name='category' className='mr-2' onClick={() => handleFilterChange('electronics')} />
                <span>Electronics</span>
              </label>
            </div>



            <h5 className='text-lg font-semibold mb-4'>Price</h5>
            <div className='flex flex-col space-y-3'>
              <label className='flex items-center'>
                <input type='radio' name='category' className='mr-2' onClick={() =>handleFilterPriceChange(1000,2000)} />
                <span>1000-2000</span>
              </label>
              <label className='flex items-center'>
                <input type='radio' name='category' className='mr-2' onClick={() =>handleFilterPriceChange(2001, 3000)} />
                <span>2001-3000</span>
              </label>
              <label className='flex items-center'>
                <input type='radio' name='category' className='mr-2' onClick={() => handleFilterPriceChange(3001, 5000)} />
                <span>3000-5000</span>
              </label>
              <label className='flex items-center'>
                <input type='radio' name='category' className='mr-2' onClick={() => handleFilterChange('jewelery')} />
                <span>5001 and above</span>
              </label>
            </div>


            
          </div>

          <div className='flex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 w-full bg-orange-200'>
            {filteredProducts.slice(0, 8).map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <div className='flex flex-col items-center bg-white p-4 shadow-xl rounded-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-3'>
                  <img
                    src={product.image}
                    alt={product.title}
                    className='w-40 h-40 mb-4 object-contain'
                  />
                  <h3 className='text-lg font-bold mb-2'>{len(product.title)}</h3>
                  <p className='text-gray-600 text-xl font-semibold mb-4'><i className="fa fa-inr" aria-hidden="true"> {product.price * 50}</i></p>
                  <button className='bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-300'>
                    Add to Cart
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
