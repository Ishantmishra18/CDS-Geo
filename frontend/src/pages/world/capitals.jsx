import React, { useState, useEffect } from 'react';
import WorldMapInfo from '../../components/wordMap';
import { capitalsData } from '../../data/world';
import Navbar from '../../components/world/nav';
import RightWrongUI from '../../components/rightWrongUI';

const Capitals = () => {
  const [capitalList, setCapitalList] = useState([]);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(null);

  // UI States
  const [resultIcon, setResultIcon] = useState(null); // 'correct' or 'wrong'
  const [attempts, setAttempts] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 1. Initialize and Shuffle
  useEffect(() => {
    const shuffled = [...capitalsData].sort(() => Math.random() - 0.5);
    setCapitalList(shuffled);
    setQuestion(shuffled[0]);

    // Mouse tracking logic
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 2. Navigation Logic
  const nextQuestion = () => {
    const nextIndex = (index + 1) % capitalList.length;
    setIndex(nextIndex);
    setQuestion(capitalList[nextIndex]);
    setAttempts(0);
    setShowAnswer(false);
    setResultIcon(null);
  };

  // 3. Response Checking Logic
  const checkResponse = (clickedCountry) => {
    if (!question || resultIcon) return;

    const isCorrect = clickedCountry === question.country;

    if (isCorrect) {
      // Play Sound
      new Audio('/sounds/right.mp3').play().catch(e => console.log("Audio play failed"));
      
      setResultIcon("correct");
      
      setTimeout(() => {
        nextQuestion();
      }, 1200);
    } else {
      // Play Sound
      new Audio('/sounds/wrong.mp3').play().catch(e => console.log("Audio play failed"));
      
      setResultIcon("wrong");
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      if (newAttempts >= 3) {
        setShowAnswer(true);
      }

      // Hide the 'X' after a moment so they can try again
      setTimeout(() => setResultIcon(null), 800);
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden cursor-crosshair">
      <div className="fixed top-4 left-4 text-2xl">Capital of Countries</div>
      {/* 4. Floating Question (Follows Cursor) */}
      <div 
        className="fixed pointer-events-none z-[100] px-3 py-1 bg-gray-100 border-2 border-gray-300 rounded-lg transition-transform duration-75 ease-out"
        style={{ 
          left: mousePos.x + 10, 
          top: mousePos.y + 10 
        }}
      >
        <p className="text-xl bold text-black">{question?.keyword}</p>
      </div>

      {/* 5. The Map */}
      <div className="flex items-center justify-center min-h-screen">
        <WorldMapInfo mode="country" onCountryClick={checkResponse} />
      </div>

         <RightWrongUI resultIcon={resultIcon} showAnswer={showAnswer} answer={question?.country} />

      <Navbar />
    </div>
  );
};

export default Capitals;