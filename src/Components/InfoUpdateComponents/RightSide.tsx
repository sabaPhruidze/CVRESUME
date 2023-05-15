import React from "react";
import { useContext } from "react";
import { MyPersonalContext } from "../InfoUpdate";

import PersonalStyles from "../Styles/Personal.module.css";
import CommonStyles from "../Styles/Common.module.css";

import Ellipse from "../Assets/Img/2. SecondPage/Ellipse.svg";
import Vector from "../Assets/Img/2. SecondPage/Vectorvector.svg";
import OrangeLogo from "../../Assets/Img/2. SecondPage/logoOrange.svg";
import mobileIcon from "../../Assets/Icon/phoneIcon.svg";
import spiralIcon from "../../Assets/Icon/@.svg";

export default function Rendered() {
  const MPCL = useContext(MyPersonalContext);
  const {
    cName,
    cUsername,
    cEmail,
    cTel,
    cAboutMe,
    cUploadImg,
    cBGColor,
    cPosition,
    cEmployer,
    cDescription,
    cStartDate,
    cEndDate,
    cPage,
    cMoreExperience,
  } = MPCL;
  return (
    <div
      className={
        cBGColor
          ? CommonStyles.renderContainerDark
          : CommonStyles.renderContainer
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
      <div className={CommonStyles.lineName}>
        <div>{cName}</div>
        <div>{cUsername}</div>
      </div>
      <div className={CommonStyles.emailContainer}>
        {cEmail && (
          <>
            <img
              src={spiralIcon}
              alt="spiral Icon"
              className={CommonStyles.spiralIcon}
            />
          </>
        )}
        <div style={{ marginLeft: "5px", color: cBGColor ? "white" : "black" }}>
          {cEmail}
        </div>
      </div>
      <div className={CommonStyles.mobileContainer}>
        {cTel && (
          <>
            {" "}
            <img
              src={mobileIcon}
              alt="mobile icon"
              className={CommonStyles.mobileIcon}
            />
          </>
        )}
        <div style={{ marginLeft: "5px", color: cBGColor ? "white" : "black" }}>
          {cTel}
        </div>
      </div>
      <div className={CommonStyles.aboutMeContainer}>
        {cAboutMe && (
          <>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#F93B1D",
                marginBottom: "15px",
              }}
            >
              ჩემს შესახებ
            </div>
          </>
        )}
        <div
          style={{
            width: "432px",
            height: "125px",
            wordWrap: "break-word",
            overflow: "hidden",
            fontSize: "16px",
          }}
        >
          {cAboutMe}
        </div>
      </div>
      {cUploadImg && (
        <img
          src={URL.createObjectURL(cUploadImg)} //I do not really knew this part but chatGPT helped me here
          alt="uploaded photo"
          className={CommonStyles.imageUpload}
        />
      )}
      <img src={OrangeLogo} alt="OrangeLogo" className={CommonStyles.orange} />
      {cPage >= 2 &&
      (cPosition.length > 0 ||
        cEmployer.length > 0 ||
        cStartDate.length > 0 ||
        cEndDate.length > 0 ||
        cDescription.length > 0) ? (
        <>
          <hr style={{ marginTop: "19px", width: "calc(100% - 80px)" }} />
          <p
            style={{
              fontSize: "18px",
              fontWeight: "700",
              color: "#F93B1D",
              marginTop: "24px",
            }}
          >
            გამოცდილება
          </p>
          <p style={{ marginTop: "15px", fontWeight: "600" }}>
            {cPosition}, {cEmployer}{" "}
          </p>
          <em style={{ fontSize: "16px", color: "#909090", marginTop: "7px" }}>
            {cStartDate} - {cEndDate}
          </em>
          <div
            style={{
              width: "662px",
              height: "125px",
              wordWrap: "break-word",
              overflow: "hidden",
              fontSize: "16px",
            }}
          >
            {cDescription}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
