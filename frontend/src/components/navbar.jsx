import React, { useRef } from "react";
import { Link } from "react-router-dom";

const items = [
  { name: "Home", icon: "🧠", path: "/" },
  { name: "Natural visit", icon: "🏔", path: "/natural" },
  { name: "National Parks", icon: "🌲", path: "/parks" },
  { name: "Nuclear Plants", icon: "☢", path: "/nuclear" },
  { name: "Producer", icon: "🌾", path: "/producer" }
];

const Navbar = () => {

  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const items = containerRef.current.querySelectorAll(".nav-item");

    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const itemCenter = rect.top + rect.height / 2;

      const distance = Math.abs(e.clientY - itemCenter);

      const scale = Math.max(1, 1.6 - distance / 150);

      item.style.transform = `scale(${scale})`;
    });
  };

  const resetScale = () => {
    const items = containerRef.current.querySelectorAll(".nav-item");

    items.forEach((item) => {
      item.style.transform = "scale(1)";
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetScale}
      className="fixed md:right-2 rounded-xl md:top-1/2 md:-translate-y-1/2 md:h-[96vh] md:w-[90px] bottom-0 w-full p-2 right-0  bg-gray-200 flex md:flex-col items-center justify-between py-6 "
    >
      {items.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className="nav-item text-2xl flex flex-col items-center transition-all duration-200"
        >
          <span>{item.icon}</span>
          <span className="text-[10px] hidden mt-1">
            {item.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;