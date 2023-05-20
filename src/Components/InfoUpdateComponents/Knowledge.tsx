import React from "react";
import { useContext, createContext, useEffect } from "react";
import { context } from "../../App";
import {
  ImgReplay,
  HeadlineDivCustom,
  KnowledgeButtonReplayskyColor,
} from "../DataMap/Replay";
import ThisPartWillReplay2 from "../DataMap/ThisPartWillReplay2";
import CorrectWrongComponent from "./CorrectWrongComponent";
import CommonStyles from "../Styles/Common.module.css";
import Ellipse from "../../Assets/Img/2. SecondPage/Ellipse.svg";
import Vector from "../../Assets/Img/2. SecondPage/Vectorvector.svg";

import { KnowledgeButtonReplay } from "../DataMap/Replay";
export const MyKnowledgeContext = createContext<any>("w");

export default function Knowledge() {
  const useAppContext3 = useContext(context);
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
    cCorrect7,
    sVisible1,
    cPosition1,
    cEmployer1,
    cStartDate1,
    cEndDate1,
    cDescription1,
    cMoreExperience,
    sMoreExperience,
  } = useAppContext3;
  function languageChanger(geo: string, eng: string) {
    return !cLanguage ? geo : eng;
  }
  useEffect(() => {
    sVisible1(false);
    if (
      cPosition1.length > 0 ||
      cEmployer1.length > 0 ||
      cStartDate1.length > 0 ||
      cEndDate1.length > 0 ||
      cDescription1.length > 0
    ) {
      sMoreExperience(1);
    } else {
      sMoreExperience(0);
    }
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
      <KnowledgeButtonReplayskyColor />
      <MyKnowledgeContext.Provider
        value={{
          cVisible,
          cBGColor,
          cCorrect7,
        }}
      >
        <CorrectWrongComponent />
      </MyKnowledgeContext.Provider>
      <ImgReplay />
      <div className={CommonStyles.skeleton}>
        <HeadlineDivCustom />
        <ThisPartWillReplay2 />
      </div>
      <KnowledgeButtonReplay />
    </div>
  );
}
