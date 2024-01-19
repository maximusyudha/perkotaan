import React, { useState } from "react";
import { setCookie } from "cookies-next";
import axios from "axios";

const SignIn = ({ onSignInSuccess }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const isEmail = formData.username.includes("@");
      const key = isEmail ? "email" : "username";

      const requestBody = {
        [key]: formData.username,
        password: formData.password,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/signin`,
        {
          mode: "cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.status !== 200) {
        const errorData = await response.json();
        setMessage(errorData.message);
      }

      const data = await response.json();
      setCookie("refreshToken", data.accessToken);

      onSignInSuccess(data.username);
    } catch (e) {
      console.error("Error during signin:", e);
    }
  };

  return (
    <div className="w-full md:w-[50%] lg:w-[30%] mt-8 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Masuk</h2>
      <form onSubmit={handleSubmit}>
        {/* Email or Username */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Email atau Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full md:w-full h-[39px] bg-blue-500 text-white px-4 py-2 rounded-[100px] hover:bg-blue-600"
        >
          Masuk
        </button>
      </form>
      {message && <div className="text-red-500 text-sm mt-2">{message}</div>}
    </div>
  );
};

export default SignIn;
