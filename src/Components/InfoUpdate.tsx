import React from "react";
import { createContext, useContext, useState, useRef } from "react";
import { context } from "../App";
import Home from "./Home";
import PersonalLeftSide from "./ForDataMap/PersonalLeftSide";
import Experience from "./ForDataMap/Experience";

import CommonInput from "./ForDataMap/CommonInput";
import CorrectWrongComponent from "./ForDataMap/CorrectWrongComponent";
import RightSide from "./ForDataMap/RightSide";

import georgiaFlag from "../Assets/Img/common/georgia.png";
import unitedKingdomFlag from "../Assets/Img/common/unitedKingdom.png";
import lightMode from "../Assets/Icon/sunMode.svg";
import darkMode from "../Assets/Icon/nightMode.svg";

import Ellipse from "../Assets/Img/2. SecondPage/Ellipse.svg";
import Vector from "../Assets/Img/2. SecondPage/Vectorvector.svg";
import OrangeLogo from "../Assets/Img/2. SecondPage/logoOrange.svg";
import mobileIcon from "../Assets/Icon/phoneIcon.svg";
import spiralIcon from "../Assets/Icon/@.svg";

import CommonStyles from "./Common.module.css";
import PersonalStyles from "./Personal.module.css";
import Knowledge from "./Knowledge";

export const MyPersonalContext = createContext<any>("s");

export default function InfoUpdate() {
  const useAppContext1 = useContext(context);

  const {
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
  } = useAppContext1;

  return (
    <MyPersonalContext.Provider
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
        className={`${CommonStyles.container} ${CommonStyles.containerFlex}`}
        style={{
          height:
            cMoreExperience === 0
              ? "1080px"
              : cMoreExperience === 1
              ? "calc(1080 * 2)"
              : cMoreExperience === 2
              ? "calc(1080 * 3)"
              : cMoreExperience === 3
              ? "calc(1080 * 4)"
              : "calc(1080 * 5)",
        }}
      >
        {cPage === 2 ? (
          <Experience />
        ) : cPage === 3 ? (
          <Knowledge />
        ) : (
          <PersonalLeftSide />
        )}
        <RightSide />
      </div>
    </MyPersonalContext.Provider>
  );
}
