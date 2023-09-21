import { useState } from "react";

function useCounterWithInterval(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const [intervalId, setIntervalId] = useState(null);

  const startInterval = (increment) => {
    clearInterval(intervalId); // important we need to stop running interval then start other interval

    const newIntervalId = setInterval(() => {
      setCount((prevCount) => prevCount + (increment ? 1 : -1));
    }, 1000);

    setIntervalId(newIntervalId);
  };

  const stopInterval = () => {
    clearInterval(intervalId); // clear nunning interval id
    setIntervalId(null); //reset back
  };

  return {
    count,
    startInterval,
    stopInterval
  };
}

export default useCounterWithInterval;
