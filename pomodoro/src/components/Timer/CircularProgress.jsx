import React, { useState, useEffect, useContext } from "react";
import Clock from "./Clock";
import { TimerContext } from "../contextApi/TimerContext";
import { GrConsole } from "react-icons/gr";

const CircularProgress = () => {
  const { initialTime } = useContext(TimerContext);
  const [progress, setProgress] = useState(100);
  const [full, setFull] = useState(initialTime);

  useEffect(() => {
    setFull(initialTime);
  }, [initialTime]);

  const get = (valueInSeconds) => {
    // console.log("valueInSeconds", valueInSeconds);
    // console.log("full", full);
    const percentage = (valueInSeconds / full) * 100;
    // console.log("valueInSeconds", valueInSeconds);
    // console.log("full", full);
    // console.log("percentage", percentage / 100);
    setProgress(percentage);
  };

  // console.log("progress", progress);

  return (
    <div
      className="w-[280px] h-[280px] rounded-full shadow-lg flex items-center justify-center"
      style={{
        backgroundImage: `
        conic-gradient(
      #FFFACD ${progress}%,
      #9932CC ${progress}% 
    )
  `,
      }}
    >
      <div
        className="w-[260px] h-[260px] rounded-full flex items-center justify-center"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),
            linear-gradient(to bottom right, #0d1b2a, #4b0082)
          `,
        }}
      >
        <Clock get={get} />
      </div>
    </div>
  );
};

export default CircularProgress;
