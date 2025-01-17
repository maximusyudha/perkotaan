import SearchCard from "@/components/SearchCard";
import React from "react";

const Home = () => {
  return (
    <div className="flex justify-center h-screen relative ">
      <div
        className="absolute w-1/2 h-1/2 left-1/2 transform -translate-x-1/2 bg-cover bg-center z-0 md: w-full h-full"
        style={{ backgroundImage: "url(/images/citybg.jpg)" }}
      ></div>
      <div className="flex flex-col items-center gap-2 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto p-4 z-10">
        <div className="font-semibold text-4xl text-center text-black-700 mt-20">
          Jelajahi properti unggulan, Temukan Properti Ideal
        </div>
        <span className="font-normal text-sm text-center text-black-700 mt-2">
          Temukanlah kesempurnaan dalam setiap detail dengan menjelajahi koleksi
          properti unggulan kami yang telah
        </span>
        <span className="font-normal text-center text-black-700 mt-1">
          dipilih secara khusus untuk memenuhi kebutuhan dan harapan Anda.
        </span>
        <SearchCard />
      </div>
    </div>
  );
};

export default Home;
