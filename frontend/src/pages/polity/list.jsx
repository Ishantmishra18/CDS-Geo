import React, { useState, useEffect } from "react";

// Sample data
import { lists } from "../../data/polity";

const categories = [
  "State List",
  "Union List",
  "Concurrent List",
];

const right = new Audio('/sounds/right.mp3');
const wrong = new Audio('/sounds/wrong.mp3');

const VennDiagram = ({ onSelectCategory }) => (
  <div className="flex justify-center items-center my-8 cursor-pointer">
    <svg width="300" height="200" viewBox="0 0 300 200" className="relative">
      {/* Circle 1: State List */}
      <circle
        cx="100"
        cy="100"
        r="60"
        fill="rgba(0, 123, 255, 0.3)"
        stroke="#007bff"
        strokeWidth="2"
        onClick={() => onSelectCategory("State List")}
      />
      <text
        x="100"
        y="80"
        textAnchor="middle"
        fill="#007bff"
        fontSize="14"
        fontWeight="bold"
        style={{ cursor: 'pointer' }}
        onClick={() => onSelectCategory("State List")}
      >
        State List
      </text>

      {/* Circle 2: Union List */}
      <circle
        cx="200"
        cy="100"
        r="60"
        fill="rgba(255, 99, 132, 0.3)"
        stroke="#ff6384"
        strokeWidth="2"
        onClick={() => onSelectCategory("Union List")}
      />
      <text
        x="200"
        y="80"
        textAnchor="middle"
        fill="#ff6384"
        fontSize="14"
        fontWeight="bold"
        style={{ cursor: 'pointer' }}
        onClick={() => onSelectCategory("Union List")}
      >
        Union List
      </text>

      {/* Intersection Label */}
      <text
        x="150"
        y="130"
        textAnchor="middle"
        fill="#333"
        fontSize="14"
        fontWeight="bold"
        style={{ cursor: 'pointer' }}
        onClick={() => onSelectCategory("Concurrent List")}
      >
        Concurrent List
      </text>
    </svg>
  </div>
);

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
    const shuffled = [...lists].sort(() => Math.random() - 0.5);
    setRockList(shuffled);
    setQuestion(shuffled[0]);
  }, []);

  const nextQuestion = () => {
    const nextIndex = index + 1;
    if (nextIndex < rockList.length) {
      setIndex(nextIndex);
      setQuestion(rockList[nextIndex]);
    } else {
      const reshuffled = [...lists].sort(() => Math.random() - 0.5);
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
      right.play();
      setTimeout(() => {
        setResultIcon(null);
        nextQuestion();
      }, 1000);
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    setResultIcon("wrong");
    wrong.play();
    setTimeout(() => {
      setResultIcon(null);
    }, 1000);

    if (newAttempts >= 3) {
      setShowAnswer(true);
    }
  };

  const handleVennClick = (category) => {
    checkResponse(category);
  };

  return (
    <div className="p-4 flex flex-col md:flex-row gap-6 justify-center items-center h-screen">
      {/* Venn Diagram */}
      <VennDiagram onSelectCategory={handleVennClick} />

      {/* Info Card */}
      <div className="text-center text-xl font-semibold">{question?.keyword}</div>

      {/* Options Buttons */}
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