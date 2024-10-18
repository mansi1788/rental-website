import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const userId = id || localStorage.getItem('id');
  const token = localStorage.getItem('token');

  useEffect(() => {
    
    if (!token || !userId) {
      setUserData(null);  
      setError('No information available. Please login first.');
      setTimeout(() => navigate('/login'), 3000);
      return;
    }
    
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/registers/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data) {
          setUserData(response.data?.user); 
        } else {
          setError('User data not found');
        }
      } catch (err) {
        setError('Error fetching user data');
        console.error(err);
      }
    };

    fetchUserData();
  }, [userId, token, navigate]);

 
  if (error) {
    return <div className="text-center text-red-500 mt-20">{error}</div>;
  }

 
  if (!userData) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div className="mt-24 flex justify-center items-center min-h-screen">
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
