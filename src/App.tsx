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

  // For Personal
  const [cName, sName] = useState<string | undefined>();
  const [cUsername, sUsername] = useState<string | undefined>();
  const [cUploadImg, sUploadImg] = useState<File | null>();
  const [cEmail, sEmail] = useState<string | undefined>();
  const [cTel, sTel] = useState<string>();
  const [cAboutMe, sAboutMe] = useState<string | undefined>();

  const [cCorrect, sCorrect] = useState<boolean>(false);
  const [cCorrect1, sCorrect1] = useState<boolean>(false);
  const [cCorrect2, sCorrect2] = useState<boolean>(false);
  const [cCorrect3, sCorrect3] = useState<boolean>(false);
  const [cVisible, sVisible] = useState<boolean>(false);

  function changePage() {
    switch (cPage) {
      case 0:
        return <Home />;
        break;
      case 1:
      case 2:
      case 3:
        return <Personal />;
        break;
      case 4:
        return <FinalResume />;
        break;
    }
  }

  return (
    <context.Provider
      value={{
        cPage,
        sPage,
        cLanguage,
        sLanguage,
        cBGColor,
        sBGColor,
        cName,
        sName,
        cUsername,
        sUsername,
        cUploadImg,
        sUploadImg,
        cEmail,
        sEmail,
        cTel,
        sTel,
        cAboutMe,
        sAboutMe,
        cCorrect,
        sCorrect,
        cCorrect1,
        sCorrect1,
        cCorrect2,
        sCorrect2,
        cCorrect3,
        sCorrect3,
        cVisible,
        sVisible,
      }}
    >
      <div>{changePage()}</div>
    </context.Provider>
  );
}

export default App;
