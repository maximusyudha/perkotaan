"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomeProject = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/project/get`);
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 mb-20 mt-20">
        <div key={item.project_name} className="border border-gray-300 rounded p-4 ">
          <img
            src={item.image_url}
            alt={item.project_name}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="font-bold text-xl mb-2">{item.project_name}</h3>
          <p className="mb-4">{item.description}</p>
          <p className="mb-2">
            <span className="font-bold">Budget:</span> {item.budget}
          </p>
          <p className="mb-2">
            <span className="font-bold">Target Time:</span> {item.target_time}
          </p>
          <p className="mb-2">
            <span className="font-bold">City:</span> {item.city}
          </p>
          <p className="mb-2">
            <span className="font-bold">Province:</span> {item.province}
          </p>
        </div>
      </div>
    ));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mt-36 mb-4 ml-4">Pembangunan Berjalan</h1>
      <Slider {...settings}>
        {renderProjects()}
      </Slider>
      <div className="flex justify-center mt-8"></div>
    </div>
  );
};

export default HomeProject;
