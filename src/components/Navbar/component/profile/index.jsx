"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown } from "react-icons/bi";
import axios from "axios";
import { getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";

const Profile = ({ refreshToken }) => {
  const [decodedToken, setDecodedToken] = useState([""]);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        if (refreshToken) {
          const decoded = jwtDecode(refreshToken);

          const data = await axios.get(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/${decoded.id}`
          );
          setDecodedToken(data.data.user[0]);
        }
      } catch (error) {
        // Handle token decoding errors here
        console.error("Error decoding token:", error);
      }
    };

    fetchToken();
  }, []);

  return (
    <div className="items-stretch flex gap-3">
      <div className="items-stretch flex justify-between gap-2.5">
        <img
          loading="lazy"
          src={decodedToken.image_url}
          className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
        />
        <span className="justify-center items-stretch flex grow basis-[0%] flex-col px-5">
          <div className="text-neutral-900 text-base font-medium tracking-wide">
            {decodedToken.first_name} {decodedToken.last_name}
          </div>
          <div className="text-slate-700 text-sm tracking-wide whitespace-nowrap mt-1">
            {decodedToken.email}
          </div>
        </span>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b26b68cc7c3beb0910bb257036b22a03699beb902cc8f36b9132205cbab90f1?"
        className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
      />
    </div>
  );
};

export default Profile;
