"use client";
// Import necessary modules
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Logout from "../logout/Logout";
import Link from "next/link";

// Define the Profile component
const Profile = ({ refreshToken }) => {
  // State variables
  const [decodedToken, setDecodedToken] = useState({});
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Fetch token effect
  useEffect(() => {
    const fetchToken = async () => {
      try {
        if (refreshToken) {
          const decoded = jwtDecode(refreshToken);
          const data = await axios.get(
            `${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/user/${decoded.id}`
          );
          setDecodedToken(data.data.user[0]);
        }
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    };
    fetchToken();
  }, [refreshToken]);

  // Click outside effect
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Logout handler
  const handleLogout = () => {
    setShowDropdown(false);
  };

  // Conditional rendering of the admin button
  const renderAdminButton = () => {
    if (decodedToken.role === "admin") {
      // Assuming role is stored in decodedToken
      return (
        <Link href="/admin">
          <div className="block py-2 ml-8 mt-10 text-sm text-gray-700 cursor-pointer">
            Admin Panel
          </div>
        </Link>
      );
    }
    return null;
  };

  // Return JSX
  return (
    <div className="relative items-stretch flex gap-3">
      {/* Profile info */}
      <div className="items-stretch flex justify-between gap-2.5 cursor-pointer">
        <img
          loading="lazy"
          src={decodedToken.image_url}
          className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full hidden md:inline-block"
        />
        <span className="justify-center items-stretch flex grow basis-[0%] flex-col px-5 hidden md:inline-block">
          <div className="text-neutral-900 text-base font-medium tracking-wide">
            {decodedToken.first_name} {decodedToken.last_name}
          </div>
          <div className="text-slate-700 text-sm tracking-wide whitespace-nowrap mt-1">
            {decodedToken.email}
          </div>
        </span>
      </div>
      {/* Dropdown button */}
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b26b68cc7c3beb0910bb257036b22a03699beb902cc8f36b9132205cbab90f1?"
        className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto hidden md:inline-block cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      />
      {/* Dropdown content */}
      {showDropdown && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-14 w-48 rounded-md shadow-lg z-50 bg-white"
        >
          <Logout onLogout={handleLogout} />
          <Link href="/history">
            <div className="block py-2 ml-8 mt-2 text-sm text-gray-700 cursor-pointer">
              History
            </div>
          </Link>
          {renderAdminButton()}
        </div>
      )}
    </div>
  );
};

export default Profile;
