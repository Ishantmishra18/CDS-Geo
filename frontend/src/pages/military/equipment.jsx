import React from 'react'
import { AirCrafts } from '../../data/defence'

const equipment = () => {
  return (
    <div>
      <h2>Aircraft</h2>
      <ul>
        {AirCrafts.map((aircraft, index) => (
          <li key={index}>
            <strong>{aircraft.name}</strong> - {aircraft.country} ({aircraft.type})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default equipment