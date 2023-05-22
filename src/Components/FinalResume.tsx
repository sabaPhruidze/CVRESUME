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

  return <div>few</div>;
}
