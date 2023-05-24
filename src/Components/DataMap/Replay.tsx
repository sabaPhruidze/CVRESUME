import React, { useContext, useRef, useState } from "react";

import { context } from "../../App";
// styles
import CommonStyles from "../Styles/Common.module.css";
import HomeStyles from "../Styles/Home.module.css";
import infoUpdateStyles from "../Styles/infoUpdate.module.css";
// styles

// Common icons
import georgiaFlag from "../../Assets/Img/common/georgia.png";
import unitedKingdomFlag from "../../Assets/Img/common/unitedKingdom.png";
import lightMode from "../../Assets/Icon/sunMode.svg";
import darkMode from "../../Assets/Icon/nightMode.svg";
// Common icons
// Common after Home
import Ellipse from "../../Assets/Img/2. SecondPage/Ellipse.svg";
import Vector from "../../Assets/Img/2. SecondPage/Vectorvector.svg";
// Common after Home

// for Home
import background from "../../Assets/Img/1. FirstPage/background1.jpg";
import backgroundDark from "../../Assets/Img/1. FirstPage/backgroundDark.jpg";
import redBerryBanner from "../../Assets/Img/1. FirstPage/redberryBanner.svg";
import diploma from "../../Assets/Img/1. FirstPage/diploma.svg";
// for Home

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
    sMoreExperinece,
    sMoreKnowledge,
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
  if (cPage >= 0 && cPage <= 3) {
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
  } else {
    return null;
  }
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
    ExperienceDateStartRef,
    ExperienceDateEndRef,
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
      onClick: () => sPage(cPage + 1),
      language: languageChanger(cLanguage, "რეზიუმეს დამატება", "Add resume"),
      key: 0,
      widthPlace: "150px",
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
      widthPlace: "150px",
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
      widthPlace: "150px",
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
      widthPlace: "797px",
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
    const englishWordsRegex = /^(?:.*[a-z]){2,}.*$/;
    const whichLanguageAllowRegex = cLanguage
      ? englishWordsRegex
      : georgianWordsRegex;
    const mailRegex = /.*@redberry\.ge$/;
    const telNumber = /^\+995 \d{3} \d{2} \d{2} \d{2}$/;
    if (name && whichLanguageAllowRegex.test(name)) {
      sCorrect(true);
    } else {
      sCorrect(false);
    }
    if (username && whichLanguageAllowRegex.test(username)) {
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
      whichLanguageAllowRegex.test(name) &&
      username &&
      whichLanguageAllowRegex.test(username) &&
      img &&
      email &&
      mailRegex.test(email) &&
      phone &&
      telNumber.test(phone)
    ) {
      return [sPage(cPage + 1)];
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
    const DateRegex =
      /^(((19[8-9]\d)|20[0-1]\d|202[0-3])-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/; //the year must be between 1980-2023
    const WordsRegex = /.{2}.*/;
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
    if (description && description.length > 0) {
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
      return [sVisible1(false), sPage(cPage + 1)];
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
                  top:
                    cMoreExperience === 0
                      ? 967
                      : cMoreExperience === 1
                      ? 1598
                      : cMoreExperience === 2
                      ? 2150
                      : 967,
                  left: data.widthPlace,
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
    cName,
    cCorrect,
    sUsername,
    cUsername,
    cCorrect1,
    cVisible,
  } = useAppContext0;
  const dataMap = [
    {
      fullDivName: infoUpdateStyles.namePart,
      content: languageChanger(cLanguage, "სახელი", "Name"),
      htmlForId: "name",
      onChange: (e: any) => {
        const change = e.target.value;
        sName(change);
        localStorage.setItem("name", JSON.stringify(change));
      },
      inputPlaceHolder: languageChanger(cLanguage, "ანზორ", "Anzor"),
      borderCorrect: cCorrect,
      value: cName || "", // in order to not cause warning by changing from uncontrolled to controled input value.
    },
    {
      fullDivName: infoUpdateStyles.lastNamePart,
      content: languageChanger(cLanguage, "გვარი", "Username"),
      htmlForId: "userName",
      onChange: (e: any) => {
        const change = e.target.value;
        sUsername(change);
        localStorage.setItem("username", JSON.stringify(change));
      },
      inputPlaceHolder: languageChanger(cLanguage, "მუმლაძე", "Mumladze"),
      borderCorrect: cCorrect1,
      value: cUsername || "", // if cUsername is undefined than it will be "" else it will be written cUsername
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
              value={data.value}
              type="text"
              placeholder={data.inputPlaceHolder}
              id={data.htmlForId}
              className={CommonStyles.inputStandard}
              onChange={data.onChange}
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
                : "At least 2 letters, English letters"}
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
  const { cLanguage, sUploadImg, cBGColor, cUploadImg } = useAppContext0;
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
      onChange: (e: any) => {
        const file = e.target.files?.[0];
        const setImageInLocalStorage = (file: any): void => {
          const reader = new FileReader();
          sUploadImg(file);
          reader.onload = () => {
            localStorage.setItem("Image", reader.result as string);
          };
          reader.readAsDataURL(file);
        };
        setImageInLocalStorage(file);
      },
      lsCall: "Image",
      lsValue: cUploadImg,
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
          >
            {data.buttonContent}
            <input
              type="file"
              alt="upload photo"
              accept="image/*"
              id={data.htmlFor}
              onChange={data.onChange}
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
        const changes = e.target.value;
        sAboutMe(changes);
        localStorage.setItem("AboutMe", JSON.stringify(changes));
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
  const {
    cBGColor,
    sEmail,
    cEmail,
    cLanguage,
    cCorrect2,
    sTel,
    cCorrect3,
    cVisible,
    cTel,
  } = useAppContext0;
  const dataMap = [
    {
      fullDivName: infoUpdateStyles.mail,
      content: languageChanger(cLanguage, "ელ.ფოსტა", "Email"),
      htmlForId: "email",
      onChange: (e: any) => {
        const change = e.target.value;
        sEmail(change);
        localStorage.setItem("Email", JSON.stringify(change));
      },
      inputPlaceHolder: "anzorr777@redberry.ge",
      borderCorrect: cCorrect2,
      type: "email",
      span: languageChanger(
        cLanguage,
        "უნდა მთავრდებოდეს @redberry.ge-ით",
        "Must end with @redberry.ge"
      ),
      key: 0,
      value: cEmail || "",
    },
    {
      fullDivName: infoUpdateStyles.telephone,
      content: languageChanger(cLanguage, "მობილურის ნომერი", "Mobile number"),
      htmlForId: "tel",
      onChange: (e: any) => {
        const change = e.target.value;
        sTel(change);
        localStorage.setItem("Telephone", JSON.stringify(change));
      },
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
      value: cTel || "",
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
              value={data.value}
              type={data.type}
              placeholder={data.inputPlaceHolder}
              id={data.htmlForId}
              className={CommonStyles.inputStandard}
              onChange={data.onChange}
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
  const { cPage, cBGColor, cLanguage, cMoreExperience, sMoreExperience } =
    useAppContext0;
  const buttonDataExperience = [
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
      },
    },
  ];
  const buttonDataKnowledge = [
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
      },
    },
  ];
  const CurrentButton =
    cPage === 2 ? buttonDataExperience : cPage === 3 ? buttonDataKnowledge : "";
  return (
    <>
      {CurrentButton &&
        CurrentButton.map((data: any) => (
          <button
            className={data.className}
            onClick={data.onClick}
            key={data.key}
            style={{
              position: "absolute",
              top:
                cPage === 2 && cMoreExperience === 0
                  ? 750
                  : cPage === 2 && cMoreExperience === 1
                  ? 1340
                  : cPage === 2 && cMoreExperience === 2
                  ? 1920
                  : cPage === 3 && cMoreExperience === 0
                  ? 725
                  : cPage === 3 && cMoreExperience === 1
                  ? 1290
                  : cPage === 3 && cMoreExperience === 2
                  ? 1850
                  : "",
              left: "150px",
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
    sCorrect7,
    sMoreExperience,
    sVisible1,
    sVisible2,
    cMoreExperience,
    cBGColor,
    cQuality,
    cCourse,
    cFinishDate,
    cDOE,
    courseRef,
    qualityRef,
    finishDateRef,
    DOERef,
    cCorrect7,
  } = useAppContext0;

  const buttonDataKnowledge = [
    {
      className: cBGColor
        ? `${CommonStyles.purpleButtonBack} ${CommonStyles.purpleButtonTwiceDark}`
        : ` ${CommonStyles.purpleButtonTwice} ${CommonStyles.purpleButtonBack}`,
      onClick: () => {
        sPage(cPage - 1);
        sVisible2(false);
      },
      language: languageChanger(cLanguage, "უკან", "Back"),
      key: 0,
      widthPlace: "150px",
    },
    {
      className: cBGColor
        ? `${CommonStyles.purpleButtonTwiceDark}`
        : `${CommonStyles.purpleButtonTwice}`,
      onClick: () => {
        // sPage(cPage + 1);
        // sVisible1(false);
        validateInput1(cCourse, cQuality, cFinishDate, cDOE);
        sVisible2(true);
      },
      language: languageChanger(cLanguage, "შემდეგი", "Next"),
      key: 1,
      widthPlace: "797px",
    },
  ];
  function validateInput1(
    course: string | undefined,
    quality: string | undefined,
    finishDate: number | undefined,
    DOE: string | undefined
  ) {
    const WordsRegex = /.{2}.*/;
    if (course && WordsRegex.test(course)) {
      sCorrect7(true);
      courseRef.current.style.border = "1px solid #98E37E";
    } else {
      sCorrect7(false);
      courseRef.current.style.border = "1px solid #EF5050";
    }

    if (
      quality &&
      quality.length > 0 &&
      quality !== "აირჩიეთ ხარისხი" &&
      quality !== "Choose a degree"
    ) {
      qualityRef.current.style.border = "1px solid #98E37E";
    } else {
      qualityRef.current.style.border = "1px solid #EF5050";
    }
    if (finishDate) {
      finishDateRef.current.style.border = "1px solid #98E37E";
    } else {
      finishDateRef.current.style.border = "1px solid #EF5050";
    }
    if (DOE && DOE.length > 0) {
      DOERef.current.style.border = "1px solid #98E37E";
    } else {
      DOERef.current.style.border = "1px solid #BCBCBC";
    }
    if (
      course &&
      WordsRegex.test(course) &&
      quality &&
      quality.length > 0 &&
      finishDate
    ) {
      return [sVisible2(false), sPage(cPage + 1), sMoreExperience(0)];
    }
  }
  return (
    <>
      {buttonDataKnowledge.map((data) => (
        <button
          className={data.className}
          onClick={data.onClick}
          key={data.key}
          style={{
            position: "absolute",
            top:
              cMoreExperience === 0
                ? 967
                : cMoreExperience === 1
                ? 1598
                : cMoreExperience === 2
                ? 2259
                : 967,
            left: data.widthPlace,
          }}
        >
          {data.language}
        </button>
      ))}
    </>
  );
}
