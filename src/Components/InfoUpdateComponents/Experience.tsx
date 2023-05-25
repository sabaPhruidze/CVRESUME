import React, { useEffect } from "react";
import { useContext, createContext, useState, useRef } from "react";
import { infoUpdateContext } from "../InfoUpdate";

import CorrectWrongComponent from "./CorrectWrongComponent";

import {
  HeadlineDivCustom,
  ImgReplay,
  ButtonReplay,
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
    cBGColor,
    cVisible,
    sVisible,
    cMoreExperience,
    cCorrect5,
    cCorrect6,
    cVisible1,
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
            ? "calc(1080px + 630px * 1)"
            : cMoreExperience === 2
            ? "calc(1080px + 590px * 2)"
            : "calc(1080px + 590px * 2)",
        overflow: cMoreExperience === 0 ? "hidden" : "visible",
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
      <ButtonReplay />
    </div>
  );
}
