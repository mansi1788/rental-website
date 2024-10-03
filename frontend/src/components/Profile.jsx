import React, { useState } from 'react';
import axios from 'axios';

const Profile = () => {
        
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('')
  const [address, setAddress] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const [upload, setupload] = useState('');
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/register', {
        firstname,
        lastname,
        email,
        phone,
        address,
        gender,
        upload
      });

      // Handle the response from the backend
      console.log('Registration successful:', response.data);
      setSuccess('Registration successful! You can now log in.');
      setError(null); // Clear any previous errors

      // Reset form fields
      setFirstname('');
      setLastname('');
      setEmail('');
      setPhone('');
      setAddress('');
      setGender('');
      setupload('');
      
    } catch (err) {
      console.error('Registration failed:', err.response ? err.response.data : err.message);
      setError('Registration failed. Please try again.');
    }
  };
  return (
    <>
     <div className="flex justify-center items-center min-h-screen mt-16 bg-gray-100">
      <div className=" bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Personal Information</h2>
        {success && <p className="text-green-500 text-sm mb-4">{success}</p>}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleRegister}>

          <div className="flex mb-4">
          <div className="flex-1 mr-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fistname">
             First Name
            </label>
            <input
              type="text"
              id="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="flex-1 mr-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
             Last Name
            </label>
            <input
              type="text"
              id="lasttname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
              Gender
            </label>
            <div className="flex items-center space-x-4">
    {/* Male option */}
    <label className="inline-flex items-center">
      <input
        type="radio"
        name="gender"
        value="Male"
        checked={gender === "Male"} // Check if selected
        onChange={(e) => setGender(e.target.value)}
        required
        className="form-radio text-blue-600"
      />
      <span className="ml-2">Male</span>
    </label>
    <label className="inline-flex items-center">
      <input
        type="radio"
        name="gender"
        value="Female"
        checked={gender === "Female"} // Check if selected
        onChange={(e) => setGender(e.target.value)}
        required
        className="form-radio text-blue-600"
      />
      <span className="ml-2">Female</span>
    </label>

    <label className="inline-flex items-center">
      <input
        type="radio"
        name="gender"
        value="Other"
        checked={gender === "Other"} // Check if selected
        onChange={(e) => setGender(e.target.value)}
        required
        className="form-radio text-blue-600"
      />
      <span className="ml-2">Other</span>
    </label>
</div>

          </div>
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
        
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

     
   

{/* upload photo */}
<div className="flex-1 mr-2">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="upload">
      Upload Photo
    </label>
    <input
      type="file"
      id="upload"
      value={upload}
      onChange={(e) => setupload(e.target.value)}
      required
      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
    />
  </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Profile;