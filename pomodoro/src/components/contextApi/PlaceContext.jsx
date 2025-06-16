import React, { createContext, useState } from "react";

export const PlaceContext = createContext();

export const PlaceProvider = ({ children }) => {
  const [Active, setActive] = useState(false);

  return (
    <PlaceContext.Provider value={{ Active, setActive }}>
      {children}
    </PlaceContext.Provider>
  );
};
