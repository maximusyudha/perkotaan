"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SuccessProject = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/project/get`
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function truncateWords(text, maxWords) {
    const words = text.split(" ");
    const truncatedWords = words.slice(0, maxWords);
    return truncatedWords.join(" ");
  }

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (!data) {
    return <p>Loading...</p>;
  }

  const projectsPerPage = 4;
  const totalPages = Math.ceil(data.length / projectsPerPage);

  const renderProjects = () => {
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    return data.slice(startIndex, endIndex).map((item, index) => (
      // return (
      <div key={item.id} className="flex flex-col w-72 items-start space-y-4 p-4 pl-12 relative">
        <div className="relative self-stretch mt-2 pb-3 font-normal text-4xl">
          {index + 1}
        </div>
        <img
          className="relative self-stretch w-[400px] h-[350px]"
          alt="Mask group"
          src={item.image_url}
        />
        <div className="flex flex-col items-start space-y-2 relative self-stretch w-full">
          <div className="relative self-stretch mt-0 font-medium text-black text-2xl">
            {item.project_name}
          </div>
          <p className="relative self-stretch font-normal text-black text-base">
            {truncateWords(item.description, 24)}...
          </p>
        </div>
      </div>

      // <div key={item.project_name} className="p-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
      //   <div className="border border-gray-300 rounded p-4">
      //     <img
      //       src={item.image_url}
      //       alt={item.project_name}
      //       className="w-full h-40 object-cover rounded-md mb-4"
      //     />
      //     <h3 className="font-bold text-xl mb-2">{item.project_name}</h3>
      //     <p className="mb-4">{item.description}</p>
      //     <p className="mb-2">
      //       <span className="font-bold">Budget:</span> {item.budget}
      //     </p>
      //     <p className="mb-2">
      //       <span className="font-bold">Target Time:</span> {item.target_time}
      //     </p>
      //     <p className="mb-2">
      //       <span className="font-bold">City:</span> {item.city}
      //     </p>
      //     <p className="mb-2">
      //       <span className="font-bold">Province:</span> {item.province}
      //     </p>
      //   </div>
      // </div>
    ));
  };

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-32">
      <div className="inline-flex items-center gap-[24px] relative ml-16">
        <div className="relative w-fit [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-black text-[140px] tracking-[2.80px] leading-[normal] whitespace-nowrap">
          86
        </div>
        <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-black text-[42px] tracking-[0.84px] leading-[normal] whitespace-nowrap">
            Proyek sukses tahun ini
          </div>
          <p className="relative w-[604px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0.32px] leading-[24px]">
            Kami mengajak setiap warga untuk bersatu dalam upaya pembangunan
            kota ini. Setiap langkah, setiap proyek, dan setiap partisipasi
            memiliki arti besar
          </p>
        </div>
      </div>

      <Slider {...settings}>{renderProjects()}</Slider>
      <div className="flex justify-center mt-8"></div>
    </div>
  );
};

export default SuccessProject;
