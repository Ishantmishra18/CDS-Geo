import React, { useState, useEffect } from "react";
import AboutCard from "../components/aboutCard";
import { rocks } from "../data/rocks";

const categories = [
  "Igneous Intrusive",
  "Igneous Extrusive",
  "Sedimentary",
  "Metamorphic"
];

const Rocks = () => {

  const [rockList, setRockList] = useState([]);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(null);

  const [selected, setSelected] = useState(null);
  const [resultIcon, setResultIcon] = useState(null);

  const [attempts, setAttempts] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  // shuffle once
  useEffect(() => {
    const shuffled = [...rocks].sort(() => Math.random() - 0.5);
    setRockList(shuffled);
    setQuestion(shuffled[0]);
  }, []);

  const nextQuestion = () => {

    const nextIndex = index + 1;

    if (nextIndex < rockList.length) {
      setIndex(nextIndex);
      setQuestion(rockList[nextIndex]);
    } else {
      const reshuffled = [...rocks].sort(() => Math.random() - 0.5);
      setRockList(reshuffled);
      setIndex(0);
      setQuestion(reshuffled[0]);
    }

    setAttempts(0);
    setShowAnswer(false);
    setSelected(null);
  };

  const checkResponse = (clickedCategory) => {

    if (!question) return;

    setSelected(clickedCategory);

    if (clickedCategory === question.category) {

      setResultIcon("correct");

      setTimeout(() => {
        setResultIcon(null);
        nextQuestion();
      }, 1000);

      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    setResultIcon("wrong");

    setTimeout(() => {
      setResultIcon(null);
    }, 1000);

    if (newAttempts >= 3) {
      setShowAnswer(true);
    }

  };

  return (
    <div className="p-4 flex  bg-blue-100 h-screen justify-center items-center flex-col md:flex-row gap-6">

      {/* Info Card */}
      <AboutCard
        key={index}
        question="Identify the Rock Category"
        keyword={question?.keyword}
        description={question?.description}
        img={question?.keyword ? `/rocks/${question.keyword}.webp` : "/rocks/default.webp"}
        stamp={[]}
      />

      {/* Options */}
      <div className="flex flex-col gap-4 justify-center">

        {categories.map((cat) => (

          <button
            key={cat}
            onClick={() => checkResponse(cat)}
            className={`px-6 py-3 rounded-lg border text-left transition
            ${selected === cat ? "bg-gray-200" : "bg-white hover:bg-gray-100"}`}
          >
            {cat}
          </button>

        ))}

        {showAnswer && (
          <div className="mt-4 text-sm text-red-600">
            Correct Answer: <b>{question?.category}</b>
          </div>
        )}

      </div>

      {/* Result Icons */}
      {resultIcon === "correct" && (
        <div className="fixed top-20 right-64  text-green-500 text-7xl animate-bounce">
          ✓
        </div>
      )}

      {resultIcon === "wrong" && (
        <div className="fixed top-20 right-64  text-red-500 text-7xl animate-bounce">
          ✕
        </div>
      )}

    </div>
  );
};

export default Rocks;