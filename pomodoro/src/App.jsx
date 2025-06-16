import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Appaname from "./components/Appaname.jsx";
import Tags from "./components/Tags/Tags.jsx";
import OuterCircle from "./components/Timer/OuterCircle.jsx";
import { TimerProvider } from "./components/contextApi/TimerContext.jsx";
import { PlaceProvider } from "./components/contextApi/PlaceContext.jsx";

import TimerSetting from "./components/TimerSetting.jsx";

function App() {
  return (
    <>
      <PlaceProvider>
        <TimerProvider>
          <Appaname></Appaname>
          <Tags></Tags>
          <OuterCircle></OuterCircle>

          <TimerSetting></TimerSetting>
        </TimerProvider>
      </PlaceProvider>
    </>
  );
}

export default App;
