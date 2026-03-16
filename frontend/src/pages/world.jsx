import React, { useEffect, useState } from 'react'
import WorldMapInfo from '../components/wordMap';
import AboutCard from "../components/aboutCard";
import Navbar from "../components/navbar";
import { navWorld } from "../utility/navLinks";
import SolarSystem from '../Topics/solarSystem';
import { data } from 'react-router-dom';
import { nav } from 'framer-motion/client';
import { straitsData, mountainsData, riversData, desertsData } from '../data/world';

const Geo = () => {

    const [currentTopic, setCurrentTopic] = useState(0);
    const [data , setData] = useState([]);
    const [question, setQuestion] = useState(null);
    const [attempts, setAttempts] = useState(0);
    const [resultIcon, setResultIcon] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false);
    
    const navWorld = [
        {name:"Straits", icon:"🌉"},
        {name:"Mountains", icon:"⛰️"},
        {name:"Rivers", icon:"🌊"},
        {name:"Deserts", icon:"🏜️"},
    ]

    const world = [
         {question :"Mark the givern straits on the map", data: straitsData},
        {question :"Mark the given mountains on the map", data: mountainsData},
        {question :"Mark the given rivers on the map", data: riversData},
        {question :"Mark the given deserts on the map", data: desertsData},
    ]
    useEffect(() => {
        const shuffled = [...world[currentTopic].data].sort(() => Math.random() - 0.5);
            setData(shuffled);
            setQuestion(shuffled[0]);
            console.log(question);
    }, [currentTopic]) 
    
    

  return (
    <div className="overflow-hidden p-2">
        <div className="flex flex-col md:pr-20 md:items-start justify-center gap-4 md:flex-row ">
        <AboutCard question={world[currentTopic].question} keyword={question?.keyword || ""} description={question?.description || "he"}></AboutCard>
        <WorldMapInfo mode="marker" markers={data} />
        <div className="flex flex-col fixed right-4 top-1/2 -translate-y-1/2 h-[90vh] w-[70px] bg-gray-100 backdrop-blur-md shadow-lg rounded-lg items-center justify-around py-10 border border-white/20 z-50">
        {navWorld.map((item, index) => (
            <button
                key={item.name}
                onClick={() => setCurrentTopic(index)}
                className={`p-2 rounded-lg ${currentTopic === index ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
            >
                <span className="text-2xl">{item.icon}</span><br />
                <span className="text-sm mt-1">{item.name}</span>
            </button>
        ))}
        </div>
    </div>
    </div>
    
  )
}

export default Geo