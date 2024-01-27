"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { getCookie } from "cookies-next";

const History = () => {
  const [data, setData] = useState([]);
  const [decodedCookie, setDecodedCookie] = useState("");

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
          `${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}project/submission/history/${decoded.id}`
        );

        setData(response.data.data.slice(0, 15));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-8 p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Project History</h1>
      {data.map((item) => (
        <div key={item.id} className="mb-6 p-4 bg-gray-100 rounded-md">
          <p className="text-lg font-semibold">Name: {item.name}</p>
          <p className="text-gray-700">Village: {item.village}</p>
          <p className="text-gray-700">Address: {item.address}</p>
          <p className="text-gray-700">Reason: {item.reason}</p>
        </div>
      ))}
    </div>
  );
};

export default History;
