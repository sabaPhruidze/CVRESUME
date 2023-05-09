import React from "react";
import "./App.css";
import { useState, createContext } from "react";

import Experience from "./Components/Experience";
import FinalResume from "./Components/FinalResume";
import Home from "./Components/Home";
import Knowledge from "./Components/Knowledge";
import Personal from "./Components/Personal";

export const context = createContext<any>(null);

function App() {
  const [cPage, sPage] = useState<number>(0); // current page ,set page
  const [cLanguage, sLanguage] = useState<boolean>(false); //if false than georgian else english
  const [cBGColor, sBGColor] = useState<boolean>(false); //if false than white, if true than black {BG- means background color}
  const [cThirdChanger, sThirdChanger] = useState<string>("1/3"); // here I mean 1/3 ; 2/3 ; 3/3
  function changePage() {
    switch (cPage) {
      case 0:
        return <Home />;
        break;
      case 1:
        return <Personal />;
        break;
      case 2:
        return <Experience />;
        break;
      case 3:
        return <Knowledge />;
        break;
      case 4:
        return <FinalResume />;
        break;
    }
  }

  return (
    <context.Provider
      value={{ cPage, sPage, cLanguage, sLanguage, cBGColor, sBGColor }}
    >
      <div>{changePage()}</div>
    </context.Provider>
  );
}

export default App;
