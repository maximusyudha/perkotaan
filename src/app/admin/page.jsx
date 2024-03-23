"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Chart from "@/components/Chart";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { getCookie } from "cookies-next";

const Admin = () => {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [decodedToken, setDecodedToken] = useState({});
  const [decodedCookie, setDecodedCookie] = useState("");

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const refreshToken = getCookie("refreshToken"); // Assuming you have a function to get the refreshToken
        if (refreshToken) {
          const decoded = jwtDecode(refreshToken);
          const data = await axios.get(
            `${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/user/${decoded.id}`
          );
          setDecodedToken(data.data.user[0]);
        } else {
          router.push("/signin");
        }
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    };
    fetchToken();
  }, [router]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/project/submission/history`
        );
        setItems(response.data.data.slice(0, 15));
        console.table(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (decodedToken.role !== "admin") {
      router.push("/admin");
    }
  }, [decodedToken, router]);

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div className="w-full md:w-[calc(100%-16rem)] mt-40 px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden border border-gray-200 sm:rounded-lg">
            <Chart data={items} />
            <div className="overflow-x-auto">
              <table className="w-full whitespace-nowrap divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nama Pelanggan
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Asal Daerah
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Harga
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Luas
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Gambar
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kota
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {items.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4">{item.name}</td>
                      <td className="px-6 py-4">{item.address}</td>
                      <td className="px-6 py-4">
                        Rp.{" "}
                        {item.price
                          ? item.price.toLocaleString("id-ID")
                          : "N/A"}
                      </td>
                      <td className="px-6 py-4">
                        {item.width * item.height || "N/A"} m²
                      </td>
                      <td className="px-6 py-4">
                        <img
                          src={item.image_url}
                          alt="Submission"
                          className="h-10 w-10 rounded-full"
                        />
                      </td>
                      <td className="px-6 py-4">{item.city}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
