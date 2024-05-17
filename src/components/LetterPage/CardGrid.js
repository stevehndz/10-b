import React from "react";
import { Link } from "react-router-dom";

function Card({ icon, text, isSpecial }) {
  return (
    <Link to={isSpecial ? "/surprise" : "" }>
      <div
        className={`backdrop-blur-md rounded-lg shadow-md p-6 flex flex-col items-center ${
          isSpecial ? "text-rose-100 cursor-pointer" : ""
        }`}
      >
        <div className={`text-4xl mb-4 ${isSpecial ? "animate-pulse text-rose-300" : ""}`}>
          {icon}
        </div>{" "}
        {/* Icono */}
        <p className="text-center">{text}</p> {/* Texto */}
      </div>
    </Link>
  );
}

function CardGrid({ cards, backgroundImage }) {
  return (
    <div
      className="flex flex-col items-center justify-center p-4 mb-14 md:mt-14 md:mb-0 py-12 bg-cover bg-center text-gray-100"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="font-bold text-2xl md:text-4xl text-center">
        10 motivos para amarte
      </h1>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            text={card.text}
            isSpecial={card.special}
          />
        ))}
      </div>
    </div>
  );
}

export default CardGrid;
