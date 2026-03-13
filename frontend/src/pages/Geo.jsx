import React from 'react'
import WorldMapInfo from '../Topics/worldMapInfo'
import AboutCard from "../components/aboutCard";
import Navbar from "../components/navbar";
import { navWorld } from "../utility/navLinks";
import SolarSystem from '../Topics/solarSystem';

const Geo = () => {
  return (
    <div className="overflow-x-hidden">
        <div className="flex flex-col md:pr-20 md:items-start justify-center gap-4 md:flex-row ">
        <WorldMapInfo />
        <Navbar items={navWorld} />
    </div>
        <SolarSystem></SolarSystem>
    </div>
    
  )
}

export default Geo