'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchCard from "@/components/SearchCard";
import ProjectCard from "@/components/ProjectCard";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { IoIosSearch } from "react-icons/io";

const ProyekList = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/project`
      );
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/project/search`,
        {
          searchTerm,
        }
      );
      setFilteredProjects(response.data.data.slice(0, 15));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
  <div className="md:flex md:items-center md:bg-cover md:bg-center md:relative md:h-[450px]">
    <div
      className="md:absolute md:left-1/2 md-transform md-translate-x-[-50%] md:w-full md:h-[450px] md:bg-cover md:bg-center md:z-50"
      style={{ backgroundImage: "url(/images/citybg.jpg)" }}
    >
      <div className="md:flex md:flex-col md:items-center md:h-full">
        <SearchCard />
        <div className="md:flex md:flex-row md:gap-4 md:mt-8 md:text-lg">
          <div className="md:w-1/3 md:flex md:flex-col md:items-center md:gap-6">
            <div className="md:font-bold md:text-4xl md:text-black">302</div>
            <div className="md:text-base md:text-gray-800">Jalan Umum</div>
          </div>
          <div className="md:w-1/3 md:flex md:flex-col md:items-center md:gap-6">
            <div className="md:font-bold md:text-4xl md:text-black">215</div>
            <div className="md:text-base md:text-gray-800">Sekolah Negri</div>
          </div>
          <div className="md:w-1/3 md:flex md:flex-col md:items-center md:gap-6">
            <div className="md:font-bold md:text-4xl md:text-black">120</div>
            <div className="md:text-base md:text-gray-800">Layanan Kesehatan</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="md:flex md:items-center md:gap-4 md:my-8">
    <div className="md:flex-none md:order-0 md:flex-grow">
      <div className="md:relative">
        <div className="md:font-['Neue Montreal'] md:text-2xl md:tracking-[0.84px] md:leading-[vold]">
          Proyek Pembangunan pada tahun ini
        </div>
        <p className="md:text-base md:tracking-[0.32px] md:leading-[24px]">
          Kami mengajak setiap warga untuk bersatu dalam upaya pembangunan kota ini. Setiap langkah, setiap proyek, dan setiap partisipasi memiliki arti besar
        </p>
      </div>
    </div>
    <div className="md:flex-none md:order-1 md:flex-grow">
      <div className="md:relative">
        <div className="md:absolute md:right-0 md:top-0 md:-mt-8 md:mr-6">
          <div className="md:flex md:items-center md:gap-2">
            <IoIosSearch className="md:w-5 md:h-5" />
            <input
              type="text"
              className="md:font-normal md:text-base md:text-gray-500 md:leading-6 md:outline-none"
              placeholder="Cari proyek"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <ProjectCard project={filteredProjects.length > 0 ? filteredProjects : data} />
</div>

  );
};



export default ProyekList;
