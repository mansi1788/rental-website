import React,{useContext} from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assests/logo.png';
import { FavoritesContext } from '../context/FavoritesContext';
import { CartContext } from '../context/Cartcontext';
import './Navbar.css';

const Navbar = () => {
  const { favorites } = useContext(FavoritesContext);
  const { cart } = useContext(CartContext);
  // const [success, setSuccess] = useState(null);

  // const handlelogin =()=>{
  
  //   window.location.href='/';

  // }
  const handlelogout=()=>{
    localStorage.removeItem("token");
    window.location.href='/';
    alert("logout successfully");
  }

  return (
    <motion.nav id="nav" className="fixed top-0 left-0 right-0 py-2 shadow-lg z-50">
      <div className="container flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8">
        <motion.img src={logo} alt="Logo" className="h-8 w-8 sm:h-10 sm:w-10" whileHover={{ scale: 1.1 }} />
        <motion.h1 className="text-xl sm:text-3xl font-bold" whileHover={{ scale: 1.1 }}>
          E-comm
        </motion.h1>

        <motion.form className="hidden md:flex" role="search">
          <input
            className="form-control w-40 sm:w-96 rounded-full px-4 py-2 border border-gray-300 focus:outline-none"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </motion.form>

        <ul className="hidden md:flex space-x-4 text-lg gap-3 items-center">
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/" className="text-black hover:text-gray-600">Home</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/shop" className="text-black hover:text-gray-600">Shop</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/contact" className="text-black hover:text-gray-600">Contact</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/favorites" className="text-black hover:text-gray-600 text-2xl">
              <i className="fa-regular fa-heart"> 
              
              <sup className='bg-red-600  text-white rounded-xl'><button className='w-6 h-20 '>{favorites.length}</button></sup></i>
            
            
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
  <Link to="/cart" className="text-black hover:text-gray-600 text-2xl">
    <i className="fa-solid fa-cart-shopping ">
      <sup className='bg-red-600  text-white rounded-xl'><button className='w-6 h-20 '>{cart.length}</button></sup></i>
  </Link>
</motion.li>

          <motion.li
            className="nav-item dropdown"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            
            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" 
            aria-expanded="false">
            <i className="fa-regular fa-user text-2xl"></i>
           </Link>
            <ul className="dropdown-menu bg-white">
              <li><Link className="dropdown-item" to="/register">Register</Link></li>
              <li><Link className="dropdown-item" to="/login" >Login</Link></li>
              <li><Link className="dropdown-item" to="/logout" onClick={handlelogout}>Logout</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <Link className="dropdown-item" to="/profile">
                <i className="fa-regular fa-user" >Profile</i></Link></li>
            </ul>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;



