"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeProject = () => {
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

  const projectsPerPage = 4;
  const totalPages = Math.ceil(data.length / projectsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderProjects = () => {
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    return data.slice(startIndex, endIndex).map((item) => (
      <div
        key={item.project_name}
        className="w-[410px] h-[566px] p-[18px]  bg-white rounded-lg border flex-col justify-start items-center gap-6 inline-flex mr-8"
      >
        <div className="self-stretch h-[259px] relative">
          <div className="w-[374.67px] h-[259px] left-0 top-0 absolute rounded-md" />
          <img
            className="w-[545.76px] h-[297.14px] left-[-85.55px] top-0 rounded-md"
            src={item.image_url} 
          />
        </div>
        <div className="self-stretch h-[247px] flex-col justify-start items-start gap-7 flex">
          <div className="self-stretch h-[152px] flex-col justify-start items-start gap-5 flex">
            <div className="self-stretch h-[70px] flex-col justify-center items-start gap-2 flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="w-[236px] text-neutral-900 text-[32px] font-medium font-['Neue Montreal'] tracking-wide">
                {item.project_name}
                </div>
                <div className="text-slate-600 text-xl font-medium font-['Neue Montreal'] leading-normal tracking-tight">
                  56%
                </div>
              </div>
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="w-5 h-5 relative" />
                <div className="text-slate-600 text-xl font-normal font-['Neue Montreal'] leading-normal tracking-tight">
                {item.province}
                </div>
              </div>
            </div>
            <div className="self-stretch h-[62px] flex-col justify-start items-start gap-[9px] flex">
              <div className="self-stretch text-gray-500 text-lg font-normal font-['Neue Montreal'] leading-normal tracking-tight">
                Nilai
              </div>
              <div className="self-stretch text-neutral-900 text-2xl font-medium font-['Neue Montreal'] tracking-wide">
                RP. 20.000.000.000,-
              </div>
            </div>
          </div>
          <div className="self-stretch px-6 py-7 rounded-[35px] border border-gray-500 justify-center items-center gap-2.5 inline-flex">
            <div className="text-neutral-900 text-base font-medium font-['Neue Montreal'] tracking-tight">
              Lihat Detail Proyek
            </div>
          </div>
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
    arrows:false,
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
    <div>
      <h1 className="text-4xl font-bold mt-6 mb-4 ml-4 md:mt-12 md:mb-6">
        Pembangunan Berjalan
      </h1>
      <Slider {...settings}>{renderProjects()}</Slider>
      <div className="flex justify-center mt-8"></div>
    </div>
  );
};

export default HomeProject;
