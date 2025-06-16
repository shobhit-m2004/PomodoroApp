import React, { useState, useEffect, useContext } from "react";
import { TimerContext } from "../contextApi/TimerContext";
import { PlaceContext } from "../contextApi/PlaceContext";

const Clock = ({ get }) => {
  const { initialTime } = useContext(TimerContext);
  const { Active } = useContext(PlaceContext);

  const [button_placeholder, setButtonPlaceholder] = useState(false);
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    setTime(initialTime);
    setButtonPlaceholder(Active);
  }, [initialTime]);
  // useEffect(() => {
  //   setButtonPlaceholder(Active);
  // }, [Active]);

  useEffect(() => {
    if (time == 0) {
      setButtonPlaceholder(false);
    }
    if (!button_placeholder || time <= 0) return;

    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          setButtonPlaceholder(false);
          return 0;
        }
        get(prevTime - 1);
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [button_placeholder]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl">
        {Math.floor(time / 3600)
          .toString()
          .padStart(2, "0")}
        :
        {Math.floor((time % 3600) / 60)
          .toString()
          .padStart(2, "0")}
        :{(time % 60).toString().padStart(2, "0")}
      </h1>

      <button
        className="flex justify-center items-center w-[150px] h-10 rounded-full bg-transparent border-2 border-amber-200 mt-3"
        onClick={() => setButtonPlaceholder((prev) => !prev)}
      >
        <h1>{button_placeholder ? "Stop" : "Start"}</h1>
      </button>
    </div>
  );
};

export default Clock;
