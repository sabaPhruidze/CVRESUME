import React, { useEffect } from "react";
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
export const MyExperienceContext = createContext<any>("w");
export default function PersonalLeftSide() {
  const useAppContext2 = useContext(MyPersonalContext);
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
    sStartDate,
    cEndDate,
    sEndDate,
    cDescription,
    sDescription,

    cMoreExperience,
    sMoreExperience,

    cPosition1,
    sPosition1,
    cEmployer1,
    sEmployer1,
    cStartDate1,
    sStartDate1,
    cEndDate1,
    sEndDate1,
    cDescription1,
    sDescription1,

    cPosition2,
    sPosition2,
    cEmployer2,
    sEmployer2,
    cStartDate2,
    sStartDate2,
    cEndDate2,
    sEndDate2,
    cDescription2,
    sDescription2,

    cPosition3,
    sPosition3,
    cEmployer3,
    sEmployer3,
    cStartDate3,
    sStartDate3,
    cEndDate3,
    sEndDate3,
    cDescription3,
    sDescription3,

    cPosition4,
    sPosition4,
    cEmployer4,
    sEmployer4,
    cStartDate4,
    sStartDate4,
    cEndDate4,
    sEndDate4,
    cDescription4,
    sDescription4,
  } = useAppContext2;
  function languageChanger(geo: string, eng: string) {
    return !cLanguage ? geo : eng;
  }
  function validateInput(
    Position: string | undefined,
    employer: string | undefined,
    startDate: number | undefined,
    endDate: number | undefined
  ) {
    const georgianWordsRegex = /.{2}.*/;
    if (Position && georgianWordsRegex.test(Position)) {
      sCorrect(true);
    } else {
      sCorrect(false);
    }
    if (employer && georgianWordsRegex.test(employer)) {
      sCorrect1(true);
    } else {
      sCorrect1(false);
    }
    if (
      Position &&
      georgianWordsRegex.test(Position) &&
      employer &&
      georgianWordsRegex.test(employer)
    ) {
      return [
        cPosition,
        cEmployer,
        localStorage.setItem("Position", Position),
        localStorage.setItem("employer", employer),
        useAppContext2.sPage(useAppContext2.cPage + 1),
      ];
    }
    //ესაა მთავარი რომ თუ ყველაფერი სწორადაა შევსებული ამ შემთხვევაში გადავიდეს შემდეგ გვერდზე
  }
  //I am just using ref to test it.Even trougth I can solve most of the tasks using useState I think sometimes useRef is also helpful
  const textAreaRef = useRef<any>("");
  const textAreaRef1 = useRef<any>("");
  const textAreaRef2 = useRef<any>("");
  const textAreaRef3 = useRef<any>("");
  const addMoreExperienceRef = useRef<any>("");
  const experienceData = [
    {
      fullDivName: PersonalStyles.position,
      content: !cLanguage ? "თანამდებობა" : "Position",
      htmlForId: "position",
      set: sPosition,
      value: cPosition,
      inputPlaceHolder: !cLanguage
        ? "დეველოპერი, დიზაინერი, ა.შ."
        : "Developer, designer, etc.",
      borderCorrect: cCorrect,
    },
    {
      fullDivName: PersonalStyles.employer,
      content: !cLanguage ? "დამსაქმებელი" : "Employer",
      htmlForId: "employer",
      set: sEmployer,
      value: cEmployer,
      inputPlaceHolder: !cLanguage ? "დამსაქმებელი" : "Employer",
      borderCorrect: cCorrect,
    },
  ];
  const experienceData1 = [
    {
      fullDivName: PersonalStyles.position,
      content: !cLanguage ? "თანამდებობა" : "Position",
      htmlForId: "position",
      set: sPosition1,
      value: cPosition1,
      inputPlaceHolder: !cLanguage
        ? "დეველოპერი, დიზაინერი, ა.შ."
        : "Developer, designer, etc.",
      borderCorrect: cCorrect,
    },
    {
      fullDivName: PersonalStyles.employer,
      content: !cLanguage ? "დამსაქმებელი" : "Employer",
      htmlForId: "employer",
      set: sEmployer1,
      value: cEmployer1,
      inputPlaceHolder: !cLanguage ? "დამსაქმებელი" : "Employer",
      borderCorrect: cCorrect,
    },
  ];
  useEffect(() => {
    sVisible(false);
  }, []);

  return (
    <div
      className={
        cBGColor
          ? `${CommonStyles.infoContainer} ${CommonStyles.infoContainerDark}`
          : CommonStyles.infoContainer
      }
      style={{
        height:
          cMoreExperience === 0
            ? "1080px"
            : cMoreExperience === 1
            ? "calc(798px * 2)"
            : cMoreExperience === 2
            ? "calc(798px * 3)"
            : cMoreExperience === 3
            ? "calc(798px * 4)"
            : "calc(798px * 5)",
        overflow: cMoreExperience === 0 ? "hidden" : "none",
      }}
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
        className={
          cBGColor
            ? `${CommonStyles.ellipse} ${CommonStyles.ellipseDark}`
            : CommonStyles.ellipse
        }
        onClick={() => useAppContext2.sPage(useAppContext2.cPage - 1)}
      />
      <img
        src={Vector}
        alt="Vector"
        className={
          cBGColor
            ? `${CommonStyles.vectorDark} ${CommonStyles.vectorLight}`
            : CommonStyles.vectorDark
        }
        onClick={() => useAppContext2.sPage(useAppContext2.cPage - 1)}
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
            {languageChanger("გამოცდილება", "Experience")}
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
                  {!cLanguage
                    ? "მინიმუმ 2 ასო, ქართული ასოები"
                    : "At least 2 letters, Georgian letters"}
                </span>
              </div>
            );
          })}
        </div>
        <div className={PersonalStyles.dateContainer}>
          <input
            type="date"
            className={PersonalStyles.calendarInput}
            onChange={(e) => {
              sStartDate(e.target.value);
            }}
            value={cStartDate}
          />
          <input
            type="date"
            className={PersonalStyles.calendarInput}
            onChange={(e) => {
              sEndDate(e.target.value);
            }}
            value={cEndDate}
          />
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
            id="Description"
            onChange={(e) => sDescription(e.target.value)}
            maxLength={250}
            ref={textAreaRef}
            style={{
              backgroundColor: cBGColor ? "black" : "white",
              color: cBGColor ? "white" : "black",
              height: "123px",
              padding: "13px 16px",
            }}
            value={cDescription}
          ></textarea>
          <hr
            style={{
              width: "100%",
              height: "1px",
              marginTop: "59px",
            }}
          />
          {cMoreExperience === 1 ? (
            <>
              <hr style={{ marginBottom: "69px" }} />
              <div className={PersonalStyles.positionEmployerInput}>
                {experienceData1.map((data: any, idx: any) => {
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
                        {!cLanguage
                          ? "მინიმუმ 2 ასო, ქართული ასოები"
                          : "At least 2 letters, Georgian letters"}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className={PersonalStyles.dateContainer}>
                <input
                  type="date"
                  className={PersonalStyles.calendarInput}
                  onChange={(e) => {
                    sStartDate(e.target.value);
                  }}
                  value={cStartDate1}
                />
                <input
                  type="date"
                  className={PersonalStyles.calendarInput}
                  onChange={(e) => {
                    sEndDate(e.target.value);
                  }}
                  value={cEndDate1}
                />
              </div>
              <div className={PersonalStyles.descriptionAdded}>
                <label
                  htmlFor="Description"
                  className={CommonStyles.labelStandard}
                >
                  {languageChanger("აღწერა", "Description")}
                </label>
                <textarea
                  placeholder={languageChanger(
                    "როლი თანამდებობაზე და ზოგადი აღწერა",
                    "Role in the position and general description"
                  )}
                  id="Description"
                  onChange={(e) => sDescription1(e.target.value)}
                  maxLength={250}
                  ref={textAreaRef1}
                  style={{
                    backgroundColor: cBGColor ? "black" : "white",
                    color: cBGColor ? "white" : "black",
                    height: "123px",
                    padding: "13px 16px",
                  }}
                  value={cDescription1}
                ></textarea>
                <hr
                  style={{
                    width: "100%",
                    height: "1px",
                    marginTop: "59px",
                  }}
                />
              </div>
            </>
          ) : (
            ""
          )}
          <button
            // When I click here It must repeat same
            className="moreExperienceAdd"
            style={{
              marginTop: "45px",
              width: "289px",
              // height: 48, I do not get it why height doesnot work
              boxSizing: "border-box",
              fontSize: "16px",
              backgroundColor: "#62A1EB",
              color: "white",
              padding: "calc((48px - 16px) / 2)",
            }}
            onClick={() => {
              sMoreExperience(cMoreExperience + 1);
              console.log(cMoreExperience);
            }}
          >
            {languageChanger(
              "მეტი გამოცდილების დამატება",
              "Adding more experience"
            )}
          </button>
        </div>
      </div>
      <button
        className={` ${CommonStyles.purpleButtonBack} ${CommonStyles.purpleButton}`}
        onClick={() => {
          sPage(cPage - 1);
        }}
      >
        {languageChanger("უკან", "Back")}
      </button>
      <button
        className={CommonStyles.purpleButton}
        onClick={() => {
          validateInput(cPosition, cEmployer, cStartDate, cEndDate);
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
        }}
      >
        {languageChanger("შემდეგი", "Next")}
      </button>
    </div>
  );
}
