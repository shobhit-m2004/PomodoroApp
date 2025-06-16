import React, { useContext } from "react";
import { TimerContext } from "../contextApi/TimerContext";
import { PlaceContext } from "../contextApi/PlaceContext";

const InnerTag = ({ tag, changeColor, index, isActive }) => {
  const color = isActive ? "bg-amber-200" : "bg-amber-50";
  const { setInitialTime } = useContext(TimerContext);
  const { setActive } = useContext(PlaceContext);

  const handleClick = () => {
    if (tag === "Work") {
      setInitialTime(60 * 60);
      setActive(false);
    } else if (tag === "Short Break") {
      setInitialTime(60 * 15);
      setActive(false);
    } else if (tag === "Long Break") {
      setInitialTime(60 * 30);
      setActive(false);
    }
    changeColor(index);
  };

  return (
    <button
      className={`${color} inner-tag w-[100px] h-[40px] rounded-full shadow-lg hover:bg-amber-200 transition duration-300 ease-in-out text-black flex items-center justify-center`}
      onClick={handleClick}
    >
      {tag}
    </button>
  );
};

export default InnerTag;
