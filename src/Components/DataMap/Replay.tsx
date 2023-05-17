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
  const { cBGColor, cLanguage, sAboutMe, cVisible, aboutMeRef } =
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
              padding: "13px 16px",
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

// Experience
export function ExperiencePositionEmployerInput() {
  const useAppContext0 = useContext(context);
  const {
    cBGColor,
    cLanguage,
    cVisible,
    cPosition,
    sPosition,
    cCorrect5,
    cCorrect6,
    cEmployer,
    sEmployer,
  } = useAppContext0;
  const experienceData = [
    {
      fullDivName: infoUpdateStyles.position,
      content: languageChanger(cLanguage, "თანამდებობა", "Position"),
      htmlForId: "position",
      set: sPosition,
      value: cPosition,
      inputPlaceHolder: languageChanger(
        cLanguage,
        "დეველოპერი, დიზაინერი, ა.შ.",
        "Developer, designer, etc."
      ),
      borderCorrect: cCorrect5,
    },
    {
      fullDivName: infoUpdateStyles.employer,
      content: !cLanguage ? "დამსაქმებელი" : "Employer",
      htmlForId: "employer",
      set: sEmployer,
      value: cEmployer,
      inputPlaceHolder: !cLanguage ? "დამსაქმებელი" : "Employer",
      borderCorrect: cCorrect6,
    },
  ];
  // const experienceData1 = [
  //   {
  //     fullDivName: infoUpdateStyles.position,
  //     content: !cLanguage ? "თანამდებობა" : "Position",
  //     htmlForId: "position",
  //     set: sPosition1,
  //     value: cPosition1,
  //     inputPlaceHolder: !cLanguage
  //       ? "დეველოპერი, დიზაინერი, ა.შ."
  //       : "Developer, designer, etc.",
  //     borderCorrect: cCorrect,
  //   },
  //   {
  //     fullDivName: infoUpdateStyles.employer,
  //     content: !cLanguage ? "დამსაქმებელი" : "Employer",
  //     htmlForId: "employer",
  //     set: sEmployer1,
  //     value: cEmployer1,
  //     inputPlaceHolder: !cLanguage ? "დამსაქმებელი" : "Employer",
  //     borderCorrect: cCorrect,
  //   },
  // ];
  return (
    <>
      {experienceData.map((data: any, idx: any) => {
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
              value={data.value}
              onChange={(event) => data.set(event.target.value)}
            />
            <span className={CommonStyles.spanStandard}>
              {languageChanger(
                cLanguage,
                "მინიმუმ 2 სიმბოლო",
                "At least 2 symbols"
              )}
            </span>
          </div>
        );
      })}
    </>
  );
}
export function InputReplayExperienceRow() {
  const useAppContext0 = useContext(context);
  const { cLanguage, sStartDate, cStartDate, cEndDate, sEndDate, cBGColor } =
    useAppContext0;
  const dataMap = [
    {
      labelHtmlFor: "startDate",
      labelContent: languageChanger(
        cLanguage,
        "დაწყების რიცხვი",
        "Start number"
      ),
      onChange: (e: any) => sStartDate(e.target.value),
      value: cStartDate,
      key: 0,
    },
    {
      labelHtmlFor: "EndDate",
      labelContent: languageChanger(
        cLanguage,
        "დამთავრების რიცხვი",
        "End date"
      ),
      onChange: (e: any) => sEndDate(e.target.value),
      value: cEndDate,
      key: 1,
    },
  ];
  return (
    <div className={infoUpdateStyles.dateContainer}>
      <>
        {dataMap.map((data: any) => {
          return (
            <div
              key={data.key}
              style={{
                marginRight: data.key === 0 ? "28px" : "",
                marginLeft: data.key === 1 ? "28px" : "",
              }}
            >
              <label
                htmlFor={data.labelHtmlFor}
                style={{
                  marginBottom: "8px",
                  color: cBGColor ? "white" : "black",
                  fontWeight: "700",
                }}
              >
                {data.labelContent}
              </label>
              <input
                type="date"
                className={infoUpdateStyles.calendarInput}
                onChange={data.onChange}
                value={data.value}
                id={data.labelHtmlFor}
                style={{
                  backgroundColor: !cBGColor ? "white" : "black",
                  color: cBGColor ? "white" : "black",
                  border: cBGColor ? "1px solid white" : "1px solid black",
                }}
              />
            </div>
          );
        })}
      </>
    </div>
  );
}
export function ExperienceTextArea() {
  const useAppContext0 = useContext(context);
  const {
    cBGColor,
    cLanguage,
    textAreaRef,
    cDescription,
    cVisible,
    sDescription,
  } = useAppContext0;

  const DataOfTextArea = [
    {
      key: 0,
      htmlFor: "Description",
      ref: textAreaRef,
      labelContext: languageChanger(cLanguage, "აღწერა", "Description"),
      // spanContext: languageChanger(cLanguage, "(არასავალდებულო)", "(optional)"),
      placeHolder: languageChanger(
        cLanguage,
        "როლი თანამდებობაზე და ზოგადი აღწერა",
        "Role in the position and general description"
      ),
      onChange: (e: any) => sDescription(e.target.value),
      value: cDescription,
    },
  ];

  return (
    <>
      {DataOfTextArea.map((data: any) => (
        <div key={data.key}>
          <label
            htmlFor={data.htmlFor}
            className={CommonStyles.labelStandard}
            style={{ display: "block" }}
          >
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
              border: "1px solid black",
              padding: "13px 16px",
            }}
            ref={data.ref}
          ></textarea>
          <hr
            style={{
              width: "100%",
              height: "1px",
              marginTop: "6px",
            }}
          />
        </div>
      ))}
    </>
  );
}
export function ExperienceButtonReplayskyColor() {
  const useAppContext0 = useContext(context);
  const { cPage, sPage, cLanguage } = useAppContext0;
  const buttonDataHome = [
    {
      className: CommonStyles.skyColorButton,
      // onClick: () => sPage(cPage + 1),
      language: languageChanger(
        cLanguage,
        "მეტი გამოცდილების დამატება",
        "Adding more experience"
      ),
      key: 1,
    },
  ];
  return (
    <>
      {buttonDataHome.map((data) => (
        <button
          className={data.className}
          // onClick={data.onClick}
          key={data.key}
          style={{
            position: "absolute",
            top: "804px",
            left: "149px",
          }}
        >
          {data.language}
        </button>
      ))}
    </>
  );
}

export function ExperienceButtonReplay() {
  const useAppContext0 = useContext(context);
  const {
    cPage,
    sPage,
    cLanguage,
    sCorrect5,
    sCorrect6,
    cCorrect5,
    cCorrect6,
    sVisible1,
    cPosition,
    cEmployer,
    cStartDate,
    cEndDate,
  } = useAppContext0;
  const buttonDataHome = [
    {
      className: ` ${CommonStyles.purpleButtonBack} ${CommonStyles.purpleButton}`,
      onClick: () => {
        sPage(cPage - 1);
        sVisible1(false);
      },
      language: languageChanger(cLanguage, "უკან", "Back"),
      key: 0,
    },
    {
      className: CommonStyles.purpleButton,
      onClick: () => {
        validateInput1(cPosition, cEmployer, cStartDate, cEndDate);
        sVisible1(true);
      },
      language: languageChanger(cLanguage, "შემდეგი", "Next"),
      key: 1,
    },
  ];

  function validateInput1(
    Position: string | undefined,
    employer: string | undefined,
    startDate: string | undefined,
    endDate: string | undefined
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
      console.log("start date correct");
    } else {
      console.log("start date incorrect");
    }

    if (endDate && DateRegex.test(endDate)) {
      console.log("end date correct");
    } else {
      console.log("end date incorrect");
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
      return [cPosition, cEmployer, cStartDate, cEndDate, sPage(cPage + 1)];
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
