"use client";
import React from "react";
import SearchCard from "@/components/SearchCard";
import ProjectCard from "@/components/ProjectCard";

const Pembangunan = () => {
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
      <ProjectCard />
    </section>
  );
};

export default Pembangunan;
