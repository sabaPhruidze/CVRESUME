import React from "react";
import { useContext } from "react";
import { infoUpdateContext } from "../InfoUpdate";
import CommonStyles from "../Styles/Common.module.css";

import correctIcon from "../../Assets/Icon/correctIcon.svg";
import warningIcon from "../../Assets/Icon/warningIcon.svg";

export default function CorrectWrongComponent() {
  const MPCL = useContext(infoUpdateContext);
  const {
    cCorrect,
    cCorrect1,
    cCorrect2,
    cCorrect3,
    cVisible,
    cVisible1,
    cCorrect5,
    cCorrect6,
  } = MPCL;

  const DataOfCorrectIncorrect = [
    { value: cCorrect, top: "190px", left: cCorrect ? "489px" : "535px" },
    { value: cCorrect1, top: "190px", left: cCorrect1 ? "916px" : "961px" },
    { value: cCorrect2, top: "595px", left: cCorrect2 ? "916px" : "961px" },
    { value: cCorrect3, top: "710px", left: cCorrect3 ? "916px" : "961px" },
    { value: cCorrect5, top: "190px", left: cCorrect5 ? "916px" : "961px" },
    { value: cCorrect6, top: "315px", left: cCorrect6 ? "916px" : "961px" },
  ];

  return (
    <>
      {DataOfCorrectIncorrect.map((item, idx) => {
        const { value, top, left } = item;
        const isVisible =
          (cVisible && idx < 4) || (cVisible1 && (idx === 4 || idx === 5));

        return (
          <img
            key={idx}
            src={value ? correctIcon : warningIcon}
            alt="correct or wrong"
            className={
              value ? CommonStyles.commonCorrect : CommonStyles.commonWrong
            }
            style={{
              visibility: isVisible ? "visible" : "hidden",
              top,
              left,
            }}
          />
        );
      })}
    </>
  );
}
