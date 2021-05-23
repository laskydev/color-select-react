import React, {useState} from "react";
import "./App.scss";
import { Wrapper } from "./components/Wrapper";
import {Copied} from "./components/Copied";
export const App = () => {


    const [backgroundColor, setBackgroundColor] = useState('#FFE156');
  const [copied, setCopied] = useState(false);

  return (
    <div className={'app'}
        style={{backgroundColor: backgroundColor}}
    >
      <h1>Palette color picker</h1>
      <Wrapper
        setBackgroundColor={setBackgroundColor}
        setCopied={setCopied}
      />
      {copied&& <Copied/>}
    </div>
  );
};
