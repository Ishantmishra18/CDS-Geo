import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const items = [
  { name: "Home", icon: "🏠", path: "/" },
  { name: "Capitals", icon: "📍", path: "/world/capitals" },
  { name: "Producer", icon: "🌾", path: "/world/producer" },
  { name: "Natural", icon: "🏔", path: "/world/natural" },
  { name: "Currency", icon: "💰", path: "/world/currency" },
];

const Navbar = () => {
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      {/* --- MOBILE HAMBURGER BUTTON --- */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-[100] p-3 bg-gray-100 shadow-sm rounded-lg md:hidden flex flex-col justify-center items-center gap-1.5 w-12 h-12 border border-gray-100"
      >
        <span className={`h-0.5 w-6 bg-black transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`h-0.5 w-6 bg-black transition-all ${isOpen ? "opacity-0" : ""}`} />
        <span className={`h-0.5 w-6 bg-black transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* --- MOBILE OVERLAY --- */}
      <div className={`fixed inset-0 bg-white/95 z-[90] md:hidden transition-transform duration-300 flex flex-col items-center justify-center gap-8 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        {items.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-4 text-2xl font-medium text-gray-800"
          >
            <span className="text-4xl">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </div>

      {/* --- DESKTOP DOCK --- */}
      <div
        className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 h-[90vh] w-[70px] bg-gray-100 backdrop-blur-md shadow-lg rounded-lg  flex-col items-center justify-around py-10 border border-white/20 z-50"
      >
        {items.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="nav-item group relative flex flex-col items-center transition-all duration-200"
          >
            <span className="text-3xl filter drop-shadow-sm">{item.icon}</span>
            {/* Tooltip on hover */}
            <span className="absolute right-16 bg-gray-600 text-white text-lg px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;