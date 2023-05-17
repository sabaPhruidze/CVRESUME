import React from "react";
import { useContext, createContext } from "react";
import { context } from "../../App";
import { ImgReplayCustom } from "../DataMap/Replay";

import CorrectWrongComponent from "./CorrectWrongComponent";
import CommonStyles from "../Styles/Common.module.css";
import Ellipse from "../../Assets/Img/2. SecondPage/Ellipse.svg";
import Vector from "../../Assets/Img/2. SecondPage/Vectorvector.svg";
export const MyPersonalContext = createContext<any>("w");

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
  } = useAppContext3;
  function languageChanger(geo: string, eng: string) {
    return !cLanguage ? geo : eng;
  }
  return (
    <div
      className={
        cBGColor
          ? `${CommonStyles.infoContainer} ${CommonStyles.infoContainerDark}`
          : CommonStyles.infoContainer
      }
      style={{ overflow: "hidden" }}
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
      </div>
      <button className={CommonStyles.purpleButton}>
        {languageChanger("შემდეგი", "Next")}
      </button>
    </div>
  );
}
