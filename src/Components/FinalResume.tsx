import React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import { context } from "../App";
// import jsPDF from "jspdf";
import CommonStyles from "./Styles/Common.module.css";

import Ellipse from "../Assets/Img/2. SecondPage/Ellipse.svg";
import Vector from "../Assets/Img/2. SecondPage/Vectorvector.svg";
import OrangeLogo from "../Assets/Img/2. SecondPage/logoOrange.svg";
import mobileIcon from "../Assets/Icon/phoneIcon.svg";
import spiralIcon from "../Assets/Icon/@1.svg";
import { ImgReplay } from "./DataMap/Replay";
import vectorClose from "../Assets/Img/4. Fourth page/Vector (1).svg";
export default function FinalResume() {
  function languageChanger(changeReason: boolean, geo: string, eng: string) {
    return !changeReason ? geo : eng;
  }
  const useAppContext4 = useContext(context);
  const {
    sDOE,
    sCourse,
    sPage,
    cBGColor,
    sBGColor,
    cName,
    sName,
    cUsername,
    sUsername,
    cUploadImg,
    cEmail,
    sEmail,
    cLanguage,
    cTel,
    sTel,
    cAboutMe,
    sAboutMe,
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
    cDOE2,
    sDOE2,
    sFinishDate,
    sQuality,
  } = useAppContext4;
  const imgData = [
    {
      src: Ellipse,
      alt: "Ellipse",
      className: cBGColor
        ? `${CommonStyles.ellipse} ${CommonStyles.ellipseDark}`
        : CommonStyles.ellipse,
      onClick: () => {
        sPage(3);
        if (cVisible1) {
          sVisible1(false);
        }
      },
      key: 0,
    },
    {
      src: Vector,
      alt: "Vector",
      className: cBGColor
        ? `${CommonStyles.vectorDark} ${CommonStyles.vectorLight}`
        : CommonStyles.vectorDark,
      onClick: () => {
        sPage(3);
        if (cVisible1) {
          sVisible1(false);
        }
      },
      key: 1,
    },
  ];
  // const exportRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    sBGColor(false);
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
  const [cClose, sClose] = useState<boolean>(false);
  return (
    <>
      <div className={CommonStyles.finalRenderContainer}>
        <div>
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
            <em style={{ fontSize: "16px", color: "#909090" }}>
              {cFinishDate2}
            </em>
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
          <img
            src={OrangeLogo}
            alt="OrangeLogo"
            style={{
              width: 42,
              height: 42,
              marginBottom: 44,
              cursor: "pointer",
            }}
          />
        </div>
      </div>
      {!cClose && (
        <div
          style={{
            width: "427px",
            height: "167px",
            border: "1px solid black",
            boxShadow: " 0px 4px 28px 0px rgba(0, 0, 0, 0.25)",
            position: "absolute",
            top: "53px",
            right: "70px",
            zIndex: 100,
            display: " flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "28px 30px 30px",
            gap: "10px",
            fontWeight: 700,
            fontSize: "28px",
            lineHeight: "43px",
          }}
        >
          {languageChanger(
            cLanguage,
            "რეზიუმე წარმატებით გაიგზავნა 🎉",
            "Resume was successfully sent 🎉"
          )}
        </div>
      )}
      <img
        src={vectorClose}
        alt="close button"
        style={{
          width: "13px",
          height: "13px",
          position: "absolute",
          top: "70px",
          right: "84px",
          cursor: "pointer",
          zIndex: 101,
          visibility: cClose ? "hidden" : "visible",
        }}
        onClick={() => {
          sClose(true);
        }}
      />
      {imgData.map((data) => (
        <div key={data.key}>
          <img
            src={data.src}
            alt={data.alt}
            className={data.className}
            onClick={data.onClick}
          />
        </div>
      ))}
    </>
  );
}
