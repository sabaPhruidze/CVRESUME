import React from "react";
import { createContext, useContext, useEffect } from "react";
import { context } from "../App";

import CommonStyles from "./Common.module.css";
import Rendered from "./ForDataMap/Rendered";

import Ellipse from "../Assets/Img/2. SecondPage/Ellipse.svg";
import Vector from "../Assets/Img/2. SecondPage/Vectorvector.svg";
export const MyPersonalContext1 = createContext<any>("s");

export default function Experience() {
  const useAppContext2 = useContext(context);
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
  } = useAppContext2;
  // useEffect(() => {
  //   const YourComponent = () => {
  //     sName(localStorage.getItem("cName") || "");
  //     sUsername(localStorage.getItem("cUsername") || "");
  //     sEmail(localStorage.getItem("cEmail") || "");
  //     sTel(localStorage.getItem("cTel") || "");
  //     sAboutMe(localStorage.getItem("cAboutMe") || "");
  //     sUploadImg(localStorage.getItem("cUploadImg") || "");
  //   };
  //   YourComponent();
  // }, []);
  return (
    <div className={`${CommonStyles.container} ${CommonStyles.containerFlex}`}>
      <div className={CommonStyles.infoContainer}>
        <img
          src={Ellipse}
          alt="Ellipse"
          className={CommonStyles.ellipse}
          onClick={() => useAppContext2.sPage(1)}
        />
        <img
          src={Vector}
          alt="Vector"
          className={CommonStyles.vector}
          onClick={() => useAppContext2.sPage(1)}
        />
        <div className={CommonStyles.skeleton}>
          <div className={CommonStyles.dFlex}>
            <p
              style={{
                fontSize: "24px",
                marginBottom: "12px",
                fontWeight: "700",
              }}
            >
              პირადი ინფო
            </p>
            <p
              style={{
                fontSize: "20px",
              }}
            >
              1/3
            </p>
          </div>
          <hr />
        </div>
      </div>
      <MyPersonalContext1.Provider
        value={{ cName, cUsername, cEmail, cTel, cUploadImg }}
      >
        <Rendered />
      </MyPersonalContext1.Provider>
    </div>
  );
}
