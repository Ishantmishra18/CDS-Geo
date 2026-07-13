import React, { useEffect, useState } from "react";
import { lists } from "../../data/polity";

const categories = ["State List", "Union List", "Concurrent List"];

const right = new Audio("/sounds/right.mp3");
const wrong = new Audio("/sounds/wrong.mp3");

const ListQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const question = questions[index];

  useEffect(() => {
    const shuffled = [...lists].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
  }, []);

  const nextQuestion = () => {
    if (index + 1 < questions.length) {
      setIndex((prev) => prev + 1);
    } else {
      const shuffled = [...lists].sort(() => Math.random() - 0.5);
      setQuestions(shuffled);
      setIndex(0);
    }

    setSelected(null);
    setAttempts(0);
    setShowAnswer(false);
    setResult(null);
  };

  const checkResponse = (category) => {
    if (!question) return;

    setSelected(category);

    if (category === question.under) {
      right.currentTime = 0;
      right.play();

      setResult("correct");

      setTimeout(() => {
        nextQuestion();
      }, 900);

      return;
    }

    wrong.currentTime = 0;
    wrong.play();

    setResult("wrong");

    setTimeout(() => setResult(null), 700);

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (newAttempts >= 3) {
      setShowAnswer(true);
    }
  };

  if (!question) return null;

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl p-8">

        <div className="flex justify-between text-sm text-gray-500 mb-8">
          <span>Polity Quiz</span>
          <span>
            {index + 1} / {questions.length}
          </span>
        </div>

        <h1 className="text-3xl font-bold text-center mb-10">
          {question.keyword}
        </h1>

        <div className="space-y-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => checkResponse(cat)}
              className={`w-full rounded-xl border-2 px-5 py-4 text-left font-medium transition-all duration-200
              
              ${
                selected === cat
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {showAnswer && (
          <div className="mt-8 rounded-lg bg-red-50 border border-red-200 p-4 text-center">
            <p className="text-sm text-red-600">Correct Answer</p>
            <p className="font-bold text-red-700">{question.under}</p>
          </div>
        )}

        {result === "correct" && (
          <div className="fixed top-10 right-10 text-6xl animate-bounce">
            ✅
          </div>
        )}

        {result === "wrong" && (
          <div className="fixed top-10 right-10 text-6xl animate-pulse">
            ❌
          </div>
        )}
      </div>
    </div>
  );
};

export default ListQuiz;