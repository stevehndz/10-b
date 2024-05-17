import React from "react";
import { GoHeartFill } from "react-icons/go";

export const Hero = () => {
  return (
    <section className="p-4 md:px-10 flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-56px)] md:min-h-screen text-gray-100">
      {/* Contenido para pantallas grandes: Texto a la izquierda, imagen a la derecha */}
      <div className="hidden md:block w-1/2 p-8 lg:p-16 text-white md:order-1">
        {" "}
        {/* Texto primero en orden para pantallas grandes */}
        <h1 className="text-4xl inline-flex gap-2 text-rose-500 md:text-6xl font-bold mb-4">
          10 Meses Juntos
          <GoHeartFill className="animate-pulse text-rose-400 md:h-24 md:w-24 xl:w-12 xl:h-12" />
        </h1>
        <p className="text-lg md:text-xl">
          Hoy celebramos 10 meses de un amor que ilumina nuestros días. Cada
          momento a tu lado es un regalo que atesoro en mi corazón.
        </p>
      </div>

      <div className="hidden md:block w-1/2 p-8 xl:p-20 md:order-2">
        {" "}
        {/* Imagen después en orden para pantallas grandes */}
        <img
          src="/banner.png"
          alt="Imagen de fondo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido para pantallas pequeñas (oculto en pantallas grandes) */}
      <div className="md:hidden flex flex-col items-center justify-center p-8 pt-0 text-white text-center">
        <img
          src="/banner.png"
          alt="Imagen de fondo"
          className="w-full h-auto sm:w-3/4 sm:h-3/4 mb-4"
        />
        <h1 className="text-3xl flex justify-center items-center gap-2 font-bold mb-4">
          10 Meses Juntos
          <GoHeartFill className="animate-pulse text-rose-400 md:h-24 md:w-24 xl:w-12 xl:h-12" />
        </h1>
        <p className="text-base">
          Hoy celebramos 10 meses de un amor que ilumina nuestros días. Cada
          momento a tu lado es un regalo que atesoro en mi corazón.
        </p>
      </div>
    </section>
  );
};
