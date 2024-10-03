import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();

      try {
        // Replace with your backend login endpoint
        const response = await axios.post('http://localhost:8000/login', {
          email,
          password,
        });
  
        // Handle the response from the backend

        console.log('Login successful:', response.data);

      setSuccess('login successful! keep shopping');
      setError(null); // Clear any previous errors
  
        // Store the token in localStorage or other storage if needed
        localStorage.setItem('token', response.data.token);
        // Check if the user is a vendor and redirect accordingly
        
       
      } catch (err) {
        setError('Invalid credentials. Please try again.');
        console.error('Login failed:', err);
      }
    };
  return (
    <>
     <div className="flex justify-center items-center mt-9 min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      {success && <p className="text-green-500 text-sm mb-4">{success}</p>}
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
              px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login;