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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center overflow-x-hidden">
      
      {/* Header */}
      <header className="w-full max-w-7xl px-6 py-6 md:py-8 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">GeoPrep</h1>
      </header>

      {/* Main Content Container */}
      <main className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl px-6 lg:px-12 mt-8 lg:mt-16 gap-12">
        
        {/* Left: Hero Text Section */}
        <div className="flex flex-col text-center lg:text-left items-center lg:items-start max-w-2xl">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 mb-6">
            Master Geography for <span className="text-blue-600">CDS, NDA, & AFCAT</span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
            Practice interactive map-based questions on national parks,
            nuclear power plants, natural features, and state-wise production.
            Designed specifically for UPSC and other competitive exams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              to="/producer"
              className="bg-black text-white px-8 py-4 hover:bg-slate-800 hover:shadow-xl transition-all duration-300 rounded-xl text-lg font-medium text-center"
            >
              Indian Map
            </Link>
            <Link 
              to="/rocks" 
              className="bg-white border-2 border-slate-200 text-slate-900 px-8 py-4 hover:border-black hover:shadow-lg transition-all duration-300 rounded-xl text-lg font-medium text-center"
            >
              Rocks Quiz
            </Link>
          </div>
        </div>

        {/* Right: Hero Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-md lg:max-w-full aspect-square md:aspect-video lg:aspect-square">
            <img 
              src="/home/main.webp" 
              alt="Geography Practice Illustration"  
              className="w-full h-full object-contain drop-shadow-2xl animate-fade-in" 
            />
          </div>
        </div>
      </main>

      {/* Optional: Quick Access Grid (Using your sections array) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-6 mt-20 max-w-7xl w-full">
         {sections.map((s) => (
           <Link key={s.path} to={s.path} className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center border border-gray-100">
              <span className="text-2xl mb-2">{s.icon}</span>
              <span className="text-xs font-semibold text-gray-700">{s.name}</span>
           </Link>
         ))}
      </div>

      {/* Footer */}
      <footer className="mt-auto py-10 text-gray-400 text-sm font-medium">
        Built for <span className="text-gray-600">CDS & UPSC Aspirants</span>
      </footer>

    </div>
  );
};

export default Home;