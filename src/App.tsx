import React from "react";
import "./App.css";
import { useState, createContext, useRef } from "react";

import Experience from "./Components/InfoUpdateComponents/Experience";
import FinalResume from "./Components/FinalResume";
import Home from "./Components/Home";
import Knowledge from "./Components/InfoUpdateComponents/Knowledge";
import InfoUpdate from "./Components/InfoUpdate";

export const context = createContext<any>(null);

function App() {
  const [cPage, sPage] = useState<number>(2); // current page ,set page
  const [cLanguage, sLanguage] = useState<boolean>(false); //if false than georgian else english
  const [cBGColor, sBGColor] = useState<boolean>(false); //if false than white, if true than black {BG- means background color}

  // For Personal
  const [cName, sName] = useState<string | undefined>();
  const [cUsername, sUsername] = useState<string | undefined>();
  const [cUploadImg, sUploadImg] = useState<File | null>();
  const [cEmail, sEmail] = useState<string | undefined>();
  const [cTel, sTel] = useState<string>();
  const [cAboutMe, sAboutMe] = useState<string | undefined>();
  const aboutMeRef = useRef<any>("");

  const [cCorrect, sCorrect] = useState<boolean>(false);
  const [cCorrect1, sCorrect1] = useState<boolean>(false);
  const [cCorrect2, sCorrect2] = useState<boolean>(false);
  const [cCorrect3, sCorrect3] = useState<boolean>(false);
  const [cVisible, sVisible] = useState<boolean>(false);

  const [cMoreExperience, sMoreExperience] = useState<any>(0);
  const [cPosition, sPosition] = useState<any>("");
  const [cEmployer, sEmployer] = useState<any>("");
  const [cStartDate, sStartDate] = useState<any>("");
  const [cEndDate, sEndDate] = useState<any>("");
  const [cDescription, sDescription] = useState<any>("");

  const [cPosition1, sPosition1] = useState<any>("");
  const [cEmployer1, sEmployer1] = useState<any>("");
  const [cStartDate1, sStartDate1] = useState<any>("");
  const [cEndDate1, sEndDate1] = useState<any>("");
  const [cDescription1, sDescription1] = useState<any>("");

  const [cPosition2, sPosition2] = useState<any>("");
  const [cEmployer2, sEmployer2] = useState<any>("");
  const [cStartDate2, sStartDate2] = useState<any>("");
  const [cEndDate2, sEndDate2] = useState<any>("");
  const [cDescription2, sDescription2] = useState<any>("");

  const [cPosition3, sPosition3] = useState<any>("");
  const [cEmployer3, sEmployer3] = useState<any>("");
  const [cStartDate3, sStartDate3] = useState<any>("");
  const [cEndDate3, sEndDate3] = useState<any>("");
  const [cDescription3, sDescription3] = useState<any>("");

  const [cPosition4, sPosition4] = useState<any>("");
  const [cEmployer4, sEmployer4] = useState<any>("");
  const [cStartDate4, sStartDate4] = useState<any>("");
  const [cEndDate4, sEndDate4] = useState<any>("");
  const [cDescription4, sDescription4] = useState<any>("");

  function changePage() {
    switch (cPage) {
      case 0:
        return <Home />;
        break;
      case 1:
      case 2:
      case 3:
        return <InfoUpdate />;
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
        aboutMeRef,
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
        cPosition,
        sPosition,
        cEmployer,
        sEmployer,
        cStartDate,
        sStartDate,
        cEndDate,
        sEndDate,
        cDescription,
        sDescription,

        cMoreExperience,
        sMoreExperience,

        cPosition1,
        sPosition1,
        cEmployer1,
        sEmployer1,
        cStartDate1,
        sStartDate1,
        cEndDate1,
        sEndDate1,
        cDescription1,
        sDescription1,

        cPosition2,
        sPosition2,
        cEmployer2,
        sEmployer2,
        cStartDate2,
        sStartDate2,
        cEndDate2,
        sEndDate2,
        cDescription2,
        sDescription2,

        cPosition3,
        sPosition3,
        cEmployer3,
        sEmployer3,
        cStartDate3,
        sStartDate3,
        cEndDate3,
        sEndDate3,
        cDescription3,
        sDescription3,

        cPosition4,
        sPosition4,
        cEmployer4,
        sEmployer4,
        cStartDate4,
        sStartDate4,
        cEndDate4,
        sEndDate4,
        cDescription4,
        sDescription4,
      }}
    >
      <div
        style={{
          height:
            cMoreExperience === 0
              ? "1080px"
              : cMoreExperience === 1
              ? "calc(798px * 2)"
              : cMoreExperience === 2
              ? "calc(798px * 3)"
              : cMoreExperience === 3
              ? "calc(798px * 4)"
              : "calc(798px * 5)",
          overflow: cMoreExperience === 0 ? "hidden" : "none",
        }}
      >
        {changePage()}
      </div>
    </context.Provider>
  );
}

export default App;
