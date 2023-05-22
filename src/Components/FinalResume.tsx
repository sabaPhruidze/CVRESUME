import React from "react";
import { useContext, useEffect } from "react";
import { context } from "../App";

import CommonStyles from "./Styles/Common.module.css";
import RightSide from "./InfoUpdateComponents/RightSide";
import OrangeLogo from "../Assets/Img/2. SecondPage/logoOrange.svg";
import mobileIcon from "../Assets/Icon/phoneIcon.svg";
import spiralIcon from "../Assets/Icon/@.svg";
import { ImgReplay } from "./DataMap/Replay";
export default function FinalResume() {
  const useAppContext4 = useContext(context);
  const {
    ExperienceDateStartRef,
    ExperienceDateEndRef,
    sDOE,
    ExperienceTextAreaRef,
    ExperienceDateStartRef1,
    ExperienceDateEndRef1,
    ExperienceTextAreaRef1,
    ExperienceDateStartRef2,
    ExperienceDateEndRef2,
    ExperienceTextAreaRef2,
    sCourse,
    cTop,
    sTop,
    aboutMeRef,
    replayRef,
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
    cCorrect5,
    sCorrect5,
    cCorrect6,
    sCorrect6,
    cCorrect7,
    sCorrect7,
    cCorrect8,
    sCorrect8,
    cCorrect9,
    sCorrect9,
    cCorrect10,
    sCorrect10,
    cVisible1,
    sVisible1,
    cCourse,
    cQuality,
    cFinishDate,
    cDOE,
    cCourse1,
    sCourse1,
    cQuality1,
    sQuality1,
    cFinishDate1,
    sFinishDate1,
    cDOE1,
    sDOE1,
    cCourse2,
    sCourse2,
    cQuality2,
    sQuality2,
    cFinishDate2,
    sFinishDate2,
    cVisible2,
    sVisible2,
    cDOE2,
    sDOE2,
    courseRef,
    qualityRef,
    finishDateRef,
    DOERef,
    sFinishDate,
    sQuality,
  } = useAppContext4;

  useEffect(() => {
    function getLocalStorage(getItemName: any, setState: any) {
      const storedData = localStorage.getItem(getItemName);
      setState(storedData && JSON.parse(storedData));
    }
    getLocalStorage("AboutMe", sAboutMe);
    getLocalStorage("course", sCourse);
    getLocalStorage("course1", sCourse1);
    getLocalStorage("course2", sCourse2);
    getLocalStorage("Description", sDescription);
    getLocalStorage("Description1", sDescription1);
    getLocalStorage("Description2", sDescription2);
    getLocalStorage("DOE", sDOE);
    getLocalStorage("DOE1", sDOE1);
    getLocalStorage("DOE2", sDOE2);
    getLocalStorage("Email", sEmail);
    getLocalStorage("Employer", sEmployer);
    getLocalStorage("Employer1", sEmployer1);
    getLocalStorage("Employer2", sEmployer2);
    getLocalStorage("endDate", sEndDate);
    getLocalStorage("endDate1", sEndDate1);
    getLocalStorage("endDate2", sEndDate2);
    getLocalStorage("finishDate", sFinishDate);
    getLocalStorage("finishDate1", sFinishDate1);
    getLocalStorage("finishDate2", sFinishDate2);
    getLocalStorage("lmage", sUploadImg);
    getLocalStorage("name", sName);
    getLocalStorage("Position", sPosition);
    getLocalStorage("Position1", sPosition1);
    getLocalStorage("Position2", sPosition2);
    getLocalStorage("Quality", sQuality);
    getLocalStorage("Quality1", sQuality1);
    getLocalStorage("Quality2", sQuality2);
    getLocalStorage("startDate", sStartDate);
    getLocalStorage("startDate1", sStartDate1);
    getLocalStorage("startDate2", sStartDate2);
    getLocalStorage("Telephone", sTel);
    getLocalStorage("username", sUsername);
  }, []);

  return (
    <div
      className={
        cBGColor
          ? `${CommonStyles.finalResumeDark} ${CommonStyles.finalResume}`
          : `${CommonStyles.finalResume}`
      }
    >
      <ImgReplay />
      <div
        style={{
          border: cBGColor ? "1px solid white" : "1px solid black",
          width: 1080,
        }}
      >
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
            <div
              style={{ marginLeft: "5px", color: cBGColor ? "white" : "black" }}
            >
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
            <div
              style={{ marginLeft: "5px", color: cBGColor ? "white" : "black" }}
            >
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
                minHeight: "30px",
                maxHeight: "135px",
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
          <img
            src={OrangeLogo}
            alt="OrangeLogo"
            className={CommonStyles.orange}
          />
          {cPosition.length > 0 ||
          cEmployer.length > 0 ||
          cStartDate.length > 0 ||
          cEndDate.length > 0 ||
          cDescription.length > 0 ? (
            <>
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
                გამოცდილება
              </p>
              <p
                style={{
                  marginTop: "15px",
                  fontWeight: "600",
                  marginBottom: "7px",
                }}
              >
                {cPosition}, {cEmployer}{" "}
              </p>
              <em
                style={{ fontSize: "16px", color: "#909090", marginTop: "7px" }}
              >
                {cStartDate} - {cEndDate}
              </em>
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
          ) : (
            ""
          )}
          {cPosition1.length > 0 ||
          cEmployer1.length > 0 ||
          cStartDate1.length > 0 ||
          cEndDate1.length > 0 ||
          cDescription1.length > 0 ? (
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
              <em
                style={{ fontSize: "16px", color: "#909090", marginTop: "7px" }}
              >
                {cStartDate1} - {cEndDate1}
              </em>
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
          ) : (
            ""
          )}
          {cPosition2.length > 0 ||
          cEmployer2.length > 0 ||
          cStartDate2.length > 0 ||
          cEndDate2.length > 0 ||
          cDescription2.length > 0 ? (
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
              <em
                style={{ fontSize: "16px", color: "#909090", marginTop: "7px" }}
              >
                {cStartDate2} - {cEndDate2}
              </em>
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
          ) : (
            ""
          )}
          {cCourse.length > 0 || cQuality.length > 0 || cDOE.length > 0 ? (
            <>
              <hr style={{ marginTop: "40px", width: "calc(100% - 80px)" }} />
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#F93B1D",
                  marginTop: "15px",
                }}
              >
                განათლება
              </p>
              <p
                style={{
                  marginTop: "15px",
                  fontWeight: "600",
                  marginBottom: "7px",
                }}
              >
                {cCourse}, {cQuality}{" "}
              </p>
              <em
                style={{ fontSize: "16px", color: "#909090", marginTop: "7px" }}
              >
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
          ) : (
            ""
          )}
          {cCourse1.length > 0 || cQuality1.length > 0 || cDOE1.length > 0 ? (
            <>
              <p
                style={{
                  marginTop: "15px",
                  fontWeight: "600",
                  marginBottom: "7px",
                }}
              >
                {cCourse1}, {cQuality1}{" "}
              </p>
              <em
                style={{ fontSize: "16px", color: "#909090", marginTop: "7px" }}
              >
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
          ) : (
            ""
          )}
          {cCourse2.length > 0 || cQuality2.length > 0 || cDOE2.length > 0 ? (
            <>
              <p
                style={{
                  marginTop: "15px",
                  fontWeight: "600",
                  marginBottom: "7px",
                }}
              >
                {cCourse2}, {cQuality2}{" "}
              </p>
              <em style={{ fontSize: "16px", color: "#909090" }}>
                {cFinishDate2}
              </em>
              <div
                style={{
                  width: "662px",
                  height: "210px",
                  wordWrap: "break-word",
                  overflow: "hidden",
                  fontSize: "16px",
                  marginTop: "16px",
                }}
              >
                {cDOE2}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
