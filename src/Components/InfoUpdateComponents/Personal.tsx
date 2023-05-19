import React from "react";
import { useContext, createContext, useState, useRef } from "react";
import { infoUpdateContext } from "../InfoUpdate";

import CorrectWrongComponent from "./CorrectWrongComponent";
import {
  ImgReplay,
  InputReplayCustomRow,
  InputFile,
  PersonalTextArea,
  PersonalMailTelephone,
  ButtonReplay,
  HeadlineDivCustom,
} from "../DataMap/Replay";

import infoUpdateStyles from "../Styles/infoUpdate.module.css";
import CommonStyles from "../Styles/Common.module.css";

export const MyPersonalContext = createContext<any>("w");
export default function Personal() {
  const useAppContext1 = useContext(infoUpdateContext);
  const { cBGColor, cCorrect, cCorrect1, cCorrect2, cCorrect3, cVisible } =
    useAppContext1;
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
      <ImgReplay />
      <div className={CommonStyles.skeleton}>
        <HeadlineDivCustom />
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
      <ButtonReplay />
    </div>
  );
}
