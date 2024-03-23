"use client";
import React, { useState, useEffect } from "react";
import Profile from "./component/profile";
import { getCookie } from "cookies-next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cookie, setCookie] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const refreshToken = getCookie("refreshToken");
      if (refreshToken) {
        setCookie(refreshToken);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };

  const handleSvgClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, [isOpen]);

  return (
    <div className="bg-white p-4 flex justify-between items-center">
      <div
        className="flex items-center justify-center"
        onClick={handleSvgClick}
      >
        <svg
          width="22"
          height="23"
          viewBox="0 0 22 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Replace the path data with your actual SVG path */}
          <path
            d="M1.25 21.25H20.75M3.41667 21.25V6.08333L12.0833 1.75V21.25M18.5833 21.25V10.4167L12.0833 6.08333M7.75 8.25V8.26083M7.75 11.5V11.5108M7.75 14.75V14.7608M7.75 18V18.0108"
            stroke="#161616"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-gray-700 font-semibold text-lg ml-2">
          Perkotaan.io
        </span>
      </div>

      {isLoggedIn ? (
        <div
          className={`hidden md:flex items-center justify-center space-x-12 ml-40 ${
            isOpen ? "block" : "hidden"
          }`}
          onClick={handleDropdownClick}
        >
          <a href="/" className="text-gray-700 hover:text-black">
            Beranda
          </a>
          <a href="/pembangunan" className="text-gray-700 hover:text-black">
            Koleksi
          </a>
          <a href="/aboutus" className="text-gray-700 hover:text-black">
            Tentang
          </a>
        </div>
      ) : (
        <div
          className={`hidden md:flex items-center justify-center space-x-12 ml-40 ${
            isOpen ? "block" : "hidden"
          }`}
          onClick={handleDropdownClick}
        >
          <a href="/" className="text-gray-700 hover:text-black">
            Beranda
          </a>
          <a href="/pembangunan" className="text-gray-700 hover:text-black">
            Koleksi
          </a>
          <a href="/aboutus" className="text-gray-700 hover:text-black">
            Tentang
          </a>
        </div>
      )}

      {isLoggedIn ? (
        <Profile refreshToken={cookie} />
      ) : (
        <div
          className={`hidden md:flex items-center justify-center space-x-2 ${
            isOpen ? "block" : "hidden"
          }`}
          onClick={handleDropdownClick}
        >
          <button className="px-4 py-2 rounded-full hover:bg-gray-600">
            <a href="/signin">Masuk</a>
          </button>
          <button className="border border-gray-500 px-4 py-2 rounded-full hover:text-black hover:border-black">
            <a href="/signup">Buat Akun</a>
          </button>
        </div>
      )}

      <div className="md:hidden flex items-center">
        <div className="text-gray-700 hover:text-black focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 50 50"
            onClick={handleSvgClick}
          >
            {/* Replace the path data with your actual SVG path */}
            <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
          </svg>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-16 right-4 bg-white border border-gray-300 p-2 rounded shadow z-50 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={handleDropdownClick}
      >
        <a href="/" className="block py-2">
          Beranda
        </a>
        <a href="/pembangunan" className="block py-2">
          Pembangunan
        </a>
        {isLoggedIn && (
          <a href="/proyekadd" className="block py-2">
            Pengajuan pembangunan
          </a>
        )}
        {!isLoggedIn && (
          <>
            <button className="block py-2">
              <a href="/signin">Masuk</a>
            </button>
            <button className="block py-2">
              <a href="/signup">Buat Akun</a>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
