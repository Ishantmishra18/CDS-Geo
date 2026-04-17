import React from 'react';
import { bharatratna } from '../data/award';

const Award = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-16 px-4 md:px-8">
      {/* Page Header */}
      <div className="max-w-[1400px] mx-auto mb-20 text-center">
        {/* The Award Insignia Image */}
        <div className="flex justify-center mb-8">
          <img 
            src="/general/awards/bharatratna.webp" 
            alt="Bharat Ratna Insignia" 
            className="w-32 h-32 object-contain drop-shadow-xl"
          />
        </div>
        
        <h4 className="text-blue-700 uppercase tracking-[0.4em] text-xs font-black mb-4">
          The Highest Civilian Honor of India
        </h4>
        <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight mb-6 text-slate-900">
          Bharat Ratna <span className="text-blue-600 underline decoration-blue-200 underline-offset-8 italic">Awardees</span>
        </h1>
        <p className="max-w-2xl mx-auto text-slate-500 leading-relaxed font-medium">
          Recognizing exceptional service in any field of human endeavor. Established in 1954.
        </p>
      </div>

      {/* Grid Layout - 4 Columns on Large Screens */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bharatratna.map((item, index) => (
          <div 
            key={index} 
            className="group relative bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-blue-300 transition-all duration-500"
          >
            {/* Year Badge - Significantly Bigger */}
            <div className="absolute top-0 left-0 z-20 bg-blue-600 text-white px-5 py-3 rounded-br-2xl text-xl font-black tracking-tighter shadow-lg">
              {item.year}
            </div>

            {/* Image Container */}
            <div className="relative h-72 overflow-hidden bg-slate-100">
              <img 
                src={`general/figures/${item.name}.webp`} 
                alt={item.name} 
                className="w-full h-full object-cover object-top filter sepia-[0.2] group-hover:sepia-0 transition-all duration-700 scale-100 group-hover:scale-105"
              />
              {/* Soft Blue Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content Section */}
            <div className="p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-2 leading-tight min-h-[3rem]">
                {item.name}
              </h2>
              
              <div className="w-8 h-1 bg-blue-600 mb-4 group-hover:w-full transition-all duration-700 ease-in-out" />
              
              <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                {item.des}
              </p>

              {/* Action Link */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Biography</span>
                <button className="text-blue-600 text-xs font-black uppercase tracking-widest hover:text-blue-800 transition-colors">
                  View Details →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="mt-20 pt-10 border-t border-slate-200 text-center">
        <p className="text-slate-400 text-[10px] tracking-[0.3em] uppercase font-bold">
          Official Records: Ministry of Home Affairs, Govt. of India
        </p>
      </div>
    </div>
  );
};

export default Award;