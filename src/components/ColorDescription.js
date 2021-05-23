import React, { useState } from "react";
import "./ColorDescription.scss";
import copy from "copy-to-clipboard";

export const ColorDescription = ({ color, setCopied }) => {
  const handleClick = () => {
    copy(color.hex);
    console.log("Copiado");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      <div className={"colorDescription"}>
        <h2>{color.name}</h2>
        <abbr title={"Copiar color al portapapeles"} onClick={handleClick}>
          Código: <span>{color.hex}</span>
        </abbr>
      </div>
    </>
  );
};
