import React from "react";
import "./Color.scss";
export const Color = ({ color, setBackgroundColor }) => {
  const handleClick = (e) => {
    setBackgroundColor(color.hex);
  };
  return (
      <div
        className={"color"}
        style={{ backgroundColor: color.hex }}
        onClick={handleClick}
      ></div>
  );
};
