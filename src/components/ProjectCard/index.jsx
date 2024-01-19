"use client";
import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

const ProjectCard = ({ project }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(project);
        setData(project);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [project]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-16">
      {data.map((item) => (
        <div key={item.id} className="card-container">
          <div className="flex flex-col">
            <div className="flex-shrink-0 h-[250px] md:h-[400px] relative mb-4">
              <img
                className="w-full h-full object-cover rounded-md"
                src={item.image_url}
                alt={item.project_name}
              />
            </div>
            <div className="flex-1 bg-white rounded-lg border p-4">
              <div className="mb-4">
                <div className="text-xl font-semibold">{item.project_name}</div>
                <div className="flex items-center text-sm text-gray-500">
                  <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                  {item.city} - {item.province}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-lg font-normal leading-normal tracking-tight">
                    Nilai Proyek
                  </div>
                  <div className="text-xl font-medium tracking-wide">
                    RP. {item.budget.toLocaleString("id-ID")},-
                  </div>
                </div>
                <button
                  onClick={() => {
                    router.push(`proyek?id=${item.id}`);
                  }}
                  className="px-4 py-2 rounded-[35px] border border-gray-500 text-base font-medium tracking-tight"
                >
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

