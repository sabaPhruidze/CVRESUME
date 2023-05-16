import React, { useContext } from "react";

import { context } from "../../App";

import CommonStyles from "../Styles/Common.module.css";
import HomeStyles from "../Styles/Home.module.css";
import infoUpdateStyles from "../Styles/infoUpdate.module.css";

import georgiaFlag from "../../Assets/Img/common/georgia.png";
import unitedKingdomFlag from "../../Assets/Img/common/unitedKingdom.png";
import lightMode from "../../Assets/Icon/sunMode.svg";
import darkMode from "../../Assets/Icon/nightMode.svg";
// for Home
import background from "../../Assets/Img/1. FirstPage/background1.jpg";
import backgroundDark from "../../Assets/Img/1. FirstPage/backgroundDark.jpg";
import redBerryBanner from "../../Assets/Img/1. FirstPage/redberryBanner.svg";
import diploma from "../../Assets/Img/1. FirstPage/diploma.svg";
// for Home

//for personal-
import Ellipse from "../../Assets/Img/2. SecondPage/Ellipse.svg";
import Vector from "../../Assets/Img/2. SecondPage/Vectorvector.svg";
// for personal-

// for Home
export function ImgReplay() {
  const useAppContext0 = useContext(context);
  const { cBGColor, sBGColor, cLanguage, sLanguage } = useAppContext0;

  const imgData = [
    {
      src: cBGColor ? lightMode : darkMode,
      alt: "light or dark",
      className: cBGColor
        ? `${CommonStyles.modeSun} ${HomeStyles.mode}`
        : `${CommonStyles.modeMoon} ${HomeStyles.mode}`,
      onClick: () => sBGColor(!useAppContext0.cBGColor),
      key: 0,
    },
    {
      src: cLanguage !== true ? unitedKingdomFlag : georgiaFlag,
      alt: "language",
      className: `${CommonStyles.language} ${HomeStyles.language}`,
      onClick: () => sLanguage(!useAppContext0.cLanguage),
      key: 1,
    },
    {
      src: cBGColor ? backgroundDark : background,
      alt: "background",
      className: HomeStyles.bgImage,
      key: 2,
    },
    {
      src: redBerryBanner,
      alt: "redBerryBanner",
      className: cBGColor
        ? `${HomeStyles.banner} ${HomeStyles.bannerDark}`
        : HomeStyles.banner,
      key: 3,
    },
    {
      src: diploma,
      alt: "diploma",
      className: cBGColor
        ? `${HomeStyles.diplomaImgDark} ${HomeStyles.diplomaImg}`
        : HomeStyles.diplomaImg,
      key: 4,
    },
  ];
  return (
    <>
      {imgData.map((data) => (
        <div key={data.key}>
          <img
            src={data.src}
            alt={data.alt}
            className={data.className}
            onClick={data.onClick}
          />
        </div>
      ))}
    </>
  );
}
// for many things
function languageChanger(changeReason: boolean, geo: string, eng: string) {
  return !changeReason ? geo : eng;
}
export function ButtonReplay() {
  const useAppContext0 = useContext(context);
  const { cBGColor, sPage, cLanguage } = useAppContext0;
  const buttonDataHome = [
    {
      className: cBGColor
        ? `${HomeStyles.buttonDark} ${HomeStyles.button}`
        : HomeStyles.button,
      onClick: () => sPage(1),
      language: languageChanger(cLanguage, "რეზიუმეს დამატება", "Add resume"),
      key: 0,
    },
  ];
  return (
    <>
      {buttonDataHome.map((data) => (
        <button
          className={data.className}
          onClick={data.onClick}
          key={data.key}
        >
          {data.language}
        </button>
      ))}
    </>
  );
}
// for Home

// for personal -
export function ImgReplayCustom() {
  const useAppContext0 = useContext(context);
  const { cBGColor, sBGColor, cLanguage, sLanguage, sPage, cPage } =
    useAppContext0;
  const imgData = [
    {
      src: cBGColor ? lightMode : darkMode,
      alt: "light or dark",
      className: cBGColor
        ? `${CommonStyles.modeSun} ${CommonStyles.CommonBGCPosition}`
        : `${CommonStyles.modeMoon} ${CommonStyles.CommonBGCPosition}`,
      onClick: () => sBGColor(!useAppContext0.cBGColor),
      key: 0,
    },
    {
      src: cLanguage !== true ? unitedKingdomFlag : georgiaFlag,
      alt: "language",
      className: `${CommonStyles.language} ${CommonStyles.CommonlanguagePosition}`,
      onClick: () => sLanguage(!useAppContext0.cLanguage),
      key: 1,
    },
    {
      src: Ellipse,
      alt: "Ellipse",
      className: cBGColor
        ? `${CommonStyles.ellipse} ${CommonStyles.ellipseDark}`
        : CommonStyles.ellipse,
      onClick: () => sPage(cPage - 1),
      key: 2,
    },
    {
      src: Vector,
      alt: "Vector",
      className: cBGColor
        ? `${CommonStyles.vectorDark} ${CommonStyles.vectorLight}`
        : CommonStyles.vectorDark,
      onClick: () => sPage(cPage - 1),
      key: 3,
    },
  ];
  return (
    <>
      {imgData.map((data) => (
        <div key={data.key}>
          <img
            src={data.src}
            alt={data.alt}
            className={data.className}
            onClick={data.onClick}
          />
        </div>
      ))}
    </>
  );
}
export function InputReplayCustomRow() {
  const useAppContext0 = useContext(context);
  const {
    cBGColor,
    sPage,
    cLanguage,
    sName,
    cCorrect,
    sUsername,
    cCorrect1,
    cVisible,
  } = useAppContext0;
  const dataMap = [
    {
      fullDivName: infoUpdateStyles.namePart,
      content: languageChanger(cLanguage, "სახელი", "Name"),
      htmlForId: "name",
      onChange: sName,
      inputPlaceHolder: !cLanguage ? "ანზორ" : "Anzor",
      borderCorrect: cCorrect,
    },
    {
      fullDivName: infoUpdateStyles.lastNamePart,
      content: !cLanguage ? "გვარი" : "Username",
      htmlForId: "userName",
      onChange: sUsername,
      inputPlaceHolder: languageChanger(cLanguage, "მუმლაძე", "Mumladze"),
      borderCorrect: cCorrect1,
    },
  ];
  return (
    <>
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
    </>
  );
}
// for personal -
export function InputReplayCustomColumn() {
  const useAppContext0 = useContext(context);
  const {
    cBGColor,
    sPage,
    cLanguage,
    cName,
    sName,
    cCorrect,
    sUsername,
    cUsername,
    cCorrect1,
    cVisible,
  } = useAppContext0;
  const dataMap = [
    {
      fullDivName: infoUpdateStyles.namePart,
      content: languageChanger(!cLanguage, "სახელი", "Name"),
      htmlForId: "name",
      onChange: sName,
      inputPlaceHolder: !cLanguage ? "ანზორ" : "Anzor",
      borderCorrect: cCorrect,
      key: 0,
    },
    {
      fullDivName: infoUpdateStyles.lastNamePart,
      content: !cLanguage ? "გვარი" : "Username",
      htmlForId: "userName",
      onChange: sUsername,
      inputPlaceHolder: languageChanger(!cLanguage, "მუმლაძე", "Mumladze"),
      borderCorrect: cCorrect1,
      key: 1,
    },
  ];
  return (
    <>
      {dataMap.map((data: any) => {
        return (
          <div className={data.fullDivName} key={data.key}>
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
    </>
  );
}
export function InputFile() {
  const useAppContext0 = useContext(context);
  const {
    cBGColor,
    sPage,
    cLanguage,
    sName,
    cCorrect,
    sUsername,
    cCorrect1,
    cVisible,
    sUploadImg,
  } = useAppContext0;
  const dataMap = [
    {
      pContent: languageChanger(
        cLanguage,
        "პირადი ფოტოს ატვირთვა",
        "Upload a personal photo"
      ),
      htmlFor: "uploadImg",
      labelStyle: !cLanguage ? "3px 0 5px 20px" : "5px 0 5px 30px",
      labelId: "textArea",
      buttonContent: languageChanger(cLanguage, "ატვირთვა", "Upload"),
    },
  ];
  return (
    <>
      {dataMap.map((data: any, idx: number) => {
        return (
          <>
            <p key={idx}>{data.pContent}</p>
            <label
              htmlFor={data.htmlFor}
              style={{
                padding: data.labelStyle,
              }}
              id={data.labelId}
            >
              {data.buttonContent}
              <input
                type="file"
                alt="upload photo"
                accept="image/*"
                id={data.htmlFor}
                onChange={(e) => {
                  sUploadImg(e.target.files?.[0]);
                  //if something is uploaded it will be save in sUploadImg
                }}
              />
              {/* allowing only Images */}
            </label>
          </>
        );
      })}
    </>
  );
}
export function PersonalTextArea() {
  const useAppContext0 = useContext(context);
  const { cBGColor, cLanguage, sAboutMe, aboutMeRef, cVisible } =
    useAppContext0;

  const DataOfTextArea = [
    {
      key: 0,
      htmlFor: "aboutMe",
      ref: aboutMeRef,
      labelContext: languageChanger(cLanguage, "ჩემ შესახებ ", "About me"),
      spanContext: languageChanger(cLanguage, "(არასავალდებულო)", "(optional)"),
      placeHolder: languageChanger(
        cLanguage,
        "ზოგადი ინფო შენ შესახებ",
        "General information about you"
      ),
      onChange: (e: any) => {
        sAboutMe(e.target.value);
      },
    },
  ];

  return (
    <>
      {DataOfTextArea.map((data: any) => (
        <div key={data.key}>
          <label htmlFor={data.htmlFor} className={CommonStyles.labelStandard}>
            {data.labelContext}
            <span className={CommonStyles.spanStandard}>
              {data.spanContext}
            </span>
          </label>
          <textarea
            placeholder={data.placeHolder}
            id={data.htmlFor}
            onChange={data.onChange}
            maxLength={250}
            style={{
              backgroundColor: cBGColor ? "black" : "white",
              color: cBGColor ? "white" : "black",
              border:
                (!cVisible && cBGColor) ||
                (cVisible && data.ref.current.length === 0)
                  ? "1px solid white"
                  : "1px solid black",
            }}
            ref={data.ref}
          ></textarea>
        </div>
      ))}
    </>
  );
}
export function PersonalMailTelephone() {
  const useAppContext0 = useContext(context);
  const { cBGColor, sEmail, cLanguage, cCorrect2, sTel, cCorrect3, cVisible } =
    useAppContext0;
  const dataMap = [
    {
      fullDivName: infoUpdateStyles.mail,
      content: languageChanger(cLanguage, "ელ.ფოსტა", "Email"),
      htmlForId: "email",
      onChange: sEmail,
      inputPlaceHolder: "anzorr777@redberry.ge",
      borderCorrect: cCorrect2,
      type: "email",
      span: languageChanger(
        cLanguage,
        "უნდა მთავრდებოდეს @redberry.ge-ით",
        "Must end with @redberry.ge"
      ),
      key: 0,
    },
    {
      fullDivName: infoUpdateStyles.telephone,
      content: languageChanger(cLanguage, "მობილურის ნომერი", "Mobile number"),
      htmlForId: "tel",
      onChange: sTel,
      inputPlaceHolder: languageChanger(
        cLanguage,
        "უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს",
        "Must meet the Georgian mobile number format"
      ),
      borderCorrect: cCorrect3,
      type: "tel",
      span: languageChanger(
        cLanguage,
        "უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს",
        "Must meet the Georgian mobile number format"
      ),
      key: 1,
    },
  ];
  return (
    <>
      {dataMap.map((data: any) => {
        return (
          <div className={data.fullDivName} key={data.key}>
            <label
              htmlFor={data.htmlForId}
              className={CommonStyles.labelStandard}
            >
              {data.content}
            </label>
            <input
              type={data.type}
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
            <span className={CommonStyles.spanStandard}>{data.span}</span>
          </div>
        );
      })}
    </>
  );
}
export function PersonButtonReplay() {
  const useAppContext0 = useContext(context);
  const {
    cBGColor,
    cPage,
    sPage,
    cLanguage,
    cName,
    cUsername,
    cUploadImg,
    cEmail,
    cTel,
    sVisible,
    sCorrect,
    sCorrect1,
    sCorrect2,
    sCorrect3,
    cAboutMe,
    aboutMeRef,
  } = useAppContext0;
  const buttonDataHome = [
    {
      className: CommonStyles.purpleButton,
      onClick: () => {
        validateInput(cName, cUsername, cUploadImg, cEmail, cTel);
        sVisible(true);
      },
      language: languageChanger(cLanguage, "შემდეგი", "Next"),
      key: 0,
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
    } else {
      sCorrect2(false);
    }
    if (phone && telNumber.test(phone)) {
      sCorrect3(true);
    } else {
      sCorrect3(false);
    }
    if (aboutMeRef.current.value.length > 0) {
      aboutMeRef.current.style.border = "1px solid #98E37E";
    } else if (aboutMeRef.current.value.length === 0 && cBGColor) {
      aboutMeRef.current.style.border = "1px solid white";
    } else if (aboutMeRef.current.value.length === 0 && !cBGColor) {
      aboutMeRef.current.style.border = "1px solid black";
    } else {
      aboutMeRef.current.style.border = "1px solid black";
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
        sPage(cPage + 1),
      ];
    }
  }
  return (
    <>
      {buttonDataHome.map((data) => (
        <button
          className={data.className}
          onClick={data.onClick}
          key={data.key}
        >
          {data.language}
        </button>
      ))}
    </>
  );
}
