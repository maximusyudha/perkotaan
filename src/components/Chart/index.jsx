"use client";
import React, { useEffect, useRef, useState } from "react";
import ChartJS from "chart.js/auto";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { getCookie } from "cookies-next";

const BarChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current && data && data.length > 0) {
      const labels = data.map((item) => item.name);
      const prices = data.map((item) => item.price);

      const ctx = chartRef.current.getContext("2d");
      chartInstance.current = new ChartJS(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Price",
              data: prices,
              backgroundColor: "rgba(54, 162, 235, 0.6)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef}></canvas>;
};

const Chart = () => {
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
          `${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/project/submission/history`
        );
        setData(response.data.data.slice(0, 15));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="Chart flex justify-center">
      <div className="w-full md:w-[80%] lg:w-[60%]">
        <BarChart data={data} />
      </div>
    </div>
  );
};

export default Chart;
