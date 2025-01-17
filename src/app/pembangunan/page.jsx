"use client";
import React, { useState, useEffect } from "react";
import SearchCard from "@/components/SearchCard";
import ProjectCard from "@/components/ProjectCard";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";

const Pembangunan = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/project/get`
        );
        setProjects(response.data.data.slice(0, 15));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/project/city/search`,
        {
          searchTerm,
        }
      );
      setProjects(response.data.data.slice(0, 15));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <section>
      <div className="md:flex flex-col items-center h-screen relative">
        <div
          className="md:w-[1850px] h-[450px] bg-cover bg-center relative z-50  hidden md:block"
          style={{ backgroundImage: "url(/images/citybg.jpg)" }}
        >
          <div className="absolute ml-[50%]">
            <SearchCard />
          </div>

          <div className="ml-60">
            <div className="hidden md:flex flex-col md:ml-10 mt-[8%] text-2xl md:text-4xl">
              <div className="">Properti tersedia 2024</div>
            </div>

            <div className="hidden md:flex flex-row items-center gap-20 ml-4 md:ml-10 text-2xl md:text-4xl">
              <div className="flex-none order-0 flex-grow-0 flex flex-col items-center gap-6 mt-7">
                <div className="font-bold text-7xl leading-10 text-black">
                  302
                </div>
                <div className="text-base leading-5 text-gray-800">
                  Jalan Umum
                </div>
              </div>

              <div className="flex-none order-1 flex-grow-0 flex flex-col items-center gap-6 mt-7">
                <div className="font-bold text-7xl leading-10 text-black">
                  215
                </div>
                <div className="text-base leading-5 text-gray-800">
                  Sekolah Negri
                </div>
              </div>

              <div className="flex-none order-2 flex-grow-0 flex flex-col items-center gap-6 mt-7">
                <div className="font-bold text-7xl leading-10 text-black">
                  120
                </div>
                <div className="text-base leading-5 text-gray-800">
                  Layanan Kesehatan
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full mt-[-650px] md:items-center px-5 py-2 md:py-0 md:mt-[-200px] justify-between">
        <div className="font-medium text-black text-4xl md:mr-8 md:mb-0 mb-4">
          Koleksi Properti
        </div>
        <div className="flex w-full md:w-72 items-end p-3 relative bg-white rounded-full border border-gray-200">
          <div className="flex items-center gap-2">
            <IoIosSearch className="w-5 h-5" />
            <input
              type="text"
              className="w-full font-normal text-gray-500 text-lg leading-6 outline-none"
              placeholder="Cari properti"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>
        </div>
      </div>
      <ProjectCard
        project={filteredProjects.length > 0 ? filteredProjects : projects}
      />
    </section>
  );
};

export default Pembangunan;
