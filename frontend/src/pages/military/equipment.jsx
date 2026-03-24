import React from 'react';
import { AirCrafts } from '../../data/defence';

const Equipment = () => {
  return (
    
    <div className="min-h-screen p-8">
      {AirCrafts.map(aircraft => (
        <div className="w-screen h-screen flex">
          <div className="cont w-[50vw]">
        <h1 className='text-6xl'>Rafale</h1>
        <p>{AirCrafts.find(aircraft => aircraft.name === 'Rafale')?.description}</p>
      </div>
      <div className="img h-[60vh] flex flex-col gap-2 w-[40vw]">
        <img src="/military/aircraft/rafale/top.webp" alt="Rafale" className='h-[60%] w-full' />
        <div className="down flex w-full gap-2 h-[40%]">
          <img src="/military/aircraft/rafale/left.webp" alt="Rafale" className='h-full w-[60%]' />
          <img src="/military/aircraft/rafale/right.webp" alt="Rafale" className='h-full w-[40%]' />
        </div>
      </div>
        </div>
      ))}
      
    </div>
  );
};

export default Equipment;
