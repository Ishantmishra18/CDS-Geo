import React, { useState } from 'react';
import { AirCrafts } from '../../data/defence';

const Equipment = () => {
  const [index, setIndex] = useState(0);
  const data = AirCrafts[index];

  return (
    <div className="h-screen w-full bg-white text-slate-900 overflow-hidden flex flex-col font-sans">
      
      {/* Top Header / Navigation Bar */}
      <div className="h-[10vh] border-b border-blue-100 flex items-center justify-between px-10 bg-slate-50/50">
        <div className="flex items-center gap-6">
          <img 
            src={`/world/flags/${data.country}.webp`} 
            alt={data.country} 
            className="h-12 w-20 object-cover shadow-md border border-white" 
          />
          <div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter text-blue-900 leading-none">
              {data.name}
            </h1>
            <p className="text-[10px] font-bold text-blue-400 tracking-[0.3em] uppercase">Tactical Technical Briefing</p>
          </div>
        </div>
        
        {/* Simple Navigation Dots */}
        <div className="flex gap-2">
          {AirCrafts.map((_, i) => (
            <div 
              key={i} 
              onClick={() => setIndex(i)}
              className={`h-2 w-8 cursor-pointer transition-all ${i === index ? 'bg-blue-600' : 'bg-slate-200'}`}
            />
          ))}
        </div>
      </div>

      {/* Main Content Area (90% of screen) */}
      <div className="h-[90vh] flex">
        
        {/* Left Panel: Tech Specs & SSB Intel */}
        <div className="w-[60%] p-12 flex flex-col justify-between border-r border-blue-50">
          
          <div>
            <div className="flex gap-4 mb-8">
                <span className="bg-blue-600 text-white text-[10px] px-3 py-1 font-bold rounded-sm uppercase tracking-widest">{data.generation}</span>
                <span className="border border-blue-600 text-blue-600 text-[10px] px-3 py-1 font-bold rounded-sm uppercase tracking-widest">{data.type}</span>
            </div>
            
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8 border-l-4 border-blue-600 pl-6 italic">
              "{data.description}"
            </p>

            {/* Technical Grid for AFCAT/CDS written prep */}
            <div className="grid grid-cols-2 gap-y-10 gap-x-4">
              <div className="group">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Powerplant</p>
                <p className="text-lg font-bold text-slate-800">{data.engine}</p>
              </div>
              <div className="group">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Primary Sensors</p>
                <p className="text-lg font-bold text-slate-800">{data.radar}</p>
              </div>
              <div className="group">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Weapon Package</p>
                <p className="text-lg font-bold text-blue-700">{data.weapons}</p>
              </div>
              <div className="group">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Combat Radius</p>
                <p className="text-lg font-bold text-slate-800">{data.combatRadius}</p>
              </div>
            </div>
          </div>

          {/* SSB Relevant Section (Operations & Strategic Significance) */}
          <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100">
            <div className="mb-6">
               <h4 className="text-blue-900 font-black text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                 <div className="w-2 h-2 bg-blue-600 animate-pulse"></div> Past Operations
               </h4>
               <p className="text-slate-700 font-medium leading-snug">{data.operations}</p>
            </div>
            <div>
               <h4 className="text-blue-900 font-black text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                 <div className="w-2 h-2 bg-blue-600 animate-pulse"></div> Strategic Significance (AFSB)
               </h4>
               <p className="text-slate-700 font-medium leading-snug">{data.significance}</p>
            </div>
          </div>
        </div>

        {/* Right Panel: Visual Identification (IAF focus) */}
        <div className="w-[40%] bg-white p-4 flex flex-col gap-4">
            
                <img 
                    src={`/military/aircraft/${data.name.toLowerCase()}/top.webp`} 
                    alt="Aircraft" 
                    className="w-[85%] h-[85%] rounded-lg object-contain drop-shadow-2xl" 
                />

            <div className="h-[35%] flex gap-4">
                <div className="flex-1 bg-blue-50 rounded-3xl overflow-hidden">
                    <img 
                        src={`/military/aircraft/${data.name.toLowerCase()}/left.webp`} 
                        alt="Profile" 
                        className="w-full h-full object-cover" 
                    />
                </div>
                <div className="flex-1 bg-blue-900 rounded-3xl flex flex-col justify-end p-6 text-white relative overflow-hidden">
                    <h2 className="text-6xl font-black opacity-10 absolute -top-4 -left-4 uppercase italic">{data.name}</h2>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">Tail Code Identification</p>
                    <p className="text-xl font-black">RB-001 Series</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Equipment;