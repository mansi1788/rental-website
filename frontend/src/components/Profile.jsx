import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams(); // Get the id from the URL
  // Fetch the user ID from localStorage if not found in useParams
  const userId = id || localStorage.getItem('id');

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) {
        setError('User ID is missing');
        return;
      }

      try {
        // Update the URL to your actual API endpoint for fetching user data
        const response = await axios.get(`http://localhost:8000/registers/${userId}`);

        // Check if the user data exists in the response
        if (response.data) {
          setUserData(response.data?.user); // Assuming response.data contains the user data
        } else {
          setError('User data not found');
        }
      } catch (err) {
        setError('Error fetching user data');
        console.error(err);
      }
    };

    fetchUserData();
  }, [userId]);
  console.log('userData------------>',userData);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (

    <div className="mt-20 flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-6">User Profile</h1>
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-600 font-medium">Name:</span>
            <span className="text-black font-semibold">{userData.name || 'N/A'}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-600 font-medium">Email:</span>
            <span className="text-black font-semibold">{userData.email || 'N/A'}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-600 font-medium">Address:</span>
            <span className="text-black font-semibold">{userData.address || 'N/A'}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-600 font-medium">Phone:</span>
            <span className="text-black font-semibold">{userData.phone || 'N/A'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Profile;
