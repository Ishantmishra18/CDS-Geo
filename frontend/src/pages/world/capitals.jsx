import React, { useState, useEffect } from 'react';
import WorldMapInfo from '../../components/wordMap';
import { capitalsData } from '../../data/world';
import Navbar from '../../components/world/nav';

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
      new Audio('/music/right.mp3').play().catch(e => console.log("Audio play failed"));
      
      setResultIcon("correct");
      
      setTimeout(() => {
        nextQuestion();
      }, 1200);
    } else {
      // Play Sound
      new Audio('/music/wrong.mp3').play().catch(e => console.log("Audio play failed"));
      
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
      
      {/* 4. Floating Question (Follows Cursor) */}
      <div 
        className="fixed pointer-events-none z-[100] px-4 py-2 bg-white border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-75 ease-out"
        style={{ 
          left: mousePos.x + 20, 
          top: mousePos.y + 20 
        }}
      >
        <p className="text-[10px] font-bold uppercase text-gray-400">Identify Country of:</p>
        <p className="text-xl font-black text-black">{question?.keyword}</p>
      </div>

      {/* 5. The Map */}
      <div className="flex items-center justify-center min-h-screen">
        <WorldMapInfo mode="country" onCountryClick={checkResponse} />
      </div>

      {/* 6. Visual Feedback Overlay */}
      {resultIcon && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[110]">
          <div className={`w-40 h-40 rounded-full bg-white shadow-2xl flex items-center justify-center border-8 animate-bounce 
            ${resultIcon === 'correct' ? 'border-green-500' : 'border-red-500'}`}>
            <span className={`text-8xl font-bold ${resultIcon === 'correct' ? 'text-green-500' : 'text-red-500'}`}>
              {resultIcon === 'correct' ? '✓' : '✕'}
            </span>
          </div>
        </div>
      )}

      {/* 7. Answer Reveal */}
      {showAnswer && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-black text-white px-8 py-3 rounded-full font-bold shadow-2xl z-50 animate-pulse">
          ANSWER: {question?.country}
        </div>
      )}

      <Navbar />
    </div>
  );
};

export default Capitals;