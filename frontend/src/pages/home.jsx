import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const sections = [
    {
      title: "Geography & Maps",
      description: "Interactive map-based learning for national parks, rivers, and production.",
      links: [
        { name: "Indian Map", path: "/producer" },
        { name: "Rocks & Minerals", path: "/rocks" },
        { name: "World Map  ", path: "/world/capitals" },
      ],
      bgColor: "bg-emerald-50",
      accentColor: "text-emerald-700",
      borderColor: "border-emerald-200",
    },
    {
      title: "General Science",
      description: "High-yield Biology and Physics topics for the CDS General Science paper.",
      links: [
        { name: "Vitamins", path: "/bio/vit" },
        { name: "Biology Diseases", path: "/bio/disease" }
      ],
      bgColor: "bg-blue-50",
      accentColor: "text-blue-700",
      borderColor: "border-blue-200",
    },
    {
      title: "Defense & Strategic",
      description: "Military hardware, aircraft, and tactical knowledge for SSB & written exams.",
      links: [
        {name: "Military Ranks", path: "/military/ranks"},
        { name: "Military Equipment", path: "/military/equipment" },
        { name: "Awards & Honors", path: "/award" },
      ],
      
      bgColor: "bg-zinc-100",
      accentColor: "text-zinc-800",
      borderColor: "border-zinc-300",
    },
    {
      title: "SSB & Strategy",
      description: "Prepare for the SSB interview and written exams with our comprehensive strategy guides.",
      links: [
        { name: "PPDT", path: "/ssb/ppdt" },
      ],
      
      bgColor: "bg-blue-100",
      accentColor: "text-zinc-800",
      borderColor: "border-zinc-300",
    }, 
    {
      title: "Polity & Governance",
      description: "Understand the structure and functioning of the Indian government and its policies.",
      links: [
        { name: "Polity Articles", path: "/polity/article" },
        {name: "Lists" , path: "/polity/list"}
      ],
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Navigation Header */}
      <header className="w-full max-w-7xl px-8 py-10 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white font-black text-xl">G</div>
          <h1 className="text-2xl font-black tracking-tighter uppercase">GeoPrep</h1>
        </div>
        <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">Version 2026.1</span>
      </header>

      <main className="w-full max-w-7xl px-8">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <div className="flex-1 space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900">
              Master the <span className="text-blue-600">Syllabus</span> for Defense Exams.
            </h2>
            <p className="text-xl text-gray-500 max-w-xl leading-relaxed">
              Targeted practice modules for CDS, NDA, and AFCAT. From 1D-Genomic patterns to Indian topography, prepare with interactive precision.
            </p>
          </div>
          <div className="flex-1 w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <img src="/home/main.webp" alt="Exam Prep" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* Categories Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {sections.map((section, idx) => (
            <div 
              key={idx} 
              className={`${section.bgColor} ${section.borderColor} border rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-shadow`}
            >
              <div>
                <h3 className={`text-2xl font-bold mb-3 ${section.accentColor}`}>
                  {section.title}
                </h3>
                <p className="text-sm text-gray-600 mb-8 leading-relaxed italic">
                  {section.description}
                </p>
              </div>
              
              <div className="flex flex-col gap-3">
                {section.links.map((link, lIdx) => (
                  <Link
                    key={lIdx}
                    to={link.path}
                    className="group flex justify-between items-center bg-white border border-transparent hover:border-black/10 px-5 py-4 rounded-xl font-semibold text-gray-800 transition-all active:scale-95 shadow-sm"
                  >
                    {link.name}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-100 py-12 flex flex-col items-center gap-4">
        <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">
          Built for CDS & UPSC Aspirants
        </p>
        <div className="flex gap-6 text-xs text-gray-300">
          <span>Biology</span>
          <span>•</span>
          <span>Geography</span>
          <span>•</span>
          <span>Defense</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;