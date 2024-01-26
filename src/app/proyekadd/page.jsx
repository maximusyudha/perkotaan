"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import axios from 'axios';

const ReportPage = () => {
   const router = useRouter();  

  const [formData, setFormData] = useState({
    project_name: '',
    description: '',
    budget: '',
    target_time: '',
    start_time: '',
    image_url: '', 
    city: '',
    province: ''
  });

  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);

  const fetchProvinces = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/province/get`);
      const data = response.data;

      if (data.status === 'success') {
        setProvinces(data.data);
      } else {
        console.error('Error fetching provinces:', data.message);
      }
    } catch (error) {
      console.error('Error fetching provinces:', error);
    }
  };

  const fetchCities = async (provinceId) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/city/get/province/${provinceId}`);
      const data = response.data;

      if (data.status === 'success') {
        setCities(data.data);
      } else {
        console.error('Error fetching cities:', data.message);
      }
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'province') {
 
      fetchCities(value);
    }
    

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image_url: e.target.value
    });
  };

  const handleDateChange = (name, dateValue) => {
    setFormData({
      ...formData,
      [name]: dateValue
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/project/post`,
        formData
      );
      console.log('Report submitted successfully:', response.data);
   
    } catch (error) {
      console.error('Error submitting report:', error);

    }
  };


  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        // Check if refreshToken is present in cookies
        const refreshToken = document.cookie.replace(/(?:(?:^|.*;\s*)refreshToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
        
        if (!refreshToken) {
          // If refreshToken is not present, redirect to login page
          router.push('/signin');
          return;
        }
  
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/signin`);
        
        if (response.data.isAuthenticated) { 
          // If authenticated, fetch provinces
          fetchProvinces();
        } else {         
          router.push('/signin');
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
      }
    };
  
    checkAuthentication();
  }, [router]);


  return (
    <div className="max-w-2xl mx-auto mt-10 mb-10">
      <h1 className="text-3xl font-bold mb-4">Report Page</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          Project Name:
          <input type="text" name="project_name" onChange={handleChange} required className="mt-1 p-2 border rounded-md w-full required" />
        </label>
        <br />
        <label className="block">
          Description:
          <textarea name="description" onChange={handleChange} required className="mt-1 p-2 border rounded-md w-full required" />
        </label>
        <br />
        <label className="block">
          Budget:
          <input type="text" name="budget" onChange={handleChange} required className="mt-1 p-2 border rounded-md w-full required" />
        </label>
        <br />
        <label className="block">
          Start Time:
          <input
            type="date"
            name="start_time"
            onChange={(e) => handleDateChange('start_time', e.target.value)}
            required
            className="mt-1 p-2 border rounded-md w-full required"
          />
        </label>
        <br />
        <label className="block">
          Target Time:
          <input
            type="date"
            name="target_time"
            onChange={(e) => handleDateChange('target_time', e.target.value)}
            required
            className="mt-1 p-2 border rounded-md w-full required"
          />
        </label>
        <br />
        <label className="block">
          Image URL:
          <input type="text" name="image_url" onChange={handleImageChange} required className="mt-1 p-2 border rounded-md w-full" />
        </label>
        <br />
        <label className="block">
          Upload Image:
          <input type="file" accept="image/*" onChange={handleImageChange} className="mt-1 p-2 border rounded-md w-full required" />
        </label>
        <br />
        <label className="block">
          Province:
          <select name="province" onChange={handleChange} value={formData.province} className="mt-1 p-2 border rounded-md w-full required">
            <option value="" disabled>Select Province</option>
            {provinces.map((province) => (
              <option key={province.id} value={province.id}>
                {province.name}
              </option>
            ))}
          </select>
        </label>
        <br />

        {/* City selection */}
        <label className="block">
          City:
          <select name="city" onChange={handleChange} value={formData.city} className="mt-1 p-2 border rounded-md w-full required">
            <option value="" disabled>Select City</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Submit Report
        </button>
      </form>
    </div>
  );
};

// Export the component as the default export
export default ReportPage;
