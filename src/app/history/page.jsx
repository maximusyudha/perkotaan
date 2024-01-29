"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { getCookie } from "cookies-next";

const History = () => {
  const [data, setData] = useState([]);
  const [decodedCookie, setDecodedCookie] = useState("");
  const [completedProjects, setCompletedProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cookie = getCookie("refreshToken");
        if (!cookie) {
          console.error("Refresh token not found in cookies");
          return;
        }

        const decoded = jwtDecode(cookie);
        setDecodedCookie(decoded);

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/project/submission/history/${decoded.id}`
        );
        setData(response.data.data.slice(0, 15));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCompleteProject = async (projectId) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/project/mark-as-completed/${projectId}`
      );
      setCompletedProjects([...completedProjects, projectId]);  
    } catch (error) {
      console.error("Error marking project as completed:", error);
    }
  };

  return (
    <div className="container mx-auto my-8 p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Project History</h1>
      {data.map((item) => (
        <div className="container mx-auto my-8 p-4 bg-white shadow-md rounded-md">
        <div key={item.id} className="flex items-center mb-4">
          {item.image_url && (
            <img
              src={item.image_url}
              alt={`Image for ${item.name}`}
              className="w-[129px] h-[129px] rounded-md mr-4"
            />
          )}
          <div>
            <p className="text-lg font-semibold">Nama: {item.name}</p>
            <p className="text-gray-700">Distrik: {item.village}</p>
            <p className="text-gray-700">Alamat: {item.address}</p>
            <p className="text-gray-700">Deskripsi: {item.reason}</p>
          </div>
          {!completedProjects.includes(item.id) && (
            <p
              className="ml-auto bg-gray-200 rounded-2xl text-black font-bold py-2 px-4 rounded"
              onClick={() => handleCompleteProject(item.id)}
            >
             ✓ Pengajuan Selesai
            </p>
          )}
        </div>
        </div>
      ))}
    </div>
  );
};

export default History;
