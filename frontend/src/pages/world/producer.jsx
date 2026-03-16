import React, { useEffect, useState } from 'react';
import WorldMapInfo from '../../components/wordMap';
import { largestProduction } from '../../data/world'; 
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

  // 1. Initialize, Shuffle and Mouse Listener
  useEffect(() => {
    const shuffled = [...largestProduction].sort(() => Math.random() - 0.5);
    setProductionList(shuffled);
    setQuestion(shuffled[0]);

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 2. Navigation Logic
  const nextQuestion = () => {
    const nextIndex = (index + 1) % productionList.length;
    setIndex(nextIndex);
    setQuestion(productionList[nextIndex]);
    setAttempts(0);
    setShowAnswer(false);
    setResultIcon(null);
  };

  // 3. Response Checking Logic
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
    <div className="relative min-h-screen bg-slate-50 overflow-hidden cursor-crosshair">
      
      {/* 4. Floating Follow Label */}
        <div 
        className="fixed pointer-events-none z-[100] px-3 py-1 bg-gray-100 border-2 border-gray-300 rounded-lg transition-transform duration-75 ease-out"
        style={{ 
          left: mousePos.x + 10, 
          top: mousePos.y + 10 
        }}
      >
        <p className='text-gray-500'>largest {question?.type}</p>
        <p className="text-xl bold text-black">{question?.keyword}</p>
      </div>

      {/* 5. The Map & Feedback */}
      <div className="flex items-center justify-center min-h-screen">
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