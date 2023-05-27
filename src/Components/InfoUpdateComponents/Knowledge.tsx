import React from "react";
import { useContext, createContext, useEffect } from "react";
import { context } from "../../App";
import {
  ImgReplay,
  HeadlineDivCustom,
  ExperienceButtonReplayskyColor,
} from "../DataMap/Replay";
import ThisPartWillReplay2 from "../DataMap/ThisPartWillReplay2";
import CorrectWrongComponent from "./CorrectWrongComponent";
import CommonStyles from "../Styles/Common.module.css";
import { KnowledgeButtonReplay } from "../DataMap/Replay";
export const MyKnowledgeContext = createContext<any>("w");

export default function Knowledge() {
  const useAppContext3 = useContext(context);
  const {
    cMoreKnowledge,
    sMoreKnowledge,
    cPosition2,
    cEmployer2,
    cStartDate2,
    cEndDate2,
    cDescription2,
    cLanguage,
    cBGColor,
    cVisible,
    cCorrect7,
    sVisible1,
    cPosition1,
    cEmployer1,
    cStartDate1,
    cEndDate1,
    cDescription1,
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
      sMoreKnowledge(1);
    } else if (
      cPosition2.length > 0 ||
      cEmployer2.length > 0 ||
      cStartDate2.length > 0 ||
      cEndDate2.length > 0 ||
      cDescription2.length > 0
    ) {
      sMoreKnowledge(2);
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
          cMoreKnowledge === 0
            ? "1080px"
            : cMoreKnowledge === 1 // If experience component is 1 or if Knowledge blue button is clicked one time than the size will increase
            ? "calc(1080px + 551px * 1)"
            : cMoreKnowledge === 2
            ? "calc(1080px + 551px * 2)"
            : "calc(1080px + 551px * 2)",
        overflow: cMoreKnowledge === 0 ? "hidden" : "visible",
      }}
    >
      <ExperienceButtonReplayskyColor />
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
