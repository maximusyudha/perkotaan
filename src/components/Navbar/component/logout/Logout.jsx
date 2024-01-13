import React from "react";
import { deleteCookie } from "cookies-next";

const Logout = ({ onLogout }) => {
  const handleLogout = () => {
    try {
     
      const name = "refreshToken";
      const options = { path: '/' }; 

     
      deleteCookie(name, options);

      window.location.reload(true);

      
      onLogout();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="absolute right-0 mt-14 w-40 z-50 bg-white border border-gray-200 shadow-md rounded-md">
      <button
        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
