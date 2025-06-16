import React, { useState } from "react";
import InnerTag from "./InnerTag";

const Tags = () => {
  const tags = ["Work", "Short Break", "Long Break"];
  const [activeIndex, setActiveIndex] = useState(0);

  const changeColor = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="bg-[#dcd9e9] flex w-[400px] h-[50px] rounded-full mx-auto mt-10 gap-5 items-center justify-center shadow-lg">
        {tags.map((tag, index) => (
          <InnerTag
            key={index}
            tag={tag}
            isActive={index === activeIndex}
            changeColor={changeColor}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Tags;
