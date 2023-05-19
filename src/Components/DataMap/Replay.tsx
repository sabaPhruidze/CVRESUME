import React, { useContext, useRef, useState } from "react";

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
//for infoUpdate
import Ellipse from "../../Assets/Img/2. SecondPage/Ellipse.svg";
import Vector from "../../Assets/Img/2. SecondPage/Vectorvector.svg";
// for infoUpdate

// for Custom
export function ImgReplay() {
  const useAppContext0 = useContext(context);
  const {
    cBGColor,
    sBGColor,
    cLanguage,
    sLanguage,
    sPage,
    cPage,
    cVisible1,
    sVisible1,
  } = useAppContext0;

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
  const imgData1 = [
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
      onClick: () => {
        sPage(cPage - 1);
        if (cVisible1) {
          sVisible1(false);
        }
      },
      key: 2,
    },
    {
      src: Vector,
      alt: "Vector",
      className: cBGColor
        ? `${CommonStyles.vectorDark} ${CommonStyles.vectorLight}`
        : CommonStyles.vectorDark,
      onClick: () => {
        sPage(cPage - 1);
        if (cVisible1) {
          sVisible1(false);
        }
      },
      key: 3,
    },
  ];
  const imgList = cPage === 0 ? imgData : imgData1;
  return (
    <>
      {imgList.map((data) => (
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
function languageChanger(changeReason: boolean, geo: string, eng: string) {
  return !changeReason ? geo : eng;
}
export function ButtonReplay() {
  const useAppContext0 = useContext(context);
  const {
    cBGColor,
    sPage,
    cLanguage,
    cPage,
    cName,
    sTop,
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
    sMoreExperience,
    ExperienceTextAreaRef,
    sCorrect5,
    sCorrect6,
    cTop,
    ExperienceDateStartRef,
    ExperienceDateEndRef,
    ExperienceDateStartRef1,
    ExperienceDateEndRef1,
    ExperienceDateStartRef2,
    ExperienceDateEndRef2,
    ExperienceTextAreaRef1,
    ExperienceTextAreaRef2,
    sVisible1,
    cPosition,
    cEmployer,
    cStartDate,
    cEndDate,
    cPosition1,
    cEmployer1,
    cPosition2,
    cEmployer2,
    cDescription,
    cMoreExperience,
  } = useAppContext0;
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
  const buttonDataPersonal = [
    {
      className: cBGColor
        ? `${CommonStyles.purpleButtonDark} ${CommonStyles.purpleButton}`
        : CommonStyles.purpleButton,
      onClick: () => {
        validateInputPersonal(cName, cUsername, cUploadImg, cEmail, cTel);
        sVisible(true);
      },
      language: languageChanger(cLanguage, "შემდეგი", "Next"),
      key: 0,
    },
  ];
  const buttonDataExperience = [
    {
      className: cBGColor
        ? `${CommonStyles.purpleButtonBack} ${CommonStyles.purpleButtonTwiceDark}`
        : ` ${CommonStyles.purpleButtonTwice} ${CommonStyles.purpleButtonBack}`,
      onClick: () => {
        sPage(cPage - 1);
        sVisible1(false);
      },
      language: languageChanger(cLanguage, "უკან", "Back"),
      key: 0,
    },
    {
      className: cBGColor
        ? `${CommonStyles.purpleButtonTwiceDark}`
        : `${CommonStyles.purpleButtonTwice}`,
      onClick: () => {
        validateInput1(
          cPosition,
          cEmployer,
          cStartDate,
          cEndDate,
          cDescription,
          ExperienceTextAreaRef
        );
        sVisible1(true);
      },
      language: languageChanger(cLanguage, "შემდეგი", "Next"),
      key: 1,
    },
  ];
  const properButton =
    cPage === 0
      ? buttonDataHome
      : cPage === 1
      ? buttonDataPersonal
      : buttonDataExperience;
  function validateInputPersonal(
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
    if (cAboutMe && cAboutMe.length > 0) {
      aboutMeRef.current.style.border = "1px solid #98E37E";
    } else {
      aboutMeRef.current.style.border = "1px solid #BCBCBC";
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
        sPage(cPage + 1),
      ];
    }
  }
  function validateInput1(
    Position: string | undefined,
    employer: string | undefined,
    startDate: string | undefined,
    endDate: string | undefined,
    description: any,
    ExperienceTextAreaRef: any
  ) {
    const WordsRegex = /.{2}.*/;
    const DateRegex =
      /^(((19[8-9]\d)|20[0-1]\d|202[0-3])-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/; //the year must be between 1980-2023

    if (Position && WordsRegex.test(Position)) {
      sCorrect5(true);
    } else {
      sCorrect5(false);
    }

    if (employer && WordsRegex.test(employer)) {
      sCorrect6(true);
    } else {
      sCorrect6(false);
    }
    if (startDate && DateRegex.test(startDate)) {
      ExperienceDateStartRef.current.style.border = "1px solid #98E37E";
    } else {
      ExperienceDateStartRef.current.style.border = "1px solid #EF5050";
    }

    if (endDate && DateRegex.test(endDate)) {
      ExperienceDateEndRef.current.style.border = "1px solid #98E37E";
    } else {
      ExperienceDateEndRef.current.style.border = "1px solid #EF5050";
    }
    if (cDescription && cDescription.length > 0) {
      ExperienceTextAreaRef.current.style.border = "1px solid #98E37E";
    } else {
      ExperienceTextAreaRef.current.style.border = "1px solid #BCBCBC";
    }
    if (
      Position &&
      WordsRegex.test(Position) &&
      employer &&
      WordsRegex.test(employer) &&
      startDate &&
      DateRegex.test(startDate) &&
      endDate &&
      DateRegex.test(endDate)
    ) {
      return [
        sVisible1(false),
        cPosition,
        cEmployer,
        cPosition1,
        cEmployer1,
        cPosition2,
        cEmployer2,
        cStartDate,
        cEndDate,
        cDescription,

        cMoreExperience >= 1
          ? `${ExperienceTextAreaRef1} ${ExperienceDateStartRef1} ${ExperienceDateEndRef1}`
          : "",
        cMoreExperience >= 2
          ? `${ExperienceTextAreaRef2} ${ExperienceDateStartRef2} ${ExperienceDateEndRef2}`
          : "",

        sPage(cPage + 1),
        sMoreExperience(0),
      ];
    }
  }

  return (
    <>
      {properButton.map((data) => (
        <button
          className={data.className}
          onClick={data.onClick}
          key={data.key}
          style={
            cPage === 2
              ? {
                  position: "absolute",
                  top: cMoreExperience > 0 ? cTop + 114 : 918,
                  right: "150px",
                }
              : {}
          }
        >
          {data.language}
        </button>
      ))}
    </>
  );
}
// for custom

// for personal -
export function HeadlineDivCustom() {
  const useAppContext0 = useContext(context);
  const { cLanguage, cPage } = useAppContext0;
  function numberChanger(cPage: any) {
    switch (cPage) {
      case 1:
        return "1/3";
        break;
      case 2:
        return "2/3";
        break;
      case 3:
        return "3/3";
        break;
    }
  }
  return (
    <>
      <div className={CommonStyles.headline}>
        <p
          style={{
            fontSize: "24px",
            marginBottom: "12px",
            fontWeight: "700",
          }}
        >
          {languageChanger(
            cLanguage,
            cPage === 1
              ? "პირადი ინფო"
              : cPage === 2
              ? "გამოცდილება"
              : "განათლება",
            cPage === 1
              ? "Personal information"
              : cPage === 2
              ? "Experience"
              : "Knowledge"
          )}
        </p>
        <p style={{ fontSize: "20px" }}>{numberChanger(cPage)}</p>
      </div>
      <hr style={{ marginBottom: "69px" }} />
    </>
  );
}
export function InputReplayCustomRow() {
  const useAppContext0 = useContext(context);
  const {
    cBGColor,
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
      set: sName,
      inputPlaceHolder: !cLanguage ? "ანზორ" : "Anzor",
      borderCorrect: cCorrect,
    },
    {
      fullDivName: infoUpdateStyles.lastNamePart,
      content: !cLanguage ? "გვარი" : "Username",
      htmlForId: "userName",
      set: sUsername,
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
                data.set(e.target.value);
              }}
              style={{
                border: cVisible
                  ? data.borderCorrect
                    ? "1px solid #98E37E"
                    : "1px solid #EF5050"
                  : "1px solid #BCBCBC",
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
export function InputFile() {
  const useAppContext0 = useContext(context);
  const { cLanguage, sUploadImg, cBGColor } = useAppContext0;
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
      key: 0,
    },
  ];
  return (
    <>
      {dataMap.map((data) => (
        <div
          key={data.key}
          className={
            cBGColor
              ? `${infoUpdateStyles.upload} ${infoUpdateStyles.uploadDark}`
              : infoUpdateStyles.upload
          }
        >
          <p>{data.pContent}</p>
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
        </div>
      ))}
    </>
  );
}
export function PersonalTextArea() {
  const useAppContext0 = useContext(context);
  const {
    cBGColor,
    cLanguage,
    sAboutMe,
    cAboutMe,
    aboutMeRef,
    cDescription,
    sDescription,
    ExperienceTextAreaRef,
    cPage,
  } = useAppContext0;

  const PersonalTextArea = [
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
      value: cAboutMe,
    },
  ];
  return (
    <>
      {PersonalTextArea.map((data: any) => (
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
            ref={data.ref}
            style={{
              backgroundColor: cBGColor ? "black" : "white",
              color: cBGColor ? "white" : "black",
              border: "1px solid #BCBCBC",
              padding: "13px 16px",
              marginTop: 8,
            }}
            value={data.value}
          ></textarea>
        </div>
      ))}
    </>
  );
}
// I can join PersonalMailtelephone to the InputReplayCustomRow by using if else and changing their spaces ,but it is an additional work which I think is not nessesary currently
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
          <div
            className={data.fullDivName}
            key={data.key}
            style={{
              marginTop: 50,
            }}
          >
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
                border: cVisible
                  ? data.borderCorrect
                    ? "1px solid #98E37E"
                    : "1px solid #EF5050"
                  : "1px solid #BCBCBC",
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
//I prefer to stay this like it is
export function ExperienceButtonReplayskyColor() {
  const useAppContext0 = useContext(context);
  const {
    cPage,
    sPage,
    cBGColor,
    cLanguage,
    cMoreExperience,
    sMoreExperience,
    cTop,
    sTop,
  } = useAppContext0;
  const buttonDataHome = [
    {
      className: cBGColor
        ? `${CommonStyles.skyColorButton} ${CommonStyles.skyColorButtonDark}`
        : CommonStyles.skyColorButton,

      language: languageChanger(
        cLanguage,
        "მეტი გამოცდილების დამატება",
        "Adding more experience"
      ),
      key: 1,
      onClick: () => {
        sMoreExperience(cMoreExperience < 2 ? cMoreExperience + 1 : 2);
        sTop(cMoreExperience < 2 ? cTop + 600 : 804 * 2 + 400);
      },
    },
  ];

  return (
    <>
      {buttonDataHome.map((data) => (
        <button
          className={data.className}
          onClick={data.onClick}
          key={data.key}
          style={{
            position: "absolute",
            top: cMoreExperience > 0 ? cTop - 105 + 45 : 804,
            left: "149px",
            zIndex: 100,
          }}
        >
          {data.language}
        </button>
      ))}
    </>
  );
}

// for current moment I didnot made the regex for the button so I will stay it until I make it
export function KnowledgeButtonReplay() {
  const useAppContext0 = useContext(context);
  const {
    cPage,
    sPage,
    cLanguage,
    cBGColor,
    sMoreExperience,
    ExperienceTextAreaRef,
    sCorrect5,
    sCorrect6,
    sCorrect7,
    sCorrect8,
    sCorrect9,
    sCorrect10,
    cTop,
    sTop,
    ExperienceDateStartRef,
    ExperienceDateEndRef,
    ExperienceDateStartRef1,
    ExperienceDateEndRef1,
    ExperienceDateStartRef2,
    ExperienceDateEndRef2,
    ExperienceTextAreaRef1,
    ExperienceTextAreaRef2,
    sVisible1,
    cPosition,
    cEmployer,
    cStartDate,
    cEndDate,
    cPosition1,
    cEmployer1,
    cStartDate1,
    cEndDate1,
    cPosition2,
    cEmployer2,
    cStartDate2,
    cEndDate2,
    cDescription,
    cMoreExperience,
  } = useAppContext0;
  const buttonDataHome = [
    {
      className: ` ${CommonStyles.purpleButtonBack} ${CommonStyles.purpleButtonTwice}`,
      onClick: () => {
        sPage(cPage - 1);
        sVisible1(true);
      },
      language: languageChanger(cLanguage, "უკან", "Back"),
      key: 0,
    },
    {
      className: CommonStyles.purpleButtonTwice,
      onClick: () => {
        sPage(cPage + 1);
        sVisible1(false);
      },
      language: languageChanger(cLanguage, "შემდეგი", "Next"),
      key: 1,
    },
  ];

  return (
    <>
      {buttonDataHome.map((data) => (
        <button
          className={data.className}
          onClick={data.onClick}
          key={data.key}
          style={{
            position: "absolute",
            top: cMoreExperience > 0 ? cTop + 114 : 918,
            right: "150px",
          }}
        >
          {data.language}
        </button>
      ))}
    </>
  );
}

export function KnowledgeButtonReplayskyColor() {
  const useAppContext0 = useContext(context);
  const {
    cPage,
    sPage,
    cLanguage,
    cMoreExperience,
    sMoreExperience,
    cTop,
    sTop,
  } = useAppContext0;
  const buttonDataHome = [
    {
      className: CommonStyles.skyColorButton,

      language: languageChanger(
        cLanguage,
        "მეტი გამოცდილების დამატება",
        "Adding more experience"
      ),
      key: 1,
      onClick: () => {
        sMoreExperience(cMoreExperience < 2 ? cMoreExperience + 1 : 2);
        sTop(cMoreExperience < 2 ? cTop + 600 : 804 * 2 + 400);
      },
    },
  ];

  return (
    <>
      {buttonDataHome.map((data) => (
        <button
          className={data.className}
          onClick={data.onClick}
          key={data.key}
          style={{
            position: "absolute",
            top: cMoreExperience > 0 ? cTop - 105 + 45 : 804,
            left: "149px",
            zIndex: 100,
          }}
        >
          {data.language}
        </button>
      ))}
    </>
  );
}
