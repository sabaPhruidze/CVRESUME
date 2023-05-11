import React from "react";

import { useContext } from "react";
import { MyPersonalContext } from "../Personal";

import PersonalStyles from "../Personal.module.css";
import CommonStyles from "../Common.module.css";

export default function CommonInput() {
  const MPCL = useContext(MyPersonalContext);
  const { cCorrect, cCorrect1, sName, sUsername, cVisible } = MPCL;
  const dataMap = [
    {
      fullDivName: PersonalStyles.namePart,
      content: "სახელი",
      htmlForId: "name",
      onChange: sName,
      inputPlaceHolder: "ანზორ",
      borderCorrect: cCorrect,
    },
    {
      fullDivName: PersonalStyles.lastNamePart,
      content: "გვარი",
      htmlForId: "userName",
      onChange: sUsername,
      inputPlaceHolder: "მუმლაძე",
      borderCorrect: cCorrect1,
    },
  ];
  return (
    <>
      {dataMap.map((data, idx) => {
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
                  data.borderCorrect && cVisible
                    ? "1px solid #98E37E"
                    : !data.borderCorrect && cVisible
                    ? "1px solid #EF5050"
                    : "1px solid black",
              }}
            />
            <span className={CommonStyles.spanStandard}>
              მინიმუმ 2 ასო, ქართული ასოები
            </span>
          </div>
        );
      })}
    </>
  );
}
