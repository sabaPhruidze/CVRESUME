import React from "react";

import { useContext, useRef, useEffect } from "react";
import { MyPersonalContext } from "../InfoUpdate";

import PersonalStyles from "../Personal.module.css";
import CommonStyles from "../Common.module.css";

export default function CommonInput() {
  const MPCL = useContext(MyPersonalContext);
  const {
    cCorrect,
    cCorrect1,
    sName,
    sUsername,
    cVisible,
    cLanguage,
    cBGColor,
    sBGColor,
    cPage,
    cPosition,
    sPosition,
    cEmployer,
    sEmployer,
    cStartDate,
    sEndDate,
    cDescription,
    sDescription,
  } = MPCL;
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
  const experienceData = [
    {
      fullDivName: PersonalStyles.position,
      content: !cLanguage ? "თანამდებობა" : "Position",
      htmlForId: "position",
      onChange: sPosition,
      inputPlaceHolder: !cLanguage
        ? "დეველოპერი, დიზაინერი, ა.შ."
        : "Developer, designer, etc.",
      borderCorrect: cCorrect,
    },
    {
      fullDivName: PersonalStyles.employer,
      content: !cLanguage ? "დამსაქმებელი" : "Employer",
      htmlForId: "employer",
      onChange: sPosition,
      inputPlaceHolder: !cLanguage ? "დამსაქმებელი" : "Employer",
      borderCorrect: cCorrect,
    },
  ];
  useEffect(() => {
    const colorChange = localStorage.getItem("cBGColor");
    const cChangeStep2 = JSON.stringify(colorChange);
    sBGColor(!cChangeStep2);
  }, []);
  const renderData = cPage === 1 ? dataMap : experienceData;

  return (
    <>
      {renderData.map((data, idx) => {
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
                border:
                  (data.borderCorrect && cVisible && !cBGColor) || cBGColor
                    ? "1px solid #98E37E"
                    : (!data.borderCorrect && cVisible && !cBGColor) || cBGColor
                    ? "1px solid #EF5050"
                    : !data.borderCorrect && !cVisible && !cBGColor
                    ? "1px solid black"
                    : !data.borderCorrect && !cVisible && cBGColor
                    ? "1px solid white"
                    : "",
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
