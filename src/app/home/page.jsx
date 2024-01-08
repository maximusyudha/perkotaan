"use client"
import SearchCard from "@/components/SearchCard"
import React from 'react';

const Home = () => {
  return (
    <div className="flex justify-center h-screen  relative">
      <div className="absolute w-full h-full left-1/2 transform -translate-x-1/2 bg-cover bg-center z-0" style={{ backgroundImage: 'url(/images/citybg.jpg)' }}></div>
      <div className="flex flex-col items-center gap-2 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto p-4 z-10">
        <div className="font-semibold text-4xl text-center text-gray-700 mt-20">
          Membangun Kota, Membangun Masa Depan
        </div>
        <span className="font-normal text-sm text-center text-gray-700">
          Kami mengajak setiap warga untuk bersatu dalam upaya pembangunan kota ini. Setiap langkah, setiap proyek,
        </span>
        <span className="font-normal text-center text-gray-700">
          dan setiap partisipasi memiliki arti besar dalam membentuk wajah dan arah kota ke depan.
        </span>
        <SearchCard />
      </div>
    </div>
  );
};

export default Home;
