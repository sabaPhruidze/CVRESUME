import React, { useEffect } from "react";
import { useContext, createContext, useState, useRef } from "react";
import { infoUpdateContext } from "../InfoUpdate";

import CorrectWrongComponent from "./CorrectWrongComponent";

import {
  HeadlineDivCustom,
  ImgReplay,
  // ExperiencePositionEmployerInput,
  // InputReplayExperienceRow,
  // ExperienceTextArea,
  ExperienceButtonReplay,
  ExperienceButtonReplayskyColor,
} from "../DataMap/Replay";
import ThisPartWillReplay from "../DataMap/ThisPartWillReplay";

import georgiaFlag from "../../Assets/Img/common/georgia.png";
import unitedKingdomFlag from "../../Assets/Img/common/unitedKingdom.png";
import lightMode from "../../Assets/Icon/sunMode.svg";
import darkMode from "../../Assets/Icon/nightMode.svg";

import Ellipse from "../../Assets/Img/2. SecondPage/Ellipse.svg";
import Vector from "../../Assets/Img/2. SecondPage/Vectorvector.svg";
import OrangeLogo from "../../Assets/Img/2. SecondPage/logoOrange.svg";
import mobileIcon from "../../Assets/Icon/phoneIcon.svg";
import spiralIcon from "../../Assets/Icon/@.svg";

import infoUpdateStyles from "../Styles/infoUpdate.module.css";
import CommonStyles from "../Styles/Common.module.css";
export const MyExperienceContext = createContext<any>("w");
export default function Personal() {
  const useAppContext2 = useContext(infoUpdateContext);
  const {
    replayRef,
    cBGColor,
    cVisible,
    sVisible,
    cMoreExperience,
    sMoreExperience,
    cPage,
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
    cVisible1,
    sVisible1,
  } = useAppContext2;

  useEffect(() => {
    sVisible(false);
  }, []);

  return (
    <div
      className={
        cBGColor
          ? `${CommonStyles.infoContainer} ${CommonStyles.infoContainerDark}`
          : CommonStyles.infoContainer
      }
      style={{
        height:
          cMoreExperience === 0
            ? "1080px"
            : cMoreExperience === 1
            ? "calc(1080px + 630px * 2)"
            : cMoreExperience === 2
            ? "calc(1080px + 630px * 2)"
            : "calc(1080px + 630px * 2)",
        overflow: cMoreExperience === 0 ? "hidden" : "none",
      }}
    >
      <ExperienceButtonReplayskyColor />
      <MyExperienceContext.Provider
        value={{
          cCorrect6,
          cCorrect5,
          cVisible,
          cBGColor,
          cVisible1,
        }}
      >
        <CorrectWrongComponent />
      </MyExperienceContext.Provider>
      <ImgReplay />
      <div className={CommonStyles.skeleton}>
        <HeadlineDivCustom />
        <ThisPartWillReplay />
      </div>
      <ExperienceButtonReplay />
    </div>
  );
}
