import React from 'react';

const Custom404 = () => {
  return (
    <div className="flex items-center justify-center h-screen text-color-primary">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 animate-bounce">404 - Not Found</h1>
        <p className="text-gray-600 animate__animated animate__fadeIn">Sorry, the page you're looking for could not be found.</p>
      </div>
    </div>
  );
};

export default Custom404;
