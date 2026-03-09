import React, { useRef } from "react";
import { Link } from "react-router-dom";

const items = [
  { name: "States Quiz", icon: "🧠", path: "/states" },
  { name: "Mountain Ranges", icon: "🏔", path: "/mountains" },
  { name: "National Parks", icon: "🌲", path: "/parks" },
  { name: "Nuclear Plants", icon: "☢", path: "/nuclear" },
  { name: "Plateaus", icon: "⛰", path: "/plateaus" },
  { name: "Rivers", icon: "🌊", path: "/rivers" },
  { name: "Wildlife", icon: "🐅", path: "/wildlife" }
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
      className="fixed right-0 top-0 h-screen w-[90px] bg-gray-200 flex flex-col items-center py-6 gap-6"
    >
      {items.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className="nav-item text-2xl flex flex-col items-center transition-all duration-200"
        >
          <span>{item.icon}</span>
          <span className="text-[10px] mt-1">
            {item.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;