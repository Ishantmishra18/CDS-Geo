import React, { useState, useEffect } from "react";
import AboutCard from "../../components/aboutCard";
import { diseases } from "../../data/bio";
import RightWrongUI from "../../components/rightWrongUI";

const micronism = ["bacteria", "virus", "fungi", "protozoa"];

const VitaminsQuiz = () => {
  const [diseaseList, setDiseaseList] = useState([]);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(null);
  const [selected, setSelected] = useState(null);
  const [resultIcon, setResultIcon] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const shuffled = [...diseases].sort(() => Math.random() - 0.5);
    setDiseaseList(shuffled);
    setQuestion(shuffled[0]);
  }, []);

  const nextQuestion = () => {
    const nextIndex = index + 1;
    if (nextIndex < diseaseList.length) {
      setIndex(nextIndex);
      setQuestion(diseaseList[nextIndex]);
    } else {
      const reshuffled = [...diseases].sort(() => Math.random() - 0.5);
      setDiseaseList(reshuffled);
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


  return (
    <div className="p-6 min-h-screen bg-slate-50 flex flex-col md:flex-row items-center justify-center gap-10">
      
      {question && (
        <AboutCard
          question="Identify the microorganism causing the disease:"
          keyword={question?.keyword}
          description={question?.des}
          img={`/bio/diseases/${question?.keyword}.webp`}
        />
      )}

       {micronism.map((micro) => (

          <button
            key={micro}
            onClick={() => checkResponse(micro)}
            className={`px-6 py-3 capitalize rounded-lg border text-left transition
            ${selected === micro ? "bg-gray-200" : "bg-white hover:bg-gray-100"}`}
          >
            {micro}
          </button>

        ))}

      <RightWrongUI resultIcon={resultIcon} showAnswer={showAnswer} answer={question?.ans} />
    </div>
  );
};

export default VitaminsQuiz;