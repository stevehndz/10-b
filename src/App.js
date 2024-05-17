import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Importa Navigate
import { Navbar } from "./components/Navbar.js";
import { Home } from "./components/HomePage/Home.js";
// import Acerca from './Acerca';
import { Music } from "./components/MusicPage/Music.js";
import { Collage } from "./components/EasterPage/Collage.js";

import { FaSmileBeam, FaHeartbeat, FaHeart, FaPlane, FaTrophy, FaParachuteBox, FaHome, FaHandHoldingHeart } from "react-icons/fa"; // Ejemplo de iconos¨
import {GiLovers} from "react-icons/gi";
import {MdElderlyWoman} from "react-icons/md";
import CardGrid from "./components/LetterPage/CardGrid.js";

function App() {
  const photos = [
    "/surprise-1.jpg",
    "/surprise-2.jpg",
    "/surprise-1.jpg",
    "/surprise-2.jpg",
    // ...more photo URLs
  ];

  const cards = [
    { icon: <FaSmileBeam />, text: "Adoro tu sentido del humor. Siempre sabes cómo hacerme reír, con cada gesto, con cada frase, siendo tu me haces sonreir", special: false },
    { icon: <FaHeartbeat />, text: "Cuando te miro, siento que mi corazon se acelera, no hace falta ejercicio para tener un ritmo alto, solo falta mirar esos hermosos ojitos", special: true },
    { icon: <FaHandHoldingHeart />, text: "Aprecio todo lo que puedes llegar a hacer por mi, que me cuides mucho, que te preocupes por mi siempre, que estés dispuesta a todo por mi", special: false },
    { icon: <FaPlane />, text: "Me encanta tu forma tan curiosa de ser, que siempre intentas algo nuevo, que te impresiona todo, que quieres ir a recorrer el mundo conmigo", special: false },
    { icon: <FaTrophy />, text: "Me haces sentir que puedo lograr cualquier cosa, y también por eso siempre quiero ayudarte a ti para que sepas de lo que eres capaz", special: false },
    { icon: <FaParachuteBox />, text: "Admiro tus sueños y metas. Creo en ti y sé que puedes lograrlos. Estoy aquí para ayudarte con todo", special: false },
    { icon: <FaHome />, text: "Me encanta siempre recodar momentos tan especiales contigo, sueños, proyectos que tenemos para más adelante", special: false },
    { icon: <GiLovers />, text: "Tenemos una conexión especial que no puedo explicar con palabras. Me encanta la forma en que nos complementamos", special: false },
    { icon: <MdElderlyWoman />, text: "No imagino una vida sin ti. Tenemos que vivir todo este tiempo y envejecer juntos, amándote cada día más", special: false },
    { icon: <FaHeart />, text: "Te amo más de los que las palabras lo pudiesen expresar, eres el amor de mi vida. Gracias por amarme como soy", special: false },
    // ... más tarjetas
  ];

  const backgroundImage = "/card-banner.jpg";

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/letter" element={<CardGrid cards={cards} backgroundImage={backgroundImage} />} />
        <Route path="/surprise" element={<Collage photos={photos} />} />
        <Route path="/music" element={<Music />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}

export default App;
