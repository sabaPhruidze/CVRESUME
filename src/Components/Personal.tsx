import React from "react";
import { createContext, useContext, useState, useRef } from "react";
import { context } from "../App";

import CommonInput from "./ForDataMap/CommonInput";
import CorrectWrongComponent from "./ForDataMap/CorrectWrongComponent";
import Rendered from "./ForDataMap/Rendered";

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

export const MyPersonalContext = createContext<any>("s");

export default function Personal() {
  const useAppContext1 = useContext(context);

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
    <div className={`${CommonStyles.container} ${CommonStyles.containerFlex}`}>
      <MyPersonalContext.Provider
        value={{
          cCorrect,
          cCorrect1,
          cCorrect2,
          cCorrect3,
          cVisible,
        }}
      >
        <CorrectWrongComponent />
      </MyPersonalContext.Provider>
      <div className={CommonStyles.infoContainer}>
        <img
          src={Ellipse}
          alt="Ellipse"
          className={CommonStyles.ellipse}
          onClick={() => useAppContext1.sPage(useAppContext1.cPage - 1)}
        />
        <img
          src={Vector}
          alt="Vector"
          className={CommonStyles.vector}
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
          <hr style={{ marginBottom: "69px" }} />
          <div className={PersonalStyles.nameUSername}>
            <MyPersonalContext.Provider
              value={{
                cCorrect,
                cCorrect1,
                sName,
                cVisible,
                sUsername,
              }}
            >
              <CommonInput />
            </MyPersonalContext.Provider>
          </div>
          <div className={PersonalStyles.upload}>
            <p>პირადი ფოტოს ატვირთვა</p>
            <label
              htmlFor="uploadImg"
              style={{ textAlign: "center" }}
              id="textArea"
            >
              ატვირთვა
              <input
                type="file"
                alt="upload photo"
                accept="image/*"
                id="uploadImg"
                onChange={(e) => {
                  sUploadImg(e.target.files?.[0]);
                  //if something is uploaded it will be save in sUploadImg
                }}
              />
              {/* allowing only Images */}
            </label>
          </div>
          <div className={PersonalStyles.aboutUs}>
            <label htmlFor="aboutMe" className={CommonStyles.labelStandard}>
              ჩვენს შესახებ
              <span className={CommonStyles.spanStandard}>
                (არასავალდებულო)
              </span>
            </label>
            <textarea
              placeholder="ზოგადი ინფო შენ შესახებ"
              id="aboutMe"
              onChange={(e) => sAboutMe(e.target.value)}
              maxLength={250}
              ref={textAreaRef}
              style={{ border: "1px solid black" }}
            ></textarea>
          </div>
          <div className={PersonalStyles.mail}>
            <label htmlFor="email" className={CommonStyles.labelStandard}>
              ელ.ფოსტა
            </label>
            <input
              type="email"
              placeholder="anzorr777@redberry.ge"
              id="email"
              className={`${CommonStyles.inputStandard} ${CommonStyles.commonInputBorder}`}
              onChange={(e) => sEmail(e.target.value)}
              ref={emailRef}
            />
            <span className={CommonStyles.spanStandard}>
              უნდა მთავრდებოდეს @redberry.ge-ით
            </span>
          </div>
          <div className={PersonalStyles.telephone}>
            <label htmlFor="tel" className={CommonStyles.labelStandard}>
              მობილურის ნომერი
            </label>
            <input
              type="tel"
              placeholder="+995 551 12 34 56"
              id="tel"
              className={`${CommonStyles.inputStandard} ${CommonStyles.commonInputBorder}`}
              onChange={(e) => sTel(e.target.value)}
              ref={mobileRef}
            />
            <span className={CommonStyles.spanStandard}>
              უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
            </span>
          </div>
        </div>
        <button
          className={CommonStyles.purpleButton}
          onClick={() => {
            validateInput(cName, cUsername, cUploadImg, cEmail, cTel);
            sVisible(true);
            if (textAreaRef.current.value.length > 0) {
              textAreaRef.current.style.border = "1px solid #98E37E";
            } else {
              textAreaRef.current.style.border = "1px solid black"; //it will not become red because writing this line is not nessesary
              // according to the figma
            }
          }}
        >
          შემდეგი
        </button>
      </div>
      <MyPersonalContext.Provider
        value={{ cName, cUsername, cEmail, cTel, cAboutMe, cUploadImg }}
      >
        <Rendered />
      </MyPersonalContext.Provider>
    </div>
  );
}
