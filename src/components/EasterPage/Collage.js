import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

export const Collage = ({ photos }) => {
  const getRandomSize = () => {
    const sizes = ["col-span-1", "col-span-2", "row-span-2"]; // Tamaños posibles
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const generateHearts = () => {
      const numHearts = Math.floor(Math.random() * 200) + 100; // Entre 10 y 30 corazones
      const newHearts = [];

      for (let i = 0; i < numHearts; i++) {
        newHearts.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight * 5 - window.innerHeight / 2, // Doble de alto
          size: Math.random() * 24 + 4, // Entre 4 y 10 píxeles de tamaño
        });
      }

      setHearts(newHearts);
    };

    generateHearts(); // Generar corazones al inicio

    // Opcional: generar nuevos corazones cada cierto tiempo
    const interval = setInterval(generateHearts, 5000); // Cada 5 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, []);

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
            className="w-full h-full object-cover rounded-xl"
          />
          {/* Opcional: Overlay para texto/efectos */}
          <div className="absolute inset-0 bg-black opacity-25"></div>
        </div>
      ))}

      {hearts.map((heart) => (
        <FaHeart
          key={heart.id}
          className="absolute text-rose-400"
          style={{
            left: heart.x,
            top: heart.y,
            fontSize: `${heart.size}px`,
          }}
        />
      ))}
    </div>
  );
};
