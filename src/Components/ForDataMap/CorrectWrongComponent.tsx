import React from "react";
import { useContext } from "react";
import { MyPersonalContext } from "../Personal";
import CommonStyles from "../Common.module.css";

import correctIcon from "../../Assets/Icon/correctIcon.svg";
import warningIcon from "../../Assets/Icon/warningIcon.svg";

export default function CorrectWrongComponent() {
  const MPCL = useContext(MyPersonalContext); // my personal context Local I mean Personals info
  const { cCorrect, cCorrect1, cCorrect2, cCorrect3, cVisible } = MPCL;
  const DataOfCorrectIncorrect = [cCorrect, cCorrect1];

  let leftPosition1 = cCorrect ? "489px" : "535px"; // each from the left
  let leftPosition2 = cCorrect1 ? "916px" : "961px"; // each from the left
  return (
    <>
      {DataOfCorrectIncorrect.map((correctOrWrong, idx) => {
        return (
          <img
            key={idx}
            src={correctOrWrong ? correctIcon : warningIcon}
            alt="correct or wrong"
            className={
              correctOrWrong
                ? CommonStyles.commonCorrect
                : CommonStyles.commonWrong
            }
            style={{
              visibility: cVisible ? "visible" : "hidden",
              top: "192px",
              left: idx === 0 ? leftPosition1 : leftPosition2,
            }}
          />
        );
      })}
    </>
  );
}
