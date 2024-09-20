import React from 'react';

const Footer = () => {
  return (
    <>
      {/* Footer Top Section */}
      <div className='bg-orange-200 p-10 flex justify-center'>
        <div className="footer-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full max-w-screen-xl text-center md:text-left">
          <ul className="footer-column">
            <li className="font-bold mb-2">Company</li>
            <li>About</li>
            <li>Careers</li>
            <li>Rentify Store</li>
            <li>Corporate Information</li>
          </ul>

          <ul className="footer-column">
            <li className="font-bold mb-2">Help</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Returns</li>
            <li>Shipping Info</li>
          </ul>

          <ul className="footer-column">
            <li className="font-bold mb-2">Services</li>
            <li>Event Rentals</li>
            <li>Membership Plans</li>
            <li>Gift Cards</li>
            <li>Rentify Blog</li>
          </ul>

          <ul className="footer-column">
            <li className="font-bold mb-2">Legal</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Disclaimer</li>
          </ul>

          <ul className="footer-column">
            <li className="font-bold mb-2">Follow Us</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-t border-gray-300 w-full" />

      {/* Footer Bottom Section */}
      <div className="bg-gray-800 text-gray-300 text-center py-4">
        <p>&copy; 2024 Rentify. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
