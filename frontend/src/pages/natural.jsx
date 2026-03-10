import { useState, useEffect } from "react";
import { naturalFeatures } from "../data/natural";
import Navbar from "../components/navbar";
import AboutCard from "../components/aboutCard";
import IndiaMap from "../components/indiaMap";
import React from "react";

const Natural = () => {

  const [parks, setParks] = useState([]);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(null);

  const [selectedState, setSelectedState] = useState(null);
  const [resultIcon, setResultIcon] = useState(null);

  const [attempts, setAttempts] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  // shuffle parks once
  useEffect(() => {

    const shuffled = [...naturalFeatures].sort(() => Math.random() - 0.5);
    setParks(shuffled);
    setQuestion(shuffled[0]);

  }, []);

  const nextQuestion = () => {

    const nextIndex = index + 1;

    if (nextIndex < parks.length) {

      setIndex(nextIndex);
      setQuestion(parks[nextIndex]);

    } else {

      const reshuffled = [...naturalFeatures].sort(() => Math.random() - 0.5);
      setParks(reshuffled);
      setIndex(0);
      setQuestion(reshuffled[0]);

    }

    // reset states
    setAttempts(0);
    setShowAnswer(false);
    setSelectedState(null);

  };

  const checkResponse = (clickedState) => {

    if (!question) return;

    const correctState = question.state;

    setSelectedState(clickedState);

    // CORRECT ANSWER
    if (clickedState === correctState) {

      setResultIcon("correct");

      setTimeout(() => {
        setResultIcon(null);
        nextQuestion();
      }, 1000);

      return;
    }

    // WRONG ANSWER
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    setResultIcon("wrong");

    setTimeout(() => {
      setResultIcon(null);
    }, 1000);

    // after 3 wrong attempts reveal answer
    if (newAttempts >= 3) {
      setShowAnswer(true);
    }

  };

  return (
    <div className="flex flex-col md:flex-row p-4 gap-6">

      <AboutCard
        img={`/natural/${question?.keyword}.webp`}
        question = "Which state is this located in?"
        keyword={question?.keyword}
        description={question?.description}
      />

      <div className="relative">

        <IndiaMap
          mode="state"
          onStateClick={checkResponse}
          correctState={showAnswer ? question?.state : null}
        />

        {resultIcon === "correct" && (
          <div className="absolute top-10 left-1/2 -translate-x-1/2 text-green-500 text-7xl animate-bounce">
            ✓
          </div>
        )}

        {resultIcon === "wrong" && (
          <div className="absolute top-10 left-1/2 -translate-x-1/2 text-red-500 text-7xl animate-bounce">
            ✕
          </div>
        )}

        {showAnswer && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white shadow-lg px-4 py-2 rounded-lg text-sm">
            Correct State: <b>{question?.state}</b>
          </div>
        )}

      </div>

      <Navbar />

    </div>
  );
};

export default Natural;