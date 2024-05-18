import React from "react";
import { GiHeartKey } from "react-icons/gi";
import { FaPlay } from "react-icons/fa";

export const Music = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-56px)] md:min-h-screen mb-14 md:mb-0 bg-gradient-to-r from-rose-500 to-orange-400 text-gray-100">
      {/* Contenido para pantallas grandes: Texto a la izquierda, imagen a la derecha */}
      <div className="hidden md:block w-1/2 p-8 lg:p-16 text-white md:order-1">
        {" "}
        {/* Texto primero en orden para pantallas grandes */}
        <h1 className="text-4xl inline-flex gap-2 text-slate-900 md:text-6xl font-bold mb-4">
          Melodía de nuestro amor
          <GiHeartKey className="animate-pulse text-rose-700 md:h-24 md:w-24 xl:w-12 xl:h-12" />
        </h1>
        <p className="text-lg md:text-xl">
          En estos 10 meses, nuestra historia se ha convertido en una hermosa
          canción llena de tosos esos sentimientos que quiero expresarte. Hoy,
          quiero regalarte esta canción que habla de nosotros, de nuestro amor.
          Escúchala con atención, cierra los ojos y deja que la música te lleve
          de vuelta a esos momentos mágicos.
        </p>
        <a
          href="https://youtu.be/0Kg5vcJv-So?si=yMIvgKIByZ5nIAxY"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-rose-200 mt-4 hover:bg-rose-300 text-rose-500 font-bold py-2 px-4 rounded inline-flex items-center transition duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1"
        >
          <FaPlay className="h-6 w-6" />{" "}
          {/* Usa el componente de React Icons */}
          <span className="ml-2">Reproducir</span>
        </a>
      </div>

      <div className="hidden md:block w-1/2 p-8 xl:p-20 md:order-2">
        {" "}
        {/* Imagen después en orden para pantallas grandes */}
        <img
          src="/music.png"
          alt="Imagen de fondo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido para pantallas pequeñas (oculto en pantallas grandes) */}
      <div className="md:hidden flex flex-col items-center justify-center p-8 pt-0 text-white text-center">
        <img
          src="/music.png"
          alt="Imagen de fondo"
          className="w-full h-auto sm:w-3/4 sm:h-3/4 mb-4"
        />
        <h1 className="text-3xl flex justify-center items-center gap-2 font-bold mb-4">
          Melodía de nuestro amor
          <GiHeartKey className="animate-pulse text-rose-400 md:h-24 md:w-24 xl:w-12 xl:h-12" />
        </h1>
        <p className="text-base">
          En estos 10 meses, nuestra historia se ha convertido en una hermosa
          canción llena de tosos esos sentimientos que quiero expresarte. Hoy,
          quiero regalarte esta canción que habla de nosotros, de nuestro amor.
          Escúchala con atención, cierra los ojos y deja que la música te lleve
          de vuelta a esos momentos mágicos.
        </p>
        <a
          href="https://youtu.be/0Kg5vcJv-So?si=yMIvgKIByZ5nIAxY"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-rose-200 mt-4 hover:bg-rose-300 text-rose-500 font-bold py-2 px-4 rounded inline-flex items-center transition duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1"
        >
          <FaPlay className="h-6 w-6" />{" "}
          {/* Usa el componente de React Icons */}
          <span className="ml-2">Reproducir</span>
        </a>
      </div>
    </section>
  );
};
