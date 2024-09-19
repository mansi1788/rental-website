import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assests/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <motion.nav
      id="nav"
      className="fixed top-0 left-0 right-0 py-4 shadow-lg z-50 "
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8">
        <motion.img
          src={logo}
          alt="Logo"
          className="h-8 w-8 sm:h-10 sm:w-10"
          whileHover={{ scale: 1.1 }}
        />

        <motion.h1
          className="text-xl sm:text-3xl font-bold"
          whileHover={{ scale: 1.1 }}
        >
          E-comm
        </motion.h1>

        {/* Responsive Search Form */}
        <motion.form className="hidden md:flex" role="search">
          <input
            className="form-control w-40 sm:w-96 rounded-full px-4 py-2 border border-gray-300 focus:outline-none"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </motion.form>

        {/* Hamburger menu for mobile screens */}
        <div className="block md:hidden">
          <button className="text-3xl" id="mobile-menu-toggle">
            ☰
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-4 text-lg gap-3 items-center">
          <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <a href="/" className="text-black hover:text-gray-600">Home</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <a href="/shop" className="text-black hover:text-gray-600">Shop</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <a href="/contact" className="text-black hover:text-gray-600">Contact</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <a href="/favorites" className="text-black hover:text-gray-600">
              <i className="fa-regular fa-heart"></i>
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <a href="/favorites" className="text-black hover:text-gray-600">
            <i class="fa-solid fa-cart-shopping"></i>       
            </a>
          </motion.li>
          {/* Dropdown menu for user */}
          <motion.li
            className="nav-item dropdown"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fa-regular fa-user"></i>
            </a>
            <ul className="dropdown-menu bg-white">
              <li><a className="dropdown-item" href="#">Register</a></li>
              <li><a className="dropdown-item" href="#">Login</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#"><i className="fa-regular fa-user">Profile</i></a></li>
            </ul>
          </motion.li>
        </ul>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden flex-col md:hidden space-y-4 mt-4">
          <a href="/" className="block text-black">Home</a>
          <a href="/shop" className="block text-black">Shop</a>
          <a href="/contact" className="block text-black">Contact</a>
          <a href="/favorites" className="block text-black"><i className="fa-regular fa-heart"></i> Favorites</a>
          <a href="/login" className="block text-black"><i className="fa-regular fa-user"></i> Login</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
