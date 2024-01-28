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
    <div className="absolute right-0 w-40 z-50  rounded-md">
      <button
        className="block w-full text-left  py-2 text-sm text-gray-700"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;