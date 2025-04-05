import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { config } from 'dotenv';
import config from "../config"

const Register = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: '',
    name: '',
    picture: '',
  });

  const [formData, setFormData] = useState({
    displayName: '',
    phone: '',
  });

  useEffect(() => {
    // Load Google user info from localStorage
    const data = JSON.parse(localStorage.getItem('pendingGoogleUser'));
    if (!data) {
      navigate('/login');
    } else {
      setUserInfo(data);
    }
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...userInfo,
        displayName: formData.displayName,
        phone: formData.phone,
      };

      const response = await axios.post(`${config.baseURL}/auth/register`, payload, {
        withCredentials: true, // send cookies
      });

      console.log(response.data);

      // Clear pending user
      localStorage.removeItem('pendingGoogleUser');

      navigate('/');
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center">
          <img
            src={userInfo.picture}
            alt="Profile"
            className="w-20 h-20 rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{userInfo.name}</h2>
          <p className="text-gray-600 mb-4">{userInfo.email}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Display Name</label>
            <input
              type="text"
              name="displayName"
              required
              value={formData.displayName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl"
              placeholder="e.g. Anshul Sharma"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl"
              placeholder="e.g. +91 9876543210"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Complete Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
