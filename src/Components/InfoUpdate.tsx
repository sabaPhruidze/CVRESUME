import React from "react";
import { createContext, useContext, useState, useRef } from "react";
import { context } from "../App";
import Home from "./Home";
import Personal from "./InfoUpdateComponents/Personal";
import Experience from "./InfoUpdateComponents/Experience";

// import CommonInput from "./InfoUpdateComponents/CommonInput";
// import CorrectWrongComponent from "./InfoUpdateComponents/CorrectWrongComponent";
import RightSide from "./InfoUpdateComponents/RightSide";

// import georgiaFlag from "../Assets/Img/common/georgia.png";
// import unitedKingdomFlag from "../Assets/Img/common/unitedKingdom.png";
// import lightMode from "../Assets/Icon/sunMode.svg";
// import darkMode from "../Assets/Icon/nightMode.svg";

// import Ellipse from "../Assets/Img/2. SecondPage/Ellipse.svg";
// import Vector from "../Assets/Img/2. SecondPage/Vectorvector.svg";
// import OrangeLogo from "../Assets/Img/2. SecondPage/logoOrange.svg";
// import mobileIcon from "../Assets/Icon/phoneIcon.svg";
// import spiralIcon from "../Assets/Icon/@.svg";

import CommonStyles from "./Styles/Common.module.css";
import Knowledge from "./InfoUpdateComponents/Knowledge";

export const infoUpdateContext = createContext<any>("s");

export default function InfoUpdate() {
  const useAppContext1 = useContext(context);

  const {
    ExperienceDateStartRef,
    ExperienceDateEndRef,
    ExperienceTextAreaRef,
    ExperienceDateStartRef1,
    ExperienceDateEndRef1,
    ExperienceTextAreaRef1,
    ExperienceDateStartRef2,
    ExperienceDateEndRef2,
    ExperienceTextAreaRef2,
    cTop,
    sTop,
    aboutMeRef,
    replayRef,
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
    cCorrect8,
    sCorrect8,
    cCorrect9,
    sCorrect9,
    cCorrect10,
    sCorrect10,
    cVisible1,
    sVisible1,
    cCourse,
    cQuality,
    cFinishDate,
    cDOE,
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
    cVisible2,
    sVisible2,
    cDOE2,
    sDOE2,
    courseRef,
    qualityRef,
    finishDateRef,
    DOERef,
  } = useAppContext1;

  return (
    <infoUpdateContext.Provider
      value={{
        courseRef,
        qualityRef,
        finishDateRef,
        DOERef,
        cPage,
        sPage,
        cTop,
        sTop,
        replayRef,
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
        aboutMeRef,
        cVisible2,
        sVisible2,
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

        ExperienceDateStartRef1,
        ExperienceDateEndRef1,
        ExperienceTextAreaRef1,
        ExperienceDateStartRef2,
        ExperienceDateEndRef2,
        ExperienceTextAreaRef2,
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
        cCorrect8,
        sCorrect8,
        cCorrect9,
        sCorrect9,
        cCorrect10,
        sCorrect10,
        cVisible1,
        sVisible1,

        ExperienceDateStartRef,
        ExperienceDateEndRef,
        ExperienceTextAreaRef,
        cCourse,
        cQuality,
        cFinishDate,
        cDOE,
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
      }}
    >
      <div
        className={`${CommonStyles.container} ${CommonStyles.flexRow}`}
        style={{
          height:
            cMoreExperience === 0
              ? "1080px"
              : cMoreExperience === 1
              ? "calc(846px * 2)"
              : cMoreExperience === 2
              ? "calc(846px * 2)"
              : cPage === 3
              ? "1080px"
              : "calc(846px* 2)",
        }}
      >
        {cPage === 2 ? (
          <Experience />
        ) : cPage === 3 ? (
          <Knowledge />
        ) : (
          <Personal />
        )}
        <RightSide />
      </div>
    </infoUpdateContext.Provider>
  );
}
