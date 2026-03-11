import React, { useState } from "react";

const AboutCard = ({ question, keyword, description, img, stamp = [] }) => {

  const [strictMode, setStrictMode] = useState(false);

  return (
    <div className="bout relative md:w-[40vw] w-full md:p-5 md:pb-24 p-5 pb-12 rounded-lg bg-gray-100">

      {/* Image (hidden in strict mode) */}
      {!strictMode && (
        <img
          src={img}
          alt=""
          className="w-full aspect-video rounded-lg mb-5 object-cover"
        />
      )}

      <h5 className="text-sm font-semibold text-gray-600">{question}</h5>

      <h3 className="md:text-3xl text-2xl  mt-2">{keyword}</h3>

      <p className="text-gray-600 md:text-lg text-sm">{description}</p>

      {/* Stamps */}
      <div className="mark flex mt-5 gap-2">
        {stamp.map((s, i) => (
          <img key={i} src={`/stamp/${s}.png`} alt="" className="h-12" />
        ))}
      </div>

      {/* Toggle */}
      <div className="absolute md:right-6 md:bottom-6 right-3 bottom-3">

        <button
          onClick={() => setStrictMode(!strictMode)}
          className={`px-3 py-1 rounded-full text-sm transition 
          ${strictMode ? "bg-gray-500 text-white" : "bg-gray-300"}`}
        >
          {strictMode ? "Strict Mode ON" : "Strict Mode OFF"}
        </button>

      </div>

    </div>
  );
};

export default AboutCard;