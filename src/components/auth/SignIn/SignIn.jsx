import React, { useState } from "react";
import { setCookie } from "cookies-next";

const SignIn = ({ onSignInSuccess }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

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
        `${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET_SECRET}/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await response.json();
      setCookie("refreshToken", data.accessToken);
      console.log(data);

      onSignInSuccess(data.username);
    } catch (error) {
      console.error("Error during signin:", error);
    }
  };

  return (
    <div className="w-full md:w-[50%] lg:w-[30%] mt-8 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
      <form onSubmit={handleSubmit}>
        {/* Email or Username */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Email or Username
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
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
