import React, { useEffect, useState } from 'react';
import WorldMapInfo from '../../components/wordMap';
import { natural } from '../../data/world'; 
import Navbar from '../../components/world/nav';
import RightWrongUI from '../../components/rightWrongUI';

const Producer = () => {
  const [productionList, setProductionList] = useState([]);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(null);

  // UI States
  const [resultIcon, setResultIcon] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // New States
  const [strictMode, setStrictMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Handle Responsiveness
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const shuffled = [...natural].sort(() => Math.random() - 0.5);
    setProductionList(shuffled);
    setQuestion(shuffled[0]);

    const handleMouseMove = (e) => {
      if (window.innerWidth >= 768) {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const nextQuestion = () => {
    const nextIndex = (index + 1) % productionList.length;
    setIndex(nextIndex);
    setQuestion(productionList[nextIndex]);
    setAttempts(0);
    setShowAnswer(false);
    setResultIcon(null);
  };

  const checkResponse = (clickedCountry) => {
    if (!question || resultIcon) return;
    const isCorrect = clickedCountry === question.country;

    if (isCorrect) {
      new Audio('/music/right.mp3').play().catch(() => {});
      setResultIcon("correct");
      setTimeout(nextQuestion, 1200);
    } else {
      new Audio('/music/wrong.mp3').play().catch(() => {});
      setResultIcon("wrong");
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      if (newAttempts >= 3) setShowAnswer(true);
      setTimeout(() => setResultIcon(null), 800);
    }
  };

  return (
    <div className={`relative min-h-screen bg-slate-50 overflow-hidden ${!isMobile ? 'cursor-crosshair' : ''}`}>
      
      {/* 1. Strict Mode Toggle */}
      <button 
        onClick={() => setStrictMode(!strictMode)}
        className="fixed top-4 left-4 z-[110] px-4 py-2 bg-black text-white text-xs font-bold rounded-full shadow-lg hover:bg-gray-800 transition-all"
      >
        {strictMode ? "STRICT: ON" : "STRICT: OFF"}
      </button>

      {/* 2. Floating/Fixed Card */}
      <div 
        className={`z-[100] bg-white border-2 border-gray-900 rounded-xl overflow-hidden shadow-2xl pointer-events-none transition-all duration-75
          ${isMobile 
            ? 'fixed top-16 left-1/2 -translate-x-1/2 w-[90%] max-w-sm' 
            : 'fixed w-64'
          }`}
        style={!isMobile ? { left: mousePos.x + 15, top: mousePos.y + 15 } : {}}
      >
        {/* Hide image if Strict Mode is ON */}
        {!strictMode && (
          <div className="w-full h-32 bg-gray-200">
            <img 
              src={`/world/natural/${question?.keyword}.webp`} 
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="p-4">
          <p className='text-[10px] uppercase font-black text-blue-600 tracking-tighter'>
            Largest {question?.type}
          </p>
          <h2 className="text-xl font-black text-gray-900 leading-tight mb-1">
            {question?.keyword}
          </h2>
          <p className="text-xs text-gray-600 leading-relaxed italic">
            {question?.description}
          </p>
        </div>
      </div>

      {/* 3. The Map & Feedback */}
      <div className="flex items-center justify-center min-h-screen pt-20 md:pt-0">
        <WorldMapInfo mode="country" onCountryClick={checkResponse} />
        
        <RightWrongUI 
          resultIcon={resultIcon} 
          showAnswer={showAnswer} 
          answer={question?.country} 
        />
      </div>

      <Navbar />
    </div>
  );
};

export default Producer;