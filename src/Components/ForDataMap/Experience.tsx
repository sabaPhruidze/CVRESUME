import React from "react";
import { useContext, createContext, useState, useRef } from "react";
import { MyPersonalContext } from "../InfoUpdate";

import CommonInput from "./CommonInput";
import CorrectWrongComponent from "./CorrectWrongComponent";

import georgiaFlag from "../../Assets/Img/common/georgia.png";
import unitedKingdomFlag from "../../Assets/Img/common/unitedKingdom.png";
import lightMode from "../../Assets/Icon/sunMode.svg";
import darkMode from "../../Assets/Icon/nightMode.svg";

import Ellipse from "../../Assets/Img/2. SecondPage/Ellipse.svg";
import Vector from "../../Assets/Img/2. SecondPage/Vectorvector.svg";
import OrangeLogo from "../../Assets/Img/2. SecondPage/logoOrange.svg";
import mobileIcon from "../../Assets/Icon/phoneIcon.svg";
import spiralIcon from "../../Assets/Icon/@.svg";

import CommonStyles from "../Common.module.css";
import PersonalStyles from "../Personal.module.css";

export const MyExperienceContext = createContext<any>("w");
export default function PersonalLeftSide() {
  const useAppContext1 = useContext(MyPersonalContext);
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
    sEndDate,
    cDescription,
    sDescription,
  } = useAppContext1;
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
        cName,
        cUsername,
        cUploadImg,
        cEmail,
        cTel,
        cAboutMe,
        cBGColor,
        localStorage.setItem("cName", cName),
        localStorage.setItem("cUsername", cUsername),
        localStorage.setItem("cUploadImg", cUploadImg),
        localStorage.setItem("cEmail", cEmail),
        localStorage.setItem("cTel", cTel),
        localStorage.setItem("cAboutMe", cAboutMe),

        useAppContext1.sPage(useAppContext1.cPage + 1),
      ];
    }
    //ესაა მთავარი რომ თუ ყველაფერი სწორადაა შევსებული ამ შემთხვევაში გადავიდეს შემდეგ გვერდზე
  }
  //I am just using ref to test it.Even trougth I can solve most of the tasks using useState I think sometimes useRef is also helpful
  const textAreaRef = useRef<any>("");
  const emailRef = useRef<any>("");
  const mobileRef = useRef<any>("");
  return (
    <div
      className={
        cBGColor ? CommonStyles.infoContainerDark : CommonStyles.infoContainer
      }
    >
      <MyExperienceContext.Provider
        value={{
          cCorrect,
          cCorrect1,
          cCorrect2,
          cCorrect3,
          cVisible,
          cBGColor,
          cPage,
        }}
      >
        <CorrectWrongComponent />
      </MyExperienceContext.Provider>
      <img
        src={cBGColor ? lightMode : darkMode}
        alt="light or dark"
        className={
          cBGColor
            ? `${CommonStyles.modeSun} ${CommonStyles.CommonBGCPosition}`
            : `${CommonStyles.modeMoon} ${CommonStyles.CommonBGCPosition}`
        }
        onClick={() => {
          sBGColor(!cBGColor);
          localStorage.setItem("cBGColor", cBGColor);
        }}
      />
      <img
        src={cLanguage !== true ? unitedKingdomFlag : georgiaFlag}
        alt="language"
        className={`${CommonStyles.language} ${CommonStyles.CommonlanguagePosition}`}
        onClick={() => {
          sLanguage(!cLanguage);
        }}
      />
      <img
        src={Ellipse}
        alt="Ellipse"
        className={cBGColor ? CommonStyles.ellipseDark : CommonStyles.ellipse}
        onClick={() => useAppContext1.sPage(useAppContext1.cPage - 1)}
      />
      <img
        src={Vector}
        alt="Vector"
        className={cBGColor ? CommonStyles.vectorLight : CommonStyles.vector}
        onClick={() => useAppContext1.sPage(useAppContext1.cPage - 1)}
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
            {languageChanger("პირადი ინფო", "Personal information")}
          </p>
          <p
            style={{
              fontSize: "20px",
            }}
          >
            2/3
          </p>
        </div>
        <hr style={{ marginBottom: "69px" }} />
        <div className={PersonalStyles.positionEmployerInput}>
          <MyPersonalContext.Provider
            value={{
              cCorrect,
              cCorrect1,
              sName,
              cVisible,
              sUsername,
              cLanguage,
              sBGColor,
              cPosition,
              sPosition,
              cEmployer,
              sEmployer,
            }}
          >
            <CommonInput />
          </MyPersonalContext.Provider>
        </div>
        <div className={PersonalStyles.dateContainer}>
          <input type="date" className={PersonalStyles.calendarInput} />
          <input type="date" className={PersonalStyles.calendarInput} />
        </div>
        <div className={PersonalStyles.description}>
          <label htmlFor="Description" className={CommonStyles.labelStandard}>
            {languageChanger("აღწერა", "Description")}
          </label>
          <textarea
            placeholder={languageChanger(
              "როლი თანამდებობაზე და ზოგადი აღწერა",
              "Role in the position and general description"
            )}
            id="aboutMe"
            onChange={(e) => sAboutMe(e.target.value)}
            maxLength={250}
            ref={textAreaRef}
            style={{
              backgroundColor: cBGColor ? "black" : "white",
              color: cBGColor ? "white" : "black",
              height: 123,
              padding: "13px 16px",
            }}
          ></textarea>
          <hr
            style={{
              width: "100%",
              height: "1px",
              marginTop: "59px",
            }}
          />
          <button
            style={{
              marginTop: "45px",
              width: "289px",
              height: "89px",
              color: "white",
              backgroundColor: "#62A1EB",
            }}
          >
            მეტი გამოცდილების დამატება
          </button>
        </div>
      </div>
      <button
        className={CommonStyles.purpleButton}
        onClick={() => {
          validateInput(cName, cUsername, cUploadImg, cEmail, cTel);
          sVisible(true);
          if (
            (textAreaRef.current.value.length > 0 && !cBGColor) ||
            (textAreaRef.current.value.length > 0 && cBGColor)
          ) {
            textAreaRef.current.style.border = "1px solid #98E37E";
          } else if (textAreaRef.current.value.length < 0 && !cBGColor) {
            textAreaRef.current.style.border = "1px solid black"; //it will not become red because writing this line is not nessesary
            // according to the figma
          } else if (textAreaRef.current.value.length < 0 && cBGColor) {
            textAreaRef.current.style.border = "1px solid white";
          } else {
            return "";
          }
          sPage(2);
        }}
      >
        {languageChanger("შემდეგი", "Next")}
      </button>
    </div>
  );
}
