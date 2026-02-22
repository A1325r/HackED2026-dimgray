import { useState, useEffect, useRef } from "react";

// hook to time game
const GameTimer = (secondDur) => {
const [elapsedTime, setElapsedTime] = useState(0);
const [isRunning, setIsRunning] = useState(false);
const intervalRef = useRef(null);

  // starting from 0
const start = () => {
    setElapsedTime(0);
    setIsRunning(true);
};

  // timer pause
const pause = () => {
    setIsRunning(false);
};

  // resume timer
const resume = () => {
    setIsRunning(true);
};

  // reset timer
const reset = () => {
    setIsRunning(false);
    setElapsedTime(0);
};

useEffect(() => {
    if (isRunning) {
        intervalRef.current = setInterval(() => {
        setElapsedTime(prev => {
            const next = prev + 0.05; // increment by 0.05s
            return next >= secondDur ? secondDur : next; // no longer increases if timer duration time is reached (aka 67 yippee)
        });
      }, 50); // means 50ms interval
    }
    return () => clearInterval(intervalRef.current);
}, [isRunning, secondDur]);

  // automaticcaly stop at durationemd
useEffect(() => {
    if (elapsedTime >= secondDur) {
        setIsRunning(false);
        setElapsedTime(secondDur);
    }
}, [elapsedTime, secondDur]);

  // shows curr progress as a percentage
  const progress = (elapsedTime / secondDur) * 100;


return {
    elapsedTime,
    progress,
    isRunning,
    start,
    pause,
    resume,
    reset,
    secondDur,
    };
};

export default GameTimer;