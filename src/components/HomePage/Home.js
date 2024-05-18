import React from "react";
import { Hero } from "./Hero.js";
import { Message } from "./Message.js";

export const Home = () => {
  const banner = [
    { title: "10 meses contigo son...", message: "Diez meses contigo son como diez capítulos de una novela que no quiero que termine. Cada día a tu lado es una nueva aventura, llena de risas, complicidad y amor. Eres mi refugio, mi inspiración y mi mayor alegría.", image: "/img-1.png" },
    { title: "10 meses se van volando...", message: "Se fueron, pero nunca se olvidan, siempre voy a atesorar todo lo que hemos hecho juntos, y estoy seguro que lo que estás por encontrar más adelante te va a encantar. Sigue buscando más cosas mi amor <3.", image: "/img-2.png" },
  ];

  return (
    <div className="bg-gradient-to-br mb-14 md:mb-0 from-slate-800 to-slate-900 text-gray-100">
      <Hero />
      <Message
        title={banner[0].title}
        message={banner[0].message}
        img={banner[0].image}
      />
      <Message
        title={banner[1].title}
        message={banner[1].message}
        img={banner[1].image}
      />
    </div>
  );
};
