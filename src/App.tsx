import React from "react";
import "./App.css";
import { useState, createContext, useRef } from "react";
import FinalResume from "./Components/FinalResume";
import Home from "./Components/Home";
import InfoUpdate from "./Components/InfoUpdate";

export const context = createContext<any>(null);

function App() {
  const [cPage, sPage] = useState<number>(3); // current page ,set page
  const [cLanguage, sLanguage] = useState<boolean>(false); //if false than georgian else english
  const [cBGColor, sBGColor] = useState<boolean>(false); //if false than white, if true than black {BG- means background color}

  // For Personal
  const [cName, sName] = useState<string | undefined>();
  const [cUsername, sUsername] = useState<string | undefined>();
  const [cUploadImg, sUploadImg] = useState<File | null>();
  const [cEmail, sEmail] = useState<string | undefined>();
  const [cTel, sTel] = useState<string>();
  const [cAboutMe, sAboutMe] = useState<string | undefined>();
  const aboutMeRef = useRef<any>(0);
  const textAreaRef = useRef<string | null | undefined>("");

  const [cCorrect, sCorrect] = useState<boolean>(false);
  const [cCorrect1, sCorrect1] = useState<boolean>(false);
  const [cCorrect2, sCorrect2] = useState<boolean>(false);
  const [cCorrect3, sCorrect3] = useState<boolean>(false);
  const [cVisible, sVisible] = useState<boolean>(false);

  const [cCorrect5, sCorrect5] = useState<boolean>(false);
  const [cCorrect6, sCorrect6] = useState<boolean>(false);
  const [cCorrect7, sCorrect7] = useState<boolean>(false);
  const [cVisible1, sVisible1] = useState<boolean>(false);

  const [cVisible2, sVisible2] = useState<boolean>(false);

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

  const ExperienceDateStartRef = useRef<any>("");
  const ExperienceDateStartRef1 = useRef<any>("");
  const ExperienceDateStartRef2 = useRef<any>("");
  const ExperienceDateEndRef = useRef<any>("");
  const ExperienceDateEndRef1 = useRef<any>("");
  const ExperienceDateEndRef2 = useRef<any>("");
  const ExperienceTextAreaRef = useRef<any>("");
  const ExperienceTextAreaRef1 = useRef<any>("");
  const ExperienceTextAreaRef2 = useRef<any>("");
  const replayRef = useRef<any>("");
  const [cTop, sTop] = useState<any>(804);

  //knowledge
  const [cCourse, sCourse] = useState<string>("");
  const [cQuality, sQuality] = useState<any>("");
  const [cFinishDate, sFinishDate] = useState<any>();
  const [cDOE, sDOE] = useState<any>(""); //description of knowledge

  const [cCourse1, sCourse1] = useState<string>("");
  const [cQuality1, sQuality1] = useState<any>("");
  const [cFinishDate1, sFinishDate1] = useState<any>();
  const [cDOE1, sDOE1] = useState<any>(""); //description of knowledge

  const [cCourse2, sCourse2] = useState<string>("");
  const [cQuality2, sQuality2] = useState<any>("");
  const [cFinishDate2, sFinishDate2] = useState<any>();
  const [cDOE2, sDOE2] = useState<any>(""); //description of knowledge

  const courseRef = useRef<any>("");
  const qualityRef = useRef<any>("");
  const finishDateRef = useRef<any>("");
  const DOERef = useRef<any>("");
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
        ExperienceDateStartRef1,
        ExperienceDateEndRef1,
        ExperienceTextAreaRef1,
        ExperienceDateStartRef2,
        ExperienceDateEndRef2,
        ExperienceTextAreaRef2,

        replayRef,
        cTop,
        sTop,
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
              ? "calc(1080px + 631px )"
              : cMoreExperience === 2
              ? "calc(1080px + 2 * 631px)"
              : cMoreExperience === 3
              ? "calc(1080px + 631px * 2)"
              : cPage === 3
              ? "1080px"
              : "calc(1080px + 631px * 2)",
          overflow: cMoreExperience === 0 ? "hidden" : "none",
        }}
      >
        {changePage()}
      </div>
    </context.Provider>
  );
}

export default App;
