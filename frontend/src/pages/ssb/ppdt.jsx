import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { MdRestartAlt } from 'react-icons/md';

const STAGES = {
  GALLERY: 'gallery',
  OBSERVATION: 'observation',
  NOTE: 'note',
  WRITING: 'writing',
  PREPARATION: 'preparation',
  NARRATION: 'narration',
};

const CONFIG = {
  [STAGES.OBSERVATION]: { duration: 30, label: 'Observation (30s)' },
  [STAGES.NOTE]: { duration: 60, label: 'Character Noting (1 min)' },
  [STAGES.WRITING]: { duration: 240, label: 'Story Writing (4 min)' },
  [STAGES.PREPARATION]: { duration: 120, label: 'Preparation (2 min)' },
  [STAGES.NARRATION]: { duration: 60, label: 'Narration (1 min)' },
};

const PPDTSimulator = () => {
  const [stage, setStage] = useState(STAGES.GALLERY);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const timerRef = useRef(null);

  const photos = Array.from({ length: 15 }, (_, i) => `/ssb/ppdt/${i + 1}.webp`);

  // TIMER
  useEffect(() => {
    if (stage === STAGES.GALLERY || isPaused) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleStageEnd();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [stage, isPaused]);

  // SET TIME
  useEffect(() => {
    if (stage !== STAGES.GALLERY) {
      setTimeLeft(CONFIG[stage]?.duration || 0);
    }
  }, [stage]);

  // FLOW
  const handleStageEnd = () => {
    if (stage === STAGES.OBSERVATION) setStage(STAGES.NOTE);
    else if (stage === STAGES.NOTE) setStage(STAGES.WRITING);
    else if (stage === STAGES.WRITING) setStage(STAGES.PREPARATION);
    else if (stage === STAGES.PREPARATION) setStage(STAGES.NARRATION);
    else reset();
  };

  const startTest = (src) => {
    setSelectedPhoto(src);
    setStage(STAGES.OBSERVATION);
    setIsPaused(false);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setStage(STAGES.GALLERY);
    setSelectedPhoto(null);
    setTimeLeft(0);
  };

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  // GALLERY
  if (stage === STAGES.GALLERY) {
    return (
      <div className="min-h-screen bg-white p-6">
        <h1 className="text-2xl font-bold mb-6 uppercase">PPDT Module</h1>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {photos.map((src, i) => (
            <div key={i} onClick={() => startTest(src)} className="cursor-pointer">
              <img src={src} className="w-full h-32 object-cover grayscale hover:grayscale-0" />
              <p className="text-center text-xs">Plate {i + 1}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // SIMULATOR
  return (
    <div className="h-screen w-screen bg-white flex flex-col overflow-hidden fixed inset-0">

      {/* HEADER */}
      <div className="text-center py-2 flex-shrink-0">
        <h2 className="text-sm md:text-lg font-bold uppercase tracking-widest">
          {CONFIG[stage].label}
        </h2>
        <div className="text-5xl md:text-7xl font-mono font-black">
          {formatTime(timeLeft)}
        </div>
      </div>

      {/* IMAGE AREA (FLEXIBLE) */}
      <div className="flex-1 flex items-center justify-center px-4 overflow-hidden">

        {stage === STAGES.OBSERVATION ? (
          <img
            src={selectedPhoto}
            className="max-h-full max-w-full object-contain"
            alt="Observation"
          />
        ) : (
          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold uppercase text-gray-400">
              {stage === STAGES.NOTE
                ? "Note Characters"
                : stage === STAGES.WRITING
                ? "Write Story"
                : stage === STAGES.PREPARATION
                ? "Prepare Narration"
                : "Narration"}
            </p>
            <p className="text-sm text-gray-300 mt-2">Image hidden</p>
          </div>
        )}

      </div>

      {/* CONTROLS */}
      <div className="flex justify-center gap-10 py-4 flex-shrink-0">

        {/* Pause */}
        <div className="flex flex-col items-center group">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="w-14 h-14 flex items-center justify-center border hover:bg-black hover:text-white transition"
          >
            {isPaused ? <FaPlay /> : <FaPause />}
          </button>
          <span className="text-xs mt-1 opacity-0 group-hover:opacity-100">Pause</span>
        </div>

        {/* Next */}
        <div className="flex flex-col items-center group">
          <button
            onClick={handleStageEnd}
            className="w-14 h-14 flex items-center justify-center border hover:bg-blue-600 hover:text-white transition"
          >
            ➡
          </button>
          <span className="text-xs mt-1 opacity-0 group-hover:opacity-100">Next</span>
        </div>

        {/* Reset */}
        <div className="flex flex-col items-center group">
          <button
            onClick={reset}
            className="w-14 h-14 flex items-center justify-center border hover:bg-red-600 hover:text-white transition"
          >
            <MdRestartAlt size={24} />
          </button>
          <span className="text-xs mt-1 opacity-0 group-hover:opacity-100">Gallery</span>
        </div>

      </div>
    </div>
  );
};

export default PPDTSimulator;