"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const SearchCard = () => {
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Fetch provinces when the component mounts
    fetchProvinces();
  }, []);

  useEffect(() => {
    // Fetch cities when selectedProvince changes
    if (selectedProvince) {
      fetchCities(selectedProvince);
    }
  }, [selectedProvince]);

  const fetchProvinces = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/province/get`);
      const data = await response.json();

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
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/city/get/province/${provinceId}`);
      const data = await response.json();

      if (data.status === 'success') {
        setCities(data.data);
      } else {
        console.error('Error fetching cities:', data.message);
      }
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  return (
    <div className="hidden md:flex md:flex-col md:items-start md:p-4 md:gap-4 md:w-[694px] md:h-[309px] bg-white rounded-md mt-16">
      <div className="w-full h-8 font-medium text-3xl text-center text-black">
        Lihat Pembangunan di Daerahmu
      </div>

      <div className="md:flex md:flex-row md:w-full md:gap-4">
        <div className="md:w-1/2">
          <div className="w-full h-6 mt-10 font-normal text-base text-gray-600">
            Provinsi
          </div>

          <div className="flex items-center w-full h-12 bg-white border border-gray-200 rounded-full">
            <div className="w-6 h-6 mr-2">{/* map-pin icon */}</div>
            <select
              className="w-full h-full font-normal text-base text-gray-500"
              value={selectedProvince}
              onChange={(e) => setSelectedProvince(e.target.value)}
            >
              <option value="">Select Province</option>
              {provinces.map((province) => (
                <option key={province.id} value={province.id}>
                  {province.name}
                </option>
              ))}
            </select>
            <div className="w-6 h-6 ml-auto">{/* chevron-down icon */}</div>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="w-full mt-10 h-6 font-normal text-base text-gray-600">
            Kabupaten/Kota
          </div>

          <div className="flex items-center w-full h-12 bg-white border border-gray-200 rounded-full">
            <div className="w-6 h-6 mr-2">{/* map-pin icon */}</div>
            <select
              className="w-full h-full font-normal text-base text-gray-500"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
            <div className="w-6 h-6 ml-auto">{/* chevron-down icon */}</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 w-full h-16">
        <button onClick={() => { router.push(`proyeklist?id=${selectedCity || selectedProvince}`); }} className="w-full h-full bg-black rounded-full text-white">
          Lihat Pembangunan
        </button>
      </div>
    </div>
  );
};

export default SearchCard;