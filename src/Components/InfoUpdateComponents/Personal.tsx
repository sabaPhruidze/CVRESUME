import React from "react";
import { useContext, createContext, useState, useRef } from "react";
import { infoUpdateContext } from "../InfoUpdate";

import CorrectWrongComponent from "./CorrectWrongComponent";
import {
  ImgReplayCustom,
  InputReplayCustomRow,
  InputFile,
  PersonalTextArea,
  PersonalMailTelephone,
  PersonButtonReplay,
} from "../DataMap/Replay";

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

export const MyPersonalContext = createContext<any>("w");
export default function Personal() {
  const useAppContext1 = useContext(infoUpdateContext);
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
  } = useAppContext1;
  function languageChanger(geo: string, eng: string) {
    return !cLanguage ? geo : eng;
  }

  //I am just using ref to test it.Even trougth I can solve most of the tasks using useState I think sometimes useRef is also helpful

  return (
    <div
      className={
        cBGColor
          ? `${CommonStyles.infoContainer} ${CommonStyles.infoContainerDark}`
          : CommonStyles.infoContainer
      }
    >
      <MyPersonalContext.Provider
        value={{
          cCorrect,
          cCorrect1,
          cCorrect2,
          cCorrect3,
          cVisible,
          cBGColor,
        }}
      >
        <CorrectWrongComponent />
      </MyPersonalContext.Provider>
      <ImgReplayCustom />
      <div className={CommonStyles.skeleton}>
        <div className={CommonStyles.headline}>
          <p
            style={{
              fontSize: "24px",
              marginBottom: "12px",
              fontWeight: "700",
            }}
          >
            {languageChanger("პირადი ინფო", "Personal information")}
          </p>
          <p style={{ fontSize: "20px" }}>1/3</p>
        </div>
        <hr style={{ marginBottom: "69px" }} />
        <div className={infoUpdateStyles.nameUSername}>
          <InputReplayCustomRow />
        </div>
        <div className={infoUpdateStyles.upload}>
          <InputFile />
        </div>
        <div className={infoUpdateStyles.aboutUs}>
          <PersonalTextArea />
        </div>
        <PersonalMailTelephone />
      </div>
      <PersonButtonReplay />
    </div>
  );
}
