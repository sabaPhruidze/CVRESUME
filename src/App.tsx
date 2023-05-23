import React from "react";
import "./App.css";
import { useState, createContext, useRef } from "react";
import FinalResume from "./Components/FinalResume";
import Home from "./Components/Home";
import InfoUpdate from "./Components/InfoUpdate";

export const context = createContext<any>(null);

function App() {
  const [cPage, sPage] = useState<number>(2); // current page ,set page
  const [cLanguage, sLanguage] = useState<boolean>(false); //if false than georgian else english
  const [cBGColor, sBGColor] = useState<boolean>(false); //if false than white, if true than black {BG- means background color}

  // For Personal input
  const [cName, sName] = useState<string | undefined>();
  const [cUsername, sUsername] = useState<string | undefined>();
  const [cUploadImg, sUploadImg] = useState<File | null>();
  const [cEmail, sEmail] = useState<string | undefined>();
  const [cTel, sTel] = useState<string>();
  const [cAboutMe, sAboutMe] = useState<string | undefined>();
  // For Personal input

  //correct wrong Personal
  const aboutMeRef = useRef<any>(0);

  const [cCorrect, sCorrect] = useState<boolean>(false);
  const [cCorrect1, sCorrect1] = useState<boolean>(false);
  const [cCorrect2, sCorrect2] = useState<boolean>(false);
  const [cCorrect3, sCorrect3] = useState<boolean>(false);
  const [cVisible, sVisible] = useState<boolean>(false);
  //correct wrong Personal

  // for experience input

  const [cPosition, sPosition] = useState<any>("");
  const [cEmployer, sEmployer] = useState<any>("");
  const [cStartDate, sStartDate] = useState<any>("");
  const [cEndDate, sEndDate] = useState<any>("");
  const [cDescription, sDescription] = useState<any>("");
  const textAreaRef = useRef<string | null | undefined>("");
  // for experience input

  //correct wrong Experience
  const [cCorrect5, sCorrect5] = useState<boolean>(false);
  const [cCorrect6, sCorrect6] = useState<boolean>(false);
  const [cVisible1, sVisible1] = useState<boolean>(false);
  //correct wrong Experience

  const [cMoreExperience, sMoreExperience] = useState<any>(0); //increase in height in order to add more information

  // for experience input1
  const [cPosition1, sPosition1] = useState<any>("");
  const [cEmployer1, sEmployer1] = useState<any>("");
  const [cStartDate1, sStartDate1] = useState<any>("");
  const [cEndDate1, sEndDate1] = useState<any>("");
  const [cDescription1, sDescription1] = useState<any>("");
  // for experience input1

  // for experience input2
  const [cPosition2, sPosition2] = useState<any>("");
  const [cEmployer2, sEmployer2] = useState<any>("");
  const [cStartDate2, sStartDate2] = useState<any>("");
  const [cEndDate2, sEndDate2] = useState<any>("");
  const [cDescription2, sDescription2] = useState<any>("");
  // for experience input2

  //for experience border
  const ExperienceDateStartRef = useRef<any>("");
  const ExperienceDateEndRef = useRef<any>("");
  const ExperienceTextAreaRef = useRef<any>("");
  //for experience border

  //knowledge input
  const [cCourse, sCourse] = useState<string>("");
  const [cQuality, sQuality] = useState<any>("");
  const [cFinishDate, sFinishDate] = useState<any>();
  const [cDOE, sDOE] = useState<any>(""); //description of knowledge
  //knowledge input

  //knowledge input1
  const [cCourse1, sCourse1] = useState<string>("");
  const [cQuality1, sQuality1] = useState<any>("");
  const [cFinishDate1, sFinishDate1] = useState<any>();
  const [cDOE1, sDOE1] = useState<any>("");
  //knowledge input1

  //knowledge input2
  const [cCourse2, sCourse2] = useState<string>("");
  const [cQuality2, sQuality2] = useState<any>("");
  const [cFinishDate2, sFinishDate2] = useState<any>();
  const [cDOE2, sDOE2] = useState<any>("");
  //knowledge input2

  //for Knowledge border
  const courseRef = useRef<any>("");
  const qualityRef = useRef<any>("");
  const finishDateRef = useRef<any>("");
  const DOERef = useRef<any>("");
  //for Knowledge border

  //correct wrong knowledge
  const [cCorrect7, sCorrect7] = useState<boolean>(false);
  const [cVisible2, sVisible2] = useState<boolean>(false);
  //correct wrong knowledge

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
        courseRef,
        qualityRef,
        finishDateRef,
        DOERef,
        cCourse,
        sCourse,
        cQuality,
        sQuality,
        cFinishDate,
        sFinishDate,
        cDOE,
        sDOE,
        cCourse1,
        sCourse1,
        cQuality1,
        sQuality1,
        cFinishDate1,
        sFinishDate1,
        cDOE1,
        sDOE1,
        cCourse2,
        sCourse2,
        cQuality2,
        sQuality2,
        cFinishDate2,
        sFinishDate2,
        cDOE2,
        sDOE2,
        ExperienceDateStartRef,
        ExperienceDateEndRef,
        ExperienceTextAreaRef,
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
        textAreaRef,
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
        cCorrect5,
        sCorrect5,
        cCorrect6,
        sCorrect6,
        cCorrect7,
        sCorrect7,
        cVisible2,
        sVisible2,
        cVisible1,
        sVisible1,
      }}
    >
      <div
        style={{
          height:
            cMoreExperience === 0
              ? "1080px"
              : cMoreExperience === 1
              ? "calc(1080px + 631px)"
              : cMoreExperience === 2
              ? "calc(1080px + 2 * 631px)"
              : cMoreExperience === 3
              ? "calc(1080px + 631px * 2)"
              : cPage === 3
              ? "1080px"
              : cPage === 4
              ? "1260px"
              : "calc(1080px + 631px * 2)",
          overflow: cMoreExperience === 0 ? "hidden" : "none",
          backgroundColor: cBGColor ? "black" : "white",
        }}
      >
        {changePage()}
      </div>
    </context.Provider>
  );
}

export default App;
