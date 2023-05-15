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

import PersonalStyles from "../Styles/Personal.module.css";
import CommonStyles from "../Styles/Common.module.css";

export const MyPersonalLeftSideContext = createContext<any>("w");
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
  } = useAppContext1;
  function languageChanger(geo: string, eng: string) {
    return !cLanguage ? geo : eng;
  }
  const dataMap = [
    {
      fullDivName: PersonalStyles.namePart,
      content: !cLanguage ? "სახელი" : "Name",
      htmlForId: "name",
      onChange: sName,
      inputPlaceHolder: !cLanguage ? "ანზორ" : "Anzor",
      borderCorrect: cCorrect,
    },
    {
      fullDivName: PersonalStyles.lastNamePart,
      content: !cLanguage ? "გვარი" : "Username",
      htmlForId: "userName",
      onChange: sUsername,
      inputPlaceHolder: !cLanguage ? "მუმლაძე" : "Mumladze",
      borderCorrect: cCorrect1,
    },
  ];
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
        localStorage.setItem("cBGColor", cBGColor),
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
        cBGColor
          ? `${CommonStyles.infoContainer} ${CommonStyles.infoContainerDark}`
          : CommonStyles.infoContainer
      }
    >
      <MyPersonalLeftSideContext.Provider
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
      </MyPersonalLeftSideContext.Provider>
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
        className={
          cBGColor
            ? `${CommonStyles.ellipse} ${CommonStyles.ellipseDark}`
            : CommonStyles.ellipse
        }
        onClick={() => useAppContext1.sPage(useAppContext1.cPage - 1)}
      />
      <img
        src={Vector}
        alt="Vector"
        className={
          cBGColor
            ? `${CommonStyles.vectorDark} ${CommonStyles.vectorLight}`
            : CommonStyles.vectorDark
        }
        onClick={() => useAppContext1.sPage(useAppContext1.cPage - 1)}
      />
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
          {dataMap.map((data: any, idx: number) => {
            return (
              <div className={data.fullDivName} key={idx}>
                <label
                  htmlFor={data.htmlForId}
                  className={CommonStyles.labelStandard}
                >
                  {data.content}
                </label>
                <input
                  type="text"
                  placeholder={data.inputPlaceHolder}
                  id={data.htmlForId}
                  className={CommonStyles.inputStandard}
                  onChange={(e) => {
                    data.onChange(e.target.value);
                  }}
                  style={{
                    border: !cVisible
                      ? cBGColor
                        ? "1px solid white"
                        : "1px solid black"
                      : data.borderCorrect
                      ? "1px solid #98E37E"
                      : "1px solid #EF5050",
                    backgroundColor: cBGColor ? "black" : "white",
                    color: cBGColor ? "white" : "black",
                  }}
                />
                <span className={CommonStyles.spanStandard}>
                  {!cLanguage
                    ? "მინიმუმ 2 ასო, ქართული ასოები"
                    : "At least 2 letters, Georgian letters"}
                </span>
              </div>
            );
          })}
        </div>
        <div className={PersonalStyles.upload}>
          <p>
            {languageChanger(
              "პირადი ფოტოს ატვირთვა",
              "Upload a personal photo"
            )}
          </p>
          <label
            htmlFor="uploadImg"
            style={{
              padding: !cLanguage ? "3px 0 5px 20px" : "5px 0 5px 30px",
            }}
            id="textArea"
          >
            {languageChanger("ატვირთვა", "Upload")}
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
            {languageChanger("ჩვენს შესახებ", "About us")}
            <span className={CommonStyles.spanStandard}>
              {languageChanger("(არასავალდებულო)", "(optional)")}
            </span>
          </label>
          <textarea
            placeholder={languageChanger(
              "ზოგადი ინფო შენ შესახებ",
              "General information about you"
            )}
            id="aboutMe"
            onChange={(e) => sAboutMe(e.target.value)}
            maxLength={250}
            ref={textAreaRef}
            style={{
              backgroundColor: cBGColor ? "black" : "white",
              color: cBGColor ? "white" : "black",
              border: 0,
            }}
          ></textarea>
        </div>
        <div className={PersonalStyles.mail}>
          <label htmlFor="email" className={CommonStyles.labelStandard}>
            {languageChanger("ელ.ფოსტა", "Email")}
          </label>
          <input
            type="email"
            placeholder="anzorr777@redberry.ge"
            id="email"
            className={`${CommonStyles.inputStandard} ${CommonStyles.commonInputBorder}`}
            onChange={(e) => sEmail(e.target.value)}
            ref={emailRef}
            style={{
              border: cBGColor ? "1px solid white" : "1px solid black",
              backgroundColor: cBGColor ? "black" : "white",
              color: cBGColor ? "white" : "black",
            }}
          />
          <span className={CommonStyles.spanStandard}>
            {languageChanger(
              "უნდა მთავრდებოდეს @redberry.ge-ით",
              "Must end with @redberry.ge"
            )}
          </span>
        </div>
        <div className={PersonalStyles.telephone}>
          <label htmlFor="tel" className={CommonStyles.labelStandard}>
            {languageChanger("მობილურის ნომერი", "Mobile number")}
          </label>
          <input
            type="tel"
            placeholder="+995 551 12 34 56"
            id="tel"
            className={`${CommonStyles.inputStandard} ${CommonStyles.commonInputBorder}`}
            onChange={(e) => sTel(e.target.value)}
            ref={mobileRef}
            style={{
              border: cBGColor ? "1px solid white" : "1px solid black",
              backgroundColor: cBGColor ? "black" : "white",
              color: cBGColor ? "white" : "black",
            }}
          />
          <span className={CommonStyles.spanStandard}>
            {languageChanger(
              "უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს",
              "Must meet the Georgian mobile number format"
            )}
          </span>
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
