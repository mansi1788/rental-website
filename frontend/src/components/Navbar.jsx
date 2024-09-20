// import React from 'react';
// import { motion } from 'framer-motion';
// import logo from '../assests/logo.png';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <motion.nav
//       id="nav"
//       className="fixed top-0 left-0 right-0 py-4 shadow-lg z-50 "
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="container flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.img
//           src={logo}
//           alt="Logo"
//           className="h-8 w-8 sm:h-10 sm:w-10"
//           whileHover={{ scale: 1.1 }}
//         />

//         <motion.h1
//           className="text-xl sm:text-3xl font-bold"
//           whileHover={{ scale: 1.1 }}
//         >
//           E-comm
//         </motion.h1>

//         {/* Responsive Search Form */}
//         <motion.form className="hidden md:flex" role="search">
//           <input
//             className="form-control w-40 sm:w-96 rounded-full px-4 py-2 border border-gray-300 focus:outline-none"
//             type="search"
//             placeholder="Search"
//             aria-label="Search"
//           />
//         </motion.form>

//         {/* Hamburger menu for mobile screens */}
//         <div className="block md:hidden">
//           <button className="text-3xl" id="mobile-menu-toggle">
//             ☰
//           </button>
//         </div>

//         {/* Navigation Links */}
//         <ul className="hidden md:flex space-x-4 text-lg gap-3 items-center">
//           <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
//             <Link href="/" className="text-black hover:text-gray-600">Home</Link>
//           </motion.li>
//           <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
//             <Link href="/shop" className="text-black hover:text-gray-600">Shop</Link>
//           </motion.li>
//           <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
//             <Link href="/contact" className="text-black hover:text-gray-600">Contact</Link>
//           </motion.li>
//           <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
//             <Link href="/favorites" className="text-black hover:text-gray-600">
//               <i className="fa-regular fa-heart"></i>
//            </Link>
//           </motion.li>
//           <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
//             <Link href="/favorites" className="text-black hover:text-gray-600">
//             <i class="fa-solid fa-cart-shopping"></i>       
//            </Link>
//           </motion.li>
//           {/* Dropdown menu for user */}
//           <motion.li
//             className="nav-item dropdown"
//             whileHover={{ scale: 1.1 }}
//             transition={{ type: 'spring', stiffness: 300 }}
//           >
//             <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//               <i className="fa-regular fa-user"></i>
//            </Link>
//             <ul className="dropdown-menu bg-white">
//               <li><Link className="dropdown-item" href="#">Register</Link></li>
//               <li><Link className="dropdown-item" href="#">Login</Link></li>
//               <li><hr className="dropdown-divider" /></li>
//               <li><Link className="dropdown-item" href="#"><i className="fa-regular fa-user">Profile</i></Link></li>
//             </ul>
//           </motion.li>
//         </ul>

//         {/* Mobile Menu */}
//         <div id="mobile-menu" className="hidden flex-col md:hidden space-y-4 mt-4">
//           <Link href="/" className="block text-black">Home</Link>
//           <Link href="/shop" className="block text-black">Shop</Link>
//           <Link href="/contact" className="block text-black">Contact</Link>
//           <Link href="/favorites" className="block text-black"><i className="fa-regular fa-heart"></i>Favorites</Link>
//           <Link href="/login" className="block text-black"><i className="fa-regular fa-user"></i>Login</Link>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assests/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <motion.nav id="nav" className="fixed top-0 left-0 right-0 py-4 shadow-lg z-50">
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
            <Link to="/favorites" className="text-black hover:text-gray-600">
              <i className="fa-regular fa-heart"></i>
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <a href="/favorites" className="text-black hover:text-gray-600">
            <i class="fa-solid fa-cart-shopping"></i>       
            </a>
          </motion.li>

          {/* <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/register" className="text-black hover:text-gray-600">Register</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/login" className="text-black hover:text-gray-600">Login</Link>
          </motion.li> */}

          <motion.li
            className="nav-item dropdown"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fa-regular fa-user"></i>
           </Link>
            <ul className="dropdown-menu bg-white">
              <li><Link className="dropdown-item" to="/register">Register</Link></li>
              <li><Link className="dropdown-item" to="/login">Login</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><Link className="dropdown-item" to="#"><i className="fa-regular fa-user">Profile</i></Link></li>
            </ul>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;

