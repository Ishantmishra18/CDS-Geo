import { useState, useEffect } from "react";
import IndiaMap from "../components/indiaMap";
import { nuclearPlants } from "../data/nuclear";
import Navbar from "../components/navbar";
import { IoIosNuclear } from "react-icons/io";
import AboutCard from "../components/aboutCard";
import { navIndia } from "../utility/navLinks";
import React from "react";

function App() {

  const [plants, setPlants] = useState([]);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(null);

  const [resultIcon, setResultIcon] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  // shuffle plants once
  useEffect(() => {
    const shuffled = [...nuclearPlants].sort(() => Math.random() - 0.5);
    setPlants(shuffled);
    setQuestion(shuffled[0]);
  }, []);

  const nextQuestion = () => {

    const nextIndex = index + 1;

    if (nextIndex < plants.length) {
      setIndex(nextIndex);
      setQuestion(plants[nextIndex]);
    } else {

      const reshuffled = [...nuclearPlants].sort(() => Math.random() - 0.5);
      setPlants(reshuffled);
      setIndex(0);
      setQuestion(reshuffled[0]);

    }

    setAttempts(0);
    setShowAnswer(false);
  };

  const checkResponse = (markerClicked) => {

    if (!question) return;

    // CORRECT ANSWER
    if (markerClicked.name === question.name) {

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

    if (newAttempts >= 3) {
      setShowAnswer(true);
    }

  };

  return (
    <div className="p-4 flex-col md:flex-row flex gap-6">

      {/* Question panel */}
      <AboutCard question="Locate the Nuclear Power Plant" keyword={question?.name} description={question?.description} img={question?.image} ></AboutCard>

      {/* Map */}
      <div className="relative">

        <IndiaMap
          mode="marker"
          markers={nuclearPlants}
          onMarkerClick={checkResponse}
          mark={<IoIosNuclear className="text-2xl text-gray-600" />}
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
            Correct Answer: <b>{question?.name}</b>
            
          </div>
        )}

      </div>

      <Navbar items={navIndia} />
      

    </div>
  );
}

export default App;