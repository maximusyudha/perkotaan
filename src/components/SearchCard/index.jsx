import React, { useState } from 'react';

const SearchCard = () => {
  const [selectedProvince, setSelectedProvince] = useState('Jawa Tengah');
  const [selectedCity, setSelectedCity] = useState('Banyumas');
  const [provinces, setProvinces] = useState(['Jawa Tengah', 'Jawa Barat', 'Jawa Timur']);
  const [cities, setCities] = useState(['Banyumas', 'Cilacap', 'Purwokerto']); 

  return (
    <div className="hidden md:flex flex-col items-start p-4 gap-4 w-[694px] h-[309px] bg-white rounded-md mt-16">
      <div className="w-full h-8 font-medium text-3xl text-center text-black">
        Lihat Pembangunan di Daerahmu
      </div>

      <div className="flex flex-row w-full gap-4">
        <div className="flex flex-col w-1/2">
          <div className="w-full h-6 mt-10 font-normal text-base text-gray-600">
            Provinsi
          </div>

          <div className="flex items-center w-full h-12 bg-white border border-gray-200 rounded-full">
            <div className="w-6 h-6 mr-2">{/* map-pin icon */}</div>
            <select
              className="w-3/4 h-full font-normal text-base text-gray-500"
              value={selectedProvince}
              onChange={(e) => setSelectedProvince(e.target.value)}
            >
              {provinces.map((province) => (
                <option key={province} value={province}>
                  {province}
                </option>
              ))}
            </select>
            <div className="w-6 h-6 ml-auto">{/* chevron-down icon */}</div>
          </div>
        </div>

        <div className="flex flex-col w-1/2">
          <div className="w-full mt-10 h-6 font-normal text-base text-gray-600">
            Kabupaten/Kota
          </div>

          <div className="flex items-center w-full h-12 bg-white border border-gray-200 rounded-full">
            <div className="w-6 h-6 mr-2">{/* map-pin icon */}</div>
            <select
              className="w-3/4 h-full font-normal text-base text-gray-500"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <div className="w-6 h-6 ml-auto">{/* chevron-down icon */}</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 w-full h-16">
        <button className="w-[696px] h-[69px]  bg-black rounded-full text-white">
          Lihat Pembangunan
        </button>
      </div>
    </div>
  );
};

export default SearchCard;
