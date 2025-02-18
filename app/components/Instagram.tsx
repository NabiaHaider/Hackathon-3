import React from 'react';

const Instagram = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-[300px] bg-cover bg-center"
      style={{ backgroundImage: "url('/pic1.jpg')" }}
    >
      <h1 className="text-4xl font-bold text-black z-10 mb-4">Our Instagram</h1>
      <p className="text-black z-10 mb-6">Follow our store on Instagram</p>
      <button
        className="px-6 py-2 bg-[FAF4F4] text-black font-medium text-lg rounded-full shadow-md hover:bg-gray-600 transition z-10"
      >
        Follow Us
      </button>
    </div>
  );
};

export default Instagram;
