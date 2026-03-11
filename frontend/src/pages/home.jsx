import React from "react";
import { Link } from "react-router-dom";

const sections = [
  { name: "States Quiz", icon: "🧠", path: "/states" },
  { name: "Natural Features", icon: "🏔", path: "/natural" },
  { name: "National Parks", icon: "🌲", path: "/parks" },
  { name: "Nuclear Plants", icon: "☢", path: "/nuclear" },
  { name: "Production Quiz", icon: "🌾", path: "/producer" }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">

      {/* Header */}
      <header className="w-full max-w-6xl px-6 py-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">GeoPrep</h1>
      </header>

      {/* Hero Section */}
      <div className="max-w-3xl text-center mt-16 px-6">

        <h2 className="text-4xl font-semibold mb-6">
          Master Indian Geography for CDS & UPSC
        </h2>

        <p className="text-gray-600 mb-8">
          Practice interactive map-based questions on national parks,
          nuclear power plants, natural features, and state-wise production.
          Designed specifically for CDS, UPSC, and other competitive exams.
        </p>

        <Link
          to="/producer"
          className="bg-black text-white px-6 py-3 rounded-lg text-lg"
        >
          Indian Map
        </Link>
        <Link to ="/rocks" className="ml-4 bg-gray-800 text-white px-6 py-3 rounded-lg text-lg">
          Rocks
        </Link>
      </div>

     

      {/* Footer */}
      <footer className="mt-24 mb-6 text-gray-500 text-sm">
        Built for CDS & UPSC Aspirants
      </footer>

    </div>
  );
};

export default Home;