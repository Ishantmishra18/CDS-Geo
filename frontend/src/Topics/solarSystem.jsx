import React from "react";

const SolarSystem = () => {
  const planets = [
    {
      name: "Mercury",
      size: 8,
      pos: 0,
      color: "bg-gray-400",
      img: "/planets/mercury.jpg",
      info: "Closest planet to the Sun and the smallest in the Solar System."
    },
    {
      name: "Venus",
      size: 12,
      pos: 12,
      color: "bg-yellow-300",
      img: "/planets/venus.jpg",
      info: "Hottest planet due to its thick greenhouse atmosphere."
    },
    {
      name: "Earth",
      size: 14,
      pos: 14,
      color: "bg-blue-500",
      img: "/planets/earth.jpg",
      info: "Our home planet and the only known planet with life."
    },
    {
      name: "Mars",
      size: 13,
      pos: 47,
      color: "bg-red-500",
      img: "/planets/mars.jpg",
      info: "The Red Planet with the largest volcano in the solar system."
    },
    {
      name: "Jupiter",
      size: 52,
      pos: -2,
      color: "bg-orange-300",
      img: "/planets/jupiter.jpg",
      info: "Largest planet and famous for the Great Red Spot storm."
    },
    {
      name: "Saturn",
      size: 30,
      pos: -5,
      color: "bg-yellow-200",
      img: "/planets/saturn.jpg",
      info: "Known for its spectacular ring system."
    },
    {
      name: "Uranus",
      size: 26,
      pos: 25,
      color: "bg-cyan-300",
      img: "/planets/uranus.jpg",
      info: "An ice giant that rotates on its side."
    },
    {
      name: "Neptune",
      size: 18,
      pos: -30,
      color: "bg-blue-400",
      img: "/planets/neptune.jpg",
      info: "The windiest planet with deep blue color due to methane."
    }
  ];

  return (
    <div className="relative  h-screen w-screen bg-black overflow-hidden">

      {/* Sun */}
      <div className="absolute -bottom-20 -left-24 w-96 h-96 rounded-full bg-yellow-300 shadow-[0_0_120px_60px_rgba(255,200,0,0.6)]"></div>

      {planets.map((planet, index) => (
        <div
          key={index}
          className="group absolute flex flex-col items-center"
          style={{
            bottom: `${planet.pos + 150 + index * 50}px`,
            left: `${300 + index * 130}px`,
            animation: `float ${4 + index * 0.5}s ease-in-out infinite`
          }}
        >

          {/* Planet */}
          <div
            className={`${planet.color} rounded-full`}
            style={{
              width: `${planet.size}px`,
              height: `${planet.size}px`
            }}
          />

          {/* Hover Card */}
          <div className="absolute bottom-8 w-40 bg-gray-900 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 p-2">

            <img
              src={planet.img}
              alt={planet.name}
              className="w-full h-20 object-cover rounded mb-1"
            />

            <div className="font-semibold text-center mb-1">
              {planet.name}
            </div>

            <p className="text-gray-300 text-[11px] leading-tight text-center">
              {planet.info}
            </p>

          </div>
        </div>
      ))}

      {/* Floating animation */}
      <style>
        {`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        `}
      </style>

    </div>
  );
};

export default SolarSystem;