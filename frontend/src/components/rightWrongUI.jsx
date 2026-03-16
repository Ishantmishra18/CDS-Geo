import React from 'react'

const rightWrongUI = ({ resultIcon, showAnswer, answer}) => {
  return (
    <div>
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
            Correct State: <b>{answer}</b>
          </div>
        )}
    </div>
  )
}

export default rightWrongUI