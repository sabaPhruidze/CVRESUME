import React from "react";
import { createContext, useContext, useState, useRef } from "react";
import { context } from "../App";
import Home from "./Home";
import PersonalLeftSide from "./ForDataMap/PersonalLeftSide";
import Experience from "./Experience";

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

export default function Personal() {
  const useAppContext1 = useContext(context);
  function languageChanger(geo: string, eng: string) {
    return !cLanguage ? geo : eng;
  }
  function validateInput(
    name: string | undefined,
    username: string | undefined,
    img: any,
    email: string | undefined,
    phone: any
  ) {
    const georgianWordsRegex = /^(?:.*[ა-ჰ]){2,}.*$/;
    const mailRegex = /.*@redberry\.ge$/;
    const telNumber = /^\+995 \d{3} \d{2} \d{2} \d{2}$/;
    if (name && georgianWordsRegex.test(name)) {
      sCorrect(true);
    } else {
      sCorrect(false);
    }
    if (username && georgianWordsRegex.test(username)) {
      sCorrect1(true);
    } else {
      sCorrect1(false);
    }
    if (email && mailRegex.test(email)) {
      sCorrect2(true);
      emailRef.current.style.border = "1px solid #98E37E";
    } else {
      sCorrect2(false);
      emailRef.current.style.border = "1px solid #EF5050";
    }
    if (phone && telNumber.test(phone)) {
      sCorrect3(true);
      mobileRef.current.style.border = "1px solid #98E37E";
    } else {
      sCorrect3(false);
      mobileRef.current.style.border = "1px solid #EF5050";
    }
    if (
      name &&
      georgianWordsRegex.test(name) &&
      username &&
      georgianWordsRegex.test(username) &&
      img &&
      email &&
      mailRegex.test(email) &&
      phone &&
      telNumber.test(phone)
    ) {
      return [
        localStorage.setItem("cName", cName),
        localStorage.setItem("cUsername", cUsername),
        localStorage.setItem("cUploadImg", cUploadImg),
        localStorage.setItem("cEmail", cEmail),
        localStorage.setItem("cTel", cTel),
        localStorage.setItem("cAboutMe", cAboutMe),
        cName,
        cUsername,
        cUploadImg,
        cEmail,
        cTel,
        cAboutMe,
        useAppContext1.sPage(useAppContext1.cPage + 1),
      ];
    }
    //ესაა მთავარი რომ თუ ყველაფერი სწორადაა შევსებული ამ შემთხვევაში გადავიდეს შემდეგ გვერდზე
  }
  //I am just using ref to test it.Even trougth I can solve most of the tasks using useState I think sometimes useRef is also helpful
  const textAreaRef = useRef<any>("");
  const emailRef = useRef<any>("");
  const mobileRef = useRef<any>("");

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
      }}
    >
      <div
        className={`${CommonStyles.container} ${CommonStyles.containerFlex}`}
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
