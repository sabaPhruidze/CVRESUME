import React from "react";
import { useContext } from "react";
import { infoUpdateContext } from "../InfoUpdate";
import CommonStyles from "../Styles/Common.module.css";

import correctIcon from "../../Assets/Icon/correctIcon.svg";
import warningIcon from "../../Assets/Icon/warningIcon.svg";

export default function CorrectWrongComponent() {
  const MPCL = useContext(infoUpdateContext); // my personal context Local I mean Personals info
  const { cCorrect, cCorrect1, cCorrect2, cCorrect3, cVisible } = MPCL;
  const DataOfCorrectIncorrect = [cCorrect, cCorrect1, cCorrect2, cCorrect3];

  let leftPosition1 = cCorrect ? "489px" : "535px"; // each from the left
  let leftPosition2 = cCorrect1 ? "916px" : "961px"; // each from the left
  let leftPosition3 = cCorrect2 ? "916px" : "961px";
  let leftPosition4 = cCorrect3 ? "916px" : "961px";

  const getPositionTop = (index: any) => {
    switch (index) {
      case 0:
      case 1:
        return "190px";
      case 2:
        return "595px";
      case 3:
        return "710px";
      default:
        return "195px";
    }
  };

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
              top: getPositionTop(idx),
              left:
                idx === 0
                  ? leftPosition1
                  : idx === 1
                  ? leftPosition2
                  : idx === 2
                  ? leftPosition3
                  : idx === 3
                  ? leftPosition4
                  : "",
            }}
          />
        );
      })}
    </>
  );
}
export function CorrectWrongComponentExperience() {
  const MPCL = useContext(infoUpdateContext); // my personal context Local I mean Personals info
  const { cVisible1, cCorrect5, cCorrect6, cCorrect7, cCorrect8 } = MPCL;
  const DataOfCorrectIncorrect = [cCorrect5, cCorrect6];

  let leftPosition1 = cCorrect5 ? "916px" : "961px"; // each from the left
  let leftPosition2 = cCorrect6 ? "916px" : "961px"; // each from the left

  const getPositionTop = (index: any) => {
    switch (index) {
      case 0:
        return "190px";
      case 1:
        return "315px";

      case 3:
        return "710px";
      default:
        return "195px";
    }
  };

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
              visibility: cVisible1 ? "visible" : "hidden",
              top: getPositionTop(idx),
              left: idx === 0 ? leftPosition1 : idx === 1 ? leftPosition2 : "",
            }}
          />
        );
      })}
    </>
  );
}
