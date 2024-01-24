"use client";
import React, { useState, useEffect } from "react";
import SearchCard from "@/components/SearchCard";
import ProjectCard from "@/components/ProjectCard";
import { IoIosSearch } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { CiFilter } from "react-icons/ci";
import axios from "axios";

const Pembangunan = () => {
  const [search, setSearch] = useState("");
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
      <div className="hidden md:flex flex-col items-center h-screen relative ">
        <div
          className="w-[1850px] h-[450px] bg-cover bg-center relative z-50"
          style={{ backgroundImage: "url(/images/citybg.jpg)" }}
        >
          <div className="absolute ml-[50%]">
            <SearchCard />
          </div>

          <div className="flex flex-col ml-[12%] mt-[8%] text-2xl ">
            <div className="">Pembangunan Nasional 2023</div>
          </div>

          <div className="flex flex-row items-center gap-20 ml-60 text-2xl">
            <div className="flex-none order-0 flex-grow-0 flex flex-col items-center gap-6  mt-7  ">
              <div className="font-bold text-7xl leading-10 text-black">
                302
              </div>
              <div className="text-base leading-5 text-gray-800">
                Jalan Umum
              </div>
            </div>

            <div className="flex-none order-1 flex-grow-0 flex flex-col items-center gap-6  mt-7 ">
              <div className="font-bold text-7xl leading-10 text-black">
                215
              </div>
              <div className="text-base leading-5 text-gray-800">
                Sekolah Negri
              </div>
            </div>

            <div className="flex-none order-2 flex-grow-0 flex flex-col items-center gap-6  mt-7 ">
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
      <div className="flex w-screen items-center px-10 py-0 -mt-96 justify-between">
        <div className="font-medium text-black text-4xl">Proyek Nasional</div>
        <div className="flex w-72 items-end mr-6 p-3 relative bg-white rounded-full border border-gray-200">
          <div className="flex items-center gap-2">
            <IoIosSearch className="w-5 h-5" />
            <input
              type="text"
              className="font-normal text-gray-500 text-lg leading-6 whitespace-nowrap outline-none"
              placeholder="Cari proyek"
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
