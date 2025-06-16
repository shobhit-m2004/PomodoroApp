import React from "react";
import { createContext, useState } from "react";

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [initialTime, setInitialTime] = useState(60 * 60);
  return (
    <TimerContext.Provider value={{ initialTime, setInitialTime }}>
      {children}
    </TimerContext.Provider>
  );
};
