import React from "react";
import { useContext } from "react";
import { infoUpdateContext } from "../InfoUpdate";

import CommonStyles from "../Styles/Common.module.css";

import Ellipse from "../Assets/Img/2. SecondPage/Ellipse.svg";
import Vector from "../Assets/Img/2. SecondPage/Vectorvector.svg";
import OrangeLogo from "../../Assets/Img/2. SecondPage/logoOrange.svg";
import mobileIcon from "../../Assets/Icon/phoneIcon.svg";
import spiralIcon from "../../Assets/Icon/@.svg";
function languageChanger(changeReason: boolean, geo: string, eng: string) {
  return !changeReason ? geo : eng;
}
export default function Rendered() {
  const MPCL = useContext(infoUpdateContext);
  const {
    cName,
    cUsername,
    cEmail,
    cMoreKnowledge,
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
    cLanguage,
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
          cPage === 0 ||
          cPage === 1 ||
          (cPage === 2 && cMoreExperience === 0) ||
          (cPage === 3 && cMoreKnowledge === 0)
            ? "1080px"
            : cPage === 2 && cMoreExperience === 1
            ? "1711px" /* // 1711px is written because when the add more experience button is pressed its distance from top become 631px more, same goes to the second press it's distance increase by 631 px. */
            : cPage === 2 && cMoreExperience === 2
            ? "2260px"
            : cPage === 3 && cMoreKnowledge === 1
            ? 1631 /* when the button is clicked on the knowledge page the distance instraces by 551px */
            : cPage === 3 && cMoreKnowledge === 2
            ? 2182
            : cPage === 4
            ? "1260px"
            : "",
        overflow:
          cMoreExperience === 0 || cMoreKnowledge === 0 ? "hidden" : "visible",
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
              {languageChanger(cLanguage, "ჩემს შესახებ", "About me")}
            </div>
          </>
        )}
        <div
          style={{
            width: "432px",
            minHeight: "30px",
            maxHeight: "135px",
            wordWrap: "break-word",
            overflow: "hidden",
            fontSize: "16px",
            border: 0,
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
      <>
        {(cPosition && cPosition.length > 0) ||
        (cPosition1 && cPosition1.length > 0) ||
        (cPosition2 && cPosition2.length > 0) ||
        (cEmployer && cEmployer.length > 0) ||
        (cEmployer1 && cEmployer1.length > 0) ||
        (cEmployer2 && cEmployer2.length > 0) ||
        (cStartDate && cStartDate.length > 0) ||
        (cStartDate1 && cStartDate1.length > 0) ||
        (cStartDate2 && cStartDate2.length > 0) ||
        (cEndDate && cEndDate.length > 0) ||
        (cEndDate1 && cEndDate1.length > 0) ||
        (cEndDate2 && cEndDate2.length > 0) ||
        (cDescription && cDescription.length > 0) ||
        (cDescription1 && cDescription1.length > 0) ||
        (cDescription2 && cDescription2.length > 0) ? (
          <>
            {" "}
            <hr style={{ marginTop: "40px", width: "calc(100% - 80px)" }} />
            <p
              style={{
                fontSize: "22px",
                fontWeight: "900",
                color: "#F93B1D",
                marginTop: "24px",
                marginBottom: "15px",
              }}
            >
              {languageChanger(cLanguage, "გამოცდილება", "Experience")}
            </p>
          </>
        ) : (
          ""
        )}
        {cPosition && cPosition.length > 0 ? (
          <>
            <p
              style={{
                marginTop: "15px",
                fontWeight: "600",
                marginBottom: "7px",
              }}
            >
              {cPosition}, {cEmployer}{" "}
            </p>
          </>
        ) : (
          <>
            <p
              style={{
                marginTop: "15px",
                fontWeight: "600",
                marginBottom: "7px",
              }}
            >
              {cEmployer}{" "}
            </p>
          </>
        )}

        {cStartDate && cStartDate.length > 0 ? (
          <>
            <em
              style={{ fontSize: "16px", color: "#909090", marginTop: "7px" }}
            >
              {cStartDate} - {cEndDate}
            </em>
          </>
        ) : (
          <>
            <em
              style={{ fontSize: "16px", color: "#909090", marginTop: "7px" }}
            >
              {cEndDate}
            </em>
          </>
        )}
        <div
          style={{
            width: "662px",
            minHeight: 0,
            maxHeight: "140px",
            wordWrap: "break-word",
            overflow: "hidden",
            fontSize: "16px",
            marginTop: "16px",
          }}
        >
          {cDescription}
        </div>
      </>

      <>
        {cPosition1 && cPosition1.length > 0 ? (
          <>
            <p
              style={{
                marginTop: "15px",
                fontWeight: "600",
                marginBottom: "7px",
              }}
            >
              {cPosition1}, {cEmployer1}{" "}
            </p>
          </>
        ) : (
          <>
            <p
              style={{
                marginTop: "15px",
                fontWeight: "600",
                marginBottom: "7px",
              }}
            >
              {cEmployer1}{" "}
            </p>
          </>
        )}
        {cStartDate1 && cStartDate1.length > 0 ? (
          <>
            <em
              style={{ fontSize: "16px", color: "#909090", marginTop: "7px" }}
            >
              {cStartDate1} - {cEndDate1}
            </em>
          </>
        ) : (
          <>
            <em
              style={{ fontSize: "16px", color: "#909090", marginTop: "7px" }}
            >
              {cEndDate1}
            </em>
          </>
        )}
        <div
          style={{
            width: "662px",
            minHeight: "0px",
            maxHeight: "100px",
            wordWrap: "break-word",
            overflow: "hidden",
            fontSize: "16px",
            marginTop: "16px",
          }}
        >
          {cDescription1}
        </div>
      </>

      <>
        {cPosition2 && cPosition2.length > 0 ? (
          <>
            <p
              style={{
                marginTop: "15px",
                fontWeight: "600",
                marginBottom: "7px",
              }}
            >
              {cPosition2}, {cEmployer2}{" "}
            </p>
          </>
        ) : (
          <>
            <p
              style={{
                marginTop: "15px",
                fontWeight: "600",
                marginBottom: "7px",
              }}
            >
              {cEmployer2}{" "}
            </p>
          </>
        )}
        {cStartDate2 && cStartDate2.length > 0 ? (
          <>
            <em
              style={{ fontSize: "16px", color: "#909090", marginTop: "7px" }}
            >
              {cStartDate2} - {cEndDate2}
            </em>
          </>
        ) : (
          <>
            <em
              style={{ fontSize: "16px", color: "#909090", marginTop: "7px" }}
            >
              {cEndDate2}
            </em>
          </>
        )}
        <div
          style={{
            width: "662px",
            minHeight: 0,
            maxHeight: "140px",
            wordWrap: "break-word",
            overflow: "hidden",
            fontSize: "16px",
            marginTop: "16px",
          }}
        >
          {cDescription2}
        </div>
      </>

      <>
        {(cCourse && cCourse.length) > 0 ||
        (cQuality && cQuality.length > 0) ||
        (cDOE && cDOE.length > 0) ||
        (cCourse1 && cCourse1.length > 0) ||
        (cQuality1 && cQuality1.length > 0) ||
        (cDOE1 && cDOE1.length > 0) ||
        (cCourse2 && cCourse2.length > 0) ||
        (cQuality2 && cQuality2.length > 0) ||
        (cDOE2 && cDOE2.length > 0) ? (
          <>
            <hr style={{ marginTop: "40px", width: "calc(100% - 80px)" }} />
            <p
              style={{
                fontSize: "22px",
                fontWeight: "700",
                color: "#F93B1D",
                marginTop: "15px",
              }}
            >
              {languageChanger(cLanguage, "განათლება", "Knowledge")}
            </p>
          </>
        ) : (
          ""
        )}
        {cCourse && cCourse.length > 0 ? (
          <p
            style={{
              marginTop: "15px",
              fontWeight: "600",
              marginBottom: "7px",
            }}
          >
            {cCourse}, {cQuality}{" "}
          </p>
        ) : (
          <p
            style={{
              marginTop: "15px",
              fontWeight: "600",
              marginBottom: "7px",
            }}
          >
            {cQuality}{" "}
          </p>
        )}
        <em style={{ fontSize: "16px", color: "#909090", marginTop: "7px" }}>
          {cFinishDate}
        </em>
        <div
          style={{
            width: "662px",
            minHeight: "0px",
            maxHeight: "230px",
            wordWrap: "break-word",
            overflow: "hidden",
            fontSize: "16px",
            marginTop: "16px",
          }}
        >
          {cDOE}
        </div>
      </>

      <>
        {cCourse1 && cCourse1.length > 0 ? (
          <p
            style={{
              marginTop: "15px",
              fontWeight: "600",
              marginBottom: "7px",
            }}
          >
            {cCourse1}, {cQuality1}{" "}
          </p>
        ) : (
          <p
            style={{
              marginTop: "15px",
              fontWeight: "600",
              marginBottom: "7px",
            }}
          >
            {cQuality1}{" "}
          </p>
        )}
        <em style={{ fontSize: "16px", color: "#909090", marginTop: "7px" }}>
          {cFinishDate1}
        </em>
        <div
          style={{
            width: "662px",
            minHeight: "0px",
            maxHeight: "210px",
            wordWrap: "break-word",
            overflow: "hidden",
            fontSize: "16px",
            marginTop: "16px",
          }}
        >
          {cDOE1}
        </div>
      </>

      <>
        {cCourse2 && cCourse2.length > 0 ? (
          <p
            style={{
              marginTop: "15px",
              fontWeight: "600",
              marginBottom: "7px",
            }}
          >
            {cCourse2}, {cQuality2}{" "}
          </p>
        ) : (
          <p
            style={{
              marginTop: "15px",
              fontWeight: "600",
              marginBottom: "7px",
            }}
          >
            {cQuality2}{" "}
          </p>
        )}
        <em style={{ fontSize: "16px", color: "#909090" }}>{cFinishDate2}</em>
        <div
          style={{
            width: "662px",
            height: "230px",
            wordWrap: "break-word",
            overflow: "hidden",
            fontSize: "16px",
            marginTop: "16px",
          }}
        >
          {cDOE2}
        </div>
      </>
    </div>
  );
}
