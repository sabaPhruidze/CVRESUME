import React from "react";
import { useContext } from "react";
import { infoUpdateContext } from "../InfoUpdate";

import CommonStyles from "../Styles/Common.module.css";

import Ellipse from "../Assets/Img/2. SecondPage/Ellipse.svg";
import Vector from "../Assets/Img/2. SecondPage/Vectorvector.svg";
import OrangeLogo from "../../Assets/Img/2. SecondPage/logoOrange.svg";
import mobileIcon from "../../Assets/Icon/phoneIcon.svg";
import spiralIcon from "../../Assets/Icon/@.svg";

export default function Rendered() {
  const MPCL = useContext(infoUpdateContext);
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
    cArray,
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
    cCourse,
    cQuality,
    cFinishDate,
    cDOE,
    cCourse1,
    cQuality1,
    cFinishDate1,
    cDOE1,
    cCourse2,
    cQuality2,
    cFinishDate2,
    cDOE2,
  } = MPCL;
  return (
    <div
      className={
        cBGColor
          ? `${CommonStyles.renderContainerDark} ${CommonStyles.renderContainer}`
          : CommonStyles.renderContainer
      }
      style={{
        height:
          cMoreExperience === 0
            ? "1080px"
            : cMoreExperience === 1
            ? "calc(1080px + 631px )"
            : cMoreExperience === 2
            ? "calc(1080px + 2 * 631px)"
            : cPage === 3
            ? "1080px"
            : "calc(1080px + 631px * 2)",
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
      {cPosition.length > 0 ||
      cEmployer.length > 0 ||
      cStartDate.length > 0 ||
      cEndDate.length > 0 ||
      cDescription.length > 0 ? (
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
              height: "100px",
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
      {cPosition1.length > 0 ||
      cEmployer1.length > 0 ||
      cStartDate1.length > 0 ||
      cEndDate1.length > 0 ||
      cDescription1.length > 0 ? (
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
            {cPosition1}, {cEmployer1}{" "}
          </p>
          <em style={{ fontSize: "16px", color: "#909090", marginTop: "7px" }}>
            {cStartDate1} - {cEndDate1}
          </em>
          <div
            style={{
              width: "662px",
              height: "100px",
              wordWrap: "break-word",
              overflow: "hidden",
              fontSize: "16px",
            }}
          >
            {cDescription1}
          </div>
        </>
      ) : (
        ""
      )}
      {cPosition2.length > 0 ||
      cEmployer2.length > 0 ||
      cStartDate2.length > 0 ||
      cEndDate2.length > 0 ||
      cDescription2.length > 0 ? (
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
            {cPosition2}, {cEmployer2}{" "}
          </p>
          <em style={{ fontSize: "16px", color: "#909090", marginTop: "7px" }}>
            {cStartDate2} - {cEndDate2}
          </em>
          <div
            style={{
              width: "662px",
              height: "100px",
              wordWrap: "break-word",
              overflow: "hidden",
              fontSize: "16px",
            }}
          >
            {cDescription2}
          </div>
        </>
      ) : (
        ""
      )}
      {cCourse.length > 0 || cQuality.length > 0 || cDOE.length > 0 ? (
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
            განათლება
          </p>
          <p style={{ marginTop: "15px", fontWeight: "600" }}>
            {cCourse}, {cQuality}{" "}
          </p>
          <em style={{ fontSize: "16px", color: "#909090", marginTop: "7px" }}>
            {cFinishDate}
          </em>
          <div
            style={{
              width: "662px",
              height: "210px",
              wordWrap: "break-word",
              overflow: "hidden",
              fontSize: "16px",
            }}
          >
            {cDOE}
          </div>
        </>
      ) : (
        ""
      )}
      {cCourse1.length > 0 || cQuality1.length > 0 || cDOE1.length > 0 ? (
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
            განათლება
          </p>
          <p style={{ marginTop: "15px", fontWeight: "600" }}>
            {cCourse1}, {cQuality1}{" "}
          </p>
          <em style={{ fontSize: "16px", color: "#909090", marginTop: "7px" }}>
            {cFinishDate1}
          </em>
          <div
            style={{
              width: "662px",
              height: "210px",
              wordWrap: "break-word",
              overflow: "hidden",
              fontSize: "16px",
            }}
          >
            {cDOE1}
          </div>
        </>
      ) : (
        ""
      )}
      {cCourse2.length > 0 || cQuality2.length > 0 || cDOE2.length > 0 ? (
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
            განათლება
          </p>
          <p style={{ marginTop: "15px", fontWeight: "600" }}>
            {cCourse2}, {cQuality2}{" "}
          </p>
          <em style={{ fontSize: "16px", color: "#909090", marginTop: "7px" }}>
            {cFinishDate2}
          </em>
          <div
            style={{
              width: "662px",
              height: "210px",
              wordWrap: "break-word",
              overflow: "hidden",
              fontSize: "16px",
            }}
          >
            {cDOE2}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
