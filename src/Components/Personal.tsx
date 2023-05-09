import React from "react";
import { useContext } from "react";
import { context } from "../App";

import georgiaFlag from "../Assets/Img/common/georgia.png";
import unitedKingdomFlag from "../Assets/Img/common/unitedKingdom.png";
import lightMode from "../Assets/Icon/sunMode.svg";
import darkMode from "../Assets/Icon/nightMode.svg";

import Ellipse from "../Assets/Img/2. SecondPage/Ellipse.svg";
import Vector from "../Assets/Img/2. SecondPage/Vectorvector.svg";
import OrangeLogo from "../Assets/Img/2. SecondPage/logoOrange.svg";

import CommonStyles from "./Common.module.css";
import PersonalStyles from "./Personal.module.css";

export default function Personal() {
  const useAppContext1 = useContext(context);

  return (
    <div className={`${CommonStyles.container} ${CommonStyles.containerFlex}`}>
      <div className={CommonStyles.infoContainer}>
        <img
          src={Ellipse}
          alt="Ellipse"
          className={CommonStyles.ellipse}
          onClick={() => useAppContext1.sPage(0)}
        />
        <img
          src={Vector}
          alt="Vector"
          className={CommonStyles.vector}
          onClick={() => useAppContext1.sPage(0)}
        />
        <div className={CommonStyles.skeleton}>
          <div className={CommonStyles.dFlex}>
            <p
              style={{
                fontSize: "24px",
                marginBottom: "12px",
                fontWeight: "700",
              }}
            >
              პირადი ინფო
            </p>
            <p
              style={{
                fontSize: "20px",
              }}
            >
              1/3
            </p>
          </div>
          <hr style={{ marginBottom: "69px" }} />
          <div className={PersonalStyles.nameUSername}>
            <div className={PersonalStyles.namePart}>
              <label htmlFor="namef">სახელი</label>
              <input type="text" placeholder="ანზორ" id="namef" />
              <span>მინიმუმ 2 ასო, ქართული ასოები</span>
            </div>
            <div className={PersonalStyles.lastNamePart}>
              <label htmlFor="userName">გვარი</label>
              <input type="text" placeholder="მუმლაძე" id="userName" />
              <span>მინიმუმ 2 ასო, ქართული ასოები</span>
            </div>
          </div>
          <div className={PersonalStyles.upload}>
            <p>პირადი ფოტოს ატვირთვა</p>
            <label htmlFor="uploadImg" style={{ textAlign: "center" }}>
              ატვირთვა
              <input
                type="file"
                alt="upload photo"
                accept="image/*"
                id="uploadImg"
              />
              {/* allowing only Images */}
            </label>
          </div>
          <div className={PersonalStyles.aboutUs}>
            <label>
              ჩვენს შესახებ <span>(არასავალდებულო)</span>
            </label>
            <textarea name="" id=""></textarea>
          </div>
        </div>
      </div>
      <div className={CommonStyles.renderContainer}></div>
    </div>
  );
}
