"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/project/get`);
        setData(response.data.data.slice(0, 4)); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
      {data.map((item) => (
        <div key={item.project_name} className="border border-gray-300 rounded p-4">
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
      ))}
    </div>
  );
};

export default ProjectCard;
