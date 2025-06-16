import React from "react";
import CircularProgress from "./CircularProgress";

const OuterCircle = () => {
  return (
    <div>
      <div
        className="w-[300px] h-[300px] rounded-full mx-auto mt-10 shadow-lg flex items-center justify-center"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),
            linear-gradient(to bottom right, #0d1b2a, #4b0082)
          `,
        }}
      >
        <CircularProgress />
      </div>
    </div>
  );
};

export default OuterCircle;
