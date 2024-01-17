"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaMapMarkerAlt } from "react-icons/fa";

const ProjectCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/project/get`
        );
        setData(response.data.data.slice(0, 15));
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function calculateProgress(start_date, target_date) {
    const currentDate = new Date();
    const startDate = new Date(start_date);
    const endDate = new Date(target_date);

    // Ensure the current date is within the range
    if (currentDate < startDate) {
      return 0; // Project hasn't started yet
    }

    if (currentDate > endDate) {
      return 100; // Project has already ended
    }

    const totalMilliseconds = endDate - startDate;
    const elapsedMilliseconds = currentDate - startDate;

    const progressPercentage = (elapsedMilliseconds / totalMilliseconds) * 100;

    return Math.round(progressPercentage);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-16 mt-[-300px]">
      {data.map((item) => (
        <div key={item.id} className="grid gap-2 md:ml-3">
          <div className="w-full md:w-full h-[565px] p-[18px] bg-white rounded-lg border justify-start items-center">
            <div className="self-stretch h-[230px] relative">
              <div className="w-[374.67px] h-[259px] mb-10 absolute rounded-md" />
              <img
                className="w-full md:w-[500px] h-[250px] md:left-[-85.55px] rounded-md"
                src={item.image_url}
                alt={item.project_name}
              />
            </div>
            <div className="self-stretch md:h-[247px] flex-col justify-start items-start gap-7 flex">
              <div className="self-stretch md:h-[152px] flex-col justify-start items-start gap-5 flex">
                <div className="self-stretch md:h-[70px] flex-col justify-center items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="w-[236px] text-[18px] font-[600] tracking-wide mt-24">
                      {item.project_name}
                    </div>
                    <div className="text-xl font-medium leading-normal tracking-tight mt-24">
                      {calculateProgress(item.start_time, item.target_time)}%
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2 inline-flex">
                    <div className="w-5 h-5 relative">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="text-[16px] font-[400] leading-normal tracking-tight">
                      {item.city} - {item.province}
                    </div>
                  </div>
                </div>
                <div className="self-stretch md:h-[62px] flex-col justify-start items-start gap-[9px] flex">
                  <div className="self-stretch text-lg font-normal leading-normal tracking-tight mt-10">
                    Nilai Proyek
                  </div>
                  <div className="self-stretch text-2xl font-medium tracking-wide">
                    RP. {item.budget.toLocaleString("id-ID")},-
                  </div>
                </div>
              </div>
              <div className="self-stretch px-3 py-2 rounded-[35px] border border-gray-500 justify-center items-center gap-2.5 inline-flex mt-14">
                <button className="text-base font-medium tracking-tight">
                  Lihat Detail Proyek
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
