import React, { useState, useEffect } from "react";
import AboutCard from "../../components/aboutCard";
import { vitamins } from "../../data/bio";
import RightWrongUI from "../../components/rightWrongUI";

const fatSoluble = ["A", "D", "E", "K"];
const waterSoluble = ["B1", "B2", "B3", "B5", "B6", "B7", "B9", "B12", "C"];

const VitaminsQuiz = () => {
  const [vitaminList, setVitaminList] = useState([]);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(null);
  const [selected, setSelected] = useState(null);
  const [resultIcon, setResultIcon] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const shuffled = [...vitamins].sort(() => Math.random() - 0.5);
    setVitaminList(shuffled);
    setQuestion(shuffled[0]);
  }, []);

  const nextQuestion = () => {
    const nextIndex = index + 1;
    if (nextIndex < vitaminList.length) {
      setIndex(nextIndex);
      setQuestion(vitaminList[nextIndex]);
    } else {
      const reshuffled = [...vitamins].sort(() => Math.random() - 0.5);
      setVitaminList(reshuffled);
      setIndex(0);
      setQuestion(reshuffled[0]);
    }
    setAttempts(0);
    setShowAnswer(false);
    setSelected(null);
  };

  const checkResponse = (clickedAns) => {
    if (!question) return;
    setSelected(clickedAns);

    if (clickedAns === question.ans) {
      setResultIcon("correct");
      new Audio('/sounds/right.mp3').play();
      setTimeout(() => {
        setResultIcon(null);
        nextQuestion();
      }, 1000);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      setResultIcon("wrong");
      new Audio('/sounds/wrong.mp3').play();
      setTimeout(() => setResultIcon(null), 1000);
      if (newAttempts >= 3) setShowAnswer(true);
    }
  };

  const renderButtons = (list, title, color) => (
    <div className="flex flex-col gap-2">
      <h4 className={`text-xs font-bold uppercase tracking-widest ${color}`}>{title}</h4>
      <div className="grid grid-cols-3 gap-2">
        {list.map((cat) => (
          <button
            key={cat}
            onClick={() => checkResponse(cat)}
            className={`py-3 px-2 rounded-lg border text-sm font-bold transition-all
            ${selected === cat ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 border-gray-200 hover:border-blue-400"}`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-6 min-h-screen bg-slate-50 flex flex-col md:flex-row items-center justify-center gap-10">
      
      {question && (
        <AboutCard
          question={question?.type === 'dis' ? "Deficiency Disease Analysis" : "Chemical Nomenclature"}
          keyword={question?.keyword}
          description={question?.type === 'dis' ? question?.des : "Identify the vitamin associated with this biological name."}
          img={question?.type === 'dis' ? `/bio/diseases/${question?.keyword}.webp` : null}
        />
      )}

      <div className="w-full max-w-md flex flex-col gap-6">
        {renderButtons(fatSoluble, "Fat Soluble (A, D, E, K)", "text-orange-500")}
        {renderButtons(waterSoluble, "Water Soluble (B-Complex, C)", "text-blue-500")}
      </div>

      <RightWrongUI resultIcon={resultIcon} showAnswer={showAnswer} answer={question?.ans} />
    </div>
  );
};

export default VitaminsQuiz;