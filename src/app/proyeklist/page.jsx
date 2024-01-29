"use client";
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
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get("id");
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/project/city/${id}`
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/project/city/search`,
        {
          searchTerm,
        }
      );
      setData(response.data.data.slice(0, 15));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="">
      <div className="hidden md:flex flex-col items-center relative mb-20 ">
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

            <div className="flex-none order-1 flex-grow-0 flex flex-col items-center gap-6 mt-7 ">
              <div className="font-bold text-7xl leading-10 text-black">
                215
              </div>
              <div className="text-base leading-5 text-gray-800">
                Sekolah Negri
              </div>
            </div>

            <div className="flex-none order-2 flex-grow-0 flex flex-col items-center gap-6 mt-7 ">
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
      <div className="inline-flex items-center gap-[24px] relative ml-16 mb-8">
        <div className="inline-flex flex-col items-start gap-[16px] relative md:block hidden">
          <div className="relative w-fit mt-[-1.00px] font-['Neue Montreal'] text-black text-[42px] tracking-[0.84px] leading-[vold] whitespace-nowrap">
            Proyek Pembangunan pada tahun ini
          </div>
          <p className="relative w-full [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0.32px] leading-[24px]">
            Kami mengajak setiap warga untuk bersatu dalam upaya pembangunan
            kota ini. Setiap langkah, setiap proyek, dan setiap partisipasi
            memiliki arti besar
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex items-end mr-20 p-3 relative bg-white rounded-full border border-gray-200">
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
        project={filteredProjects.length > 0 ? filteredProjects : data}
      />
      <div className="flex justify-center mt-8"></div>
    </div>
  );
};

export default ProyekList;
