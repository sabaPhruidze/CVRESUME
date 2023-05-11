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

  let leftPosition = "";

  if (cCorrect && cCorrect1) {
    leftPosition = "489px";
  } else if (cCorrect && !cCorrect1) {
    leftPosition = "535px";
  } else if (!cCorrect && cCorrect1) {
    leftPosition = "916px";
  } else if (!cCorrect && !cCorrect1) {
    leftPosition = "961px";
  }
  return (
    <>
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
                top:
                  correctOrWrong === cCorrect || correctOrWrong === cCorrect1
                    ? "195px"
                    : correctOrWrong === cCorrect2
                    ? "609px"
                    : "745px",
                left:
                  correctOrWrong === cCorrect && cCorrect === true
                    ? "489px"
                    : correctOrWrong === cCorrect && cCorrect !== true
                    ? "535px"
                    : correctOrWrong === cCorrect1 && cCorrect1 === true
                    ? "916px"
                    : correctOrWrong === cCorrect1 && cCorrect1 !== true
                    ? "961px"
                    : "",
              }}
            />
          );
        })}
      </>
    </>
  );
}
