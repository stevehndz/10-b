import React, { useState, useEffect } from "react";
import {
  BiSolidHomeHeart,
  BiHeart,
  BiMusic,
} from "react-icons/bi";
import { BsEnvelopeHeartFill } from "react-icons/bs";
import { Link, Navigate, useLocation } from "react-router-dom"; // Import Link

export const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    setIsSmallScreen(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsSmallScreen(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <nav
      className={`fixed ${
        isSmallScreen ? "bottom-0" : "top-0"
      } w-full bg-gradient-to-r from-rose-500 to-pink-500 backdrop-blur-md z-50`}
    >
      <div
        className={`container mx-auto flex ${
          isSmallScreen
            ? "flex-col items-center justify-center"
            : "justify-between items-center"
        } py-4 md:py-3 px-6 md:px-10`}
      >
        {" "}
        {/* Changes here */}
        {!isSmallScreen && (
          <Link to="/">
            <h1 className="flex gap-1 items-center justify-center font-bold text-xl text-gray-100 hover:text-rose-900 ease-in-out duration-300 cursor-pointer">
              10 meses
              <BiHeart className="animate-pulse text-rose-100" />
            </h1>
          </Link>
        )}
        <div className={`flex ${isSmallScreen ? "space-x-10" : "space-x-4"}`}>
          {!isSmallScreen && (
            <>
              <Link
                to="/home"
                className={`text-gray-100 font-semibold text-lg px-4 py-1 rounded-lg hover:bg-gray-100 hover:text-rose-400 ease-in-out duration-300 ${
                  activeLink === "/home" ? "bg-slate-800" : ""
                }`}
              >
                Inicio
              </Link>
              <Link
                to="/letter"
                className={`text-gray-100 font-semibold text-lg px-4 py-1 rounded-lg hover:bg-gray-100 hover:text-rose-400 ease-in-out duration-300 ${
                  activeLink === "/letter" ? "bg-slate-800" : ""
                }`}
              >
                Carta
              </Link>
              <Link
                to="/music"
                className={`text-gray-100 font-semibold text-lg px-4 py-1 rounded-lg hover:bg-gray-100 hover:text-rose-400 ease-in-out duration-300 ${
                  activeLink === "/music" ? "bg-slate-800" : ""
                }`}
              >
                Canción
              </Link>
            </>
          )}
          {isSmallScreen && (
            <>
              <Link to="/home">
                <BiSolidHomeHeart
                  className={`hover:text-gray-100 focus:text-rose-300 h-6 w-6 ease-in-out duration-300 ${
                    activeLink === "/home"
                      ? "animate-pulse text-gray-100"
                      : "text-slate-800"
                  }`}
                />
              </Link>
              <Link to="/letter">
                <BsEnvelopeHeartFill
                  className={`hover:text-gray-100 focus:text-rose-300 h-6 w-6 ease-in-out duration-300 ${
                    activeLink === "/letter"
                      ? "animate-pulse text-gray-100"
                      : "text-slate-800"
                  }`}
                />
              </Link>
              <Link to="/music">
                <BiMusic
                  className={`hover:text-gray-100 focus:text-rose-300 h-6 w-6 ease-in-out duration-300 ${
                    activeLink === "/music"
                      ? "animate-pulse text-gray-100"
                      : "text-slate-800"
                  }`}
                />
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
