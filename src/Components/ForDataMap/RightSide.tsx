import React from "react";
import { useContext } from "react";
import { MyPersonalContext } from "../InfoUpdate";

import CommonStyles from "../Common.module.css";
import PersonalStyles from "../Personal.module.css";

import Ellipse from "../Assets/Img/2. SecondPage/Ellipse.svg";
import Vector from "../Assets/Img/2. SecondPage/Vectorvector.svg";
import OrangeLogo from "../../Assets/Img/2. SecondPage/logoOrange.svg";
import mobileIcon from "../../Assets/Icon/phoneIcon.svg";
import spiralIcon from "../../Assets/Icon/@.svg";

export default function Rendered() {
  const MPCL = useContext(MyPersonalContext);
  const { cName, cUsername, cEmail, cTel, cAboutMe, cUploadImg, cBGColor } =
    MPCL;
  return (
    <div
      className={
        cBGColor
          ? CommonStyles.renderContainerDark
          : CommonStyles.renderContainer
      }
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
        <div style={{ marginLeft: "5px" }}>{cEmail}</div>
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
        <div style={{ marginLeft: "5px" }}>{cTel}</div>
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
    </div>
  );
}
