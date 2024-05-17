import React from "react";

export const Collage = ({ photos }) => {
  const getRandomSize = () => {
    const sizes = ["col-span-1", "col-span-2", "row-span-2"]; // Tamaños posibles
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  return (
    <div className="grid grid-cols-2 md:mt-14 md:grid-cols-3 gap-4 p-4 bg-gradient-to-br mb-14 md:mb-0 from-slate-800 to-slate-900 text-gray-100">
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`relative overflow-hidden ${getRandomSize()}`}
        >
          <img
            src={photo}
            alt={`img-${index}`}
            className="w-full h-full object-cover"
          />
          {/* Opcional: Overlay para texto/efectos */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      ))}
    </div>
  );
};
