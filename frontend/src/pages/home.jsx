import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">

      {/* Header */}
      <header className="w-full max-w-6xl px-6 py-8 flex  justify-between items-center">
        <h1 className="text-2xl font-bold">GeoPrep</h1>
      </header>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row mx-10 justify-start">
         <div className="max-w-3xl flex flex-col justify-start mt-16 px-6">

        <h2 className="text-4xl font-semibold mb-6">
          Master Geography for CDS , NDA , & AFCAT
        </h2>

        <p className="text-gray-600 mb-8">
          Practice interactive map-based questions on national parks,
          nuclear power plants, natural features, and state-wise production.
          Designed specifically for CDS, UPSC, and other competitive exams.
        </p>

        <div className="flex mb-5">
           <Link
          to="/producer"
          className="bg-black text-white px-6 py-3 hover:shadow-2xl duration-150 rounded-lg text-lg"
        >
          Indian Map
        </Link>
        <Link to ="/rocks" className="ml-4 bg-black hover:shadow-2xl duration-150 text-white px-6 py-3 rounded-lg text-lg">
          Rocks
        </Link>
        <Link to='/world/capitals' className="ml-4 bg-black hover:shadow-2xl duration-150 text-white px-6 py-3 rounded-lg text-lg">
          World
        </Link>
        </div>

       
      </div>
      <div className="img md:w-[60vw] w-screen md:h-[60vh] h-[40vh]">
        <img src="/home/main.webp" alt=""  className="w-full h-full object-cover md:object-left" />
      </div>
      </div>
     

     

      {/* Footer */}
      <footer className="mt-24 mb-6 text-gray-500 text-sm">
        Built for CDS & UPSC Aspirants
      </footer>

    </div>
  );
};

export default Home;