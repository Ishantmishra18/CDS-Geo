import React, { useState, useEffect } from 'react';

const RankingGame = () => {
  // 1. Data Structure - Ranks listed in CORRECT Ascending Order (Lowest to Highest)
  const rankingData = {
    army: [
      "Lieutenant", "Captain", "Major", "Lieutenant Colonel", 
      "Colonel", "Brigadier", "Major General", "Lieutenant General", "General"
    ],
    navy: [
      "Sub Lieutenant", "Lieutenant", "Lieutenant Commander", "Commander", 
      "Captain", "Commodore", "Rear Admiral", "Vice Admiral", "Admiral"
    ],
    airforce: [
      "Flying Officer", "Flight Lieutenant", "Squadron Leader", "Wing Commander", 
      "Group Captain", "Air Commodore", "Air Vice Marshal", "Air Marshal", "Air Chief Marshal"
    ]
  };

  const [currentService, setCurrentService] = useState('airforce');
  const [shuffledRanks, setShuffledRanks] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0); 
  const [message, setMessage] = useState("Select the ranks in Ascending Order");
  const [isRankModalOpen, setIsRankModalOpen] = useState(false);

  // 2. Initialize or Reset Game
  const initializeGame = (service) => {
    const original = rankingData[service];
    // Fisher-Yates shuffle for true randomness
    const shuffled = [...original].sort(() => Math.random() - 0.5);
    setShuffledRanks(shuffled);
    setSelectedIndex(0);
    setCurrentService(service);
    setMessage(`Target: Find the lowest ${service} rank`);
  };

  useEffect(() => {
    initializeGame('airforce');
  }, []);

  // 3. Logic to check the rank clicked
  const handleRankClick = (rank) => {
    const correctOrder = rankingData[currentService];
    
    if (rank === correctOrder[selectedIndex]) {
      const nextIndex = selectedIndex + 1;
      setSelectedIndex(nextIndex);
      
      if (nextIndex === correctOrder.length) {
        setMessage("Excellent! Hierarchy Mastered.");
      } else {
        setMessage(`Correct! Now find the rank above ${rank}`);
      }
    } else {
      setMessage("Incorrect Order. Resetting progress...");
      setTimeout(() => setSelectedIndex(0), 1000); 
    }
  };

  return (
    <div className="h-screen w-full bg-white flex flex-col items-center justify-center p-6 font-sans overflow-hidden relative selection:bg-blue-100">
      
      {/* --- TOP RIGHT REFERENCE BUTTON --- */}
      <div className="absolute top-8 right-8">
        <button 
          onClick={() => setIsRankModalOpen(true)}
          className="flex items-center gap-2 bg-white border border-blue-100 px-5 py-2.5 rounded-2xl shadow-sm hover:shadow-md hover:bg-blue-50 transition-all group"
        >
          <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:animate-ping"></div>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">View Ranks</span>
        </button>
      </div>

      {/* --- RANK MODAL (Reference Image) --- */}
      {isRankModalOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[100] flex items-center justify-center p-6"
          onClick={() => setIsRankModalOpen(false)}
        >
          <div 
            className="bg-white rounded-[2rem] p-6 max-w-5xl w-full shadow-2xl relative animate-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsRankModalOpen(false)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-red-50 hover:text-red-600 w-10 h-10 rounded-full font-bold flex items-center justify-center transition-colors"
            >
              ✕
            </button>
            <img 
              src="/military/ranks/ranks.jpg" 
              alt="Rank Chart" 
              className="h-[90vh] rounded-xl "
            />
            <p className="text-center mt-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Equivalent Ranks: Use this to study for OIR and SSB Interviews
            </p>
          </div>
        </div>
      )}

      {/* --- GAME HEADER --- */}
      <div className="text-center mb-12">
        <h2 className="text-6xl font-black text-slate-900 uppercase tracking-tighter italic">
          Rank <span className="text-blue-600">Ascension</span>
        </h2>
        <div className="mt-4 inline-block px-4 py-1 bg-blue-50 rounded-full">
           <p className="text-[11px] font-bold text-blue-600 uppercase tracking-[0.2em]">
             {message}
           </p>
        </div>
      </div>

      {/* --- THE SHUFFLED RANK GRID --- */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl w-full mb-16 px-4">
        {shuffledRanks.map((rank) => {
          const isCorrectlySelected = rankingData[currentService].indexOf(rank) < selectedIndex;
          
          return (
            <button
              key={`${currentService}-${rank}`}
              disabled={isCorrectlySelected}
              onClick={() => handleRankClick(rank)}
              className={`h-24 rounded-3xl font-black text-xs uppercase tracking-widest transition-all duration-300 border-2
                ${isCorrectlySelected 
                  ? 'bg-blue-600 border-blue-600 text-white scale-95 opacity-40 shadow-inner' 
                  : 'bg-white border-blue-50 text-slate-700 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 active:scale-95'}
              `}
            >
              {rank}
            </button>
          );
        })}
      </div>

      {/* --- SERVICE SELECTION (CONTROL BAR) --- */}
      <div className="flex gap-2 bg-slate-100 p-2 rounded-[2rem] shadow-inner">
        {['army', 'navy', 'airforce'].map((service) => (
          <button
            key={service}
            onClick={() => initializeGame(service)}
            className={`px-10 py-4 rounded-[1.8rem] text-[10px] font-black uppercase tracking-[0.2em] transition-all
              ${currentService === service 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-slate-400 hover:text-slate-600'}
            `}
          >
            {service}
          </button>
        ))}
      </div>

      {/* --- PROGRESS BAR (Bottom Fixed) --- */}
      <div className="fixed bottom-0 left-0 w-full h-1.5 bg-slate-100">
        <div 
          className="h-full bg-blue-600 transition-all duration-700 ease-out" 
          style={{ width: `${(selectedIndex / rankingData[currentService].length) * 100}%` }}
        ></div>
      </div>

    </div>
  );
};

export default RankingGame;